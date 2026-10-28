export const MAX_OCR_FILE_BYTES = 10 * 1024 * 1024;

const SUPPORTED_IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp']);

/**
 * Validate file metadata before creating an expensive OCR worker.
 * This is a UX/resource guard, not a security assertion about file contents.
 * @param {{ type: string, size: number } | null | undefined} file
 * @returns {'empty' | 'too-large' | 'unsupported' | null}
 */
export function validateOcrFile(file) {
  if (!file || !Number.isSafeInteger(file.size) || file.size <= 0) return 'empty';
  if (file.size > MAX_OCR_FILE_BYTES) return 'too-large';
  if (!SUPPORTED_IMAGE_TYPES.has(file.type)) return 'unsupported';
  return null;
}

/**
 * Compare declared MIME with a minimal file signature before OCR worker startup.
 * Rejects obvious mismatches, not malicious payloads or corrupt decoded images.
 * @param {{ type: string, slice: (start: number, end: number) => Blob } | null | undefined} file
 * @returns {Promise<'invalid-content' | null>}
 */
export async function validateOcrImageSignature(file) {
  if (!file || !SUPPORTED_IMAGE_TYPES.has(file.type) || typeof file.slice !== 'function') return 'invalid-content';
  try {
    const bytes = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    const starts = (...signature) => signature.every((value, index) => bytes[index] === value);
    const valid = file.type === 'image/png'
      ? starts(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)
      : file.type === 'image/jpeg'
        ? starts(0xff, 0xd8, 0xff)
        : starts(0x52, 0x49, 0x46, 0x46) &&
          bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50;
    return valid ? null : 'invalid-content';
  } catch {
    return 'invalid-content';
  }
}
