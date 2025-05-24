export function extractManifest(text: string): string | undefined {
  const match = text.match(/\b\d{4}-\d{2,3}\b/);
  return match ? match[0] : undefined;
}
