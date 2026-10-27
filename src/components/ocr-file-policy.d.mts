export const MAX_OCR_FILE_BYTES: number;
export function validateOcrFile(
  file: { type: string; size: number } | null | undefined,
): 'empty' | 'too-large' | 'unsupported' | null;
