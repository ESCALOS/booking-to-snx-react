export function extractManifest(text: string): string | undefined {
  const match = text.match(/\d{4}-\d{2,3}/);
  return match ? match[0] : undefined;
}
