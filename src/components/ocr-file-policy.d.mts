export const MAX_OCR_FILE_BYTES: number;
export function validateOcrFile(
  file: { type: string; size: number } | null | undefined,
): 'empty' | 'too-large' | 'unsupported' | null;

/** A file signature mismatch is a format guard, not complete image validation. */
export function validateOcrImageSignature(
  file: { type: string; slice(start: number, end: number): Blob } | null | undefined,
): Promise<'invalid-content' | null>;
