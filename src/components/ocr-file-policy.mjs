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
