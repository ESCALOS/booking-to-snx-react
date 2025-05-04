type XmlValue = string | number | boolean | undefined | null;
export interface XmlInput {
  [key: string]: XmlValue | XmlInput | XmlInput[];
}

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toKebab = (str: string) => str.replace(/_/g, "-");

const createAttributes = (obj: Record<string, XmlValue>): string =>
  Object.entries(obj)
    .filter(([, val]) => val !== undefined && val !== null)
    .map(([key, val]) => `${toKebab(key)}="${escapeXml(String(val))}"`)
    .join(" ");

export function objectToXmlTag(
  tagName: string,
  obj: XmlInput,
  options: { selfCloseEmpty?: boolean } = {}
): string {
  const { selfCloseEmpty = true } = options;
  const attributes: Record<string, XmlValue> = {};
  const children: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      const tag = toKebab(key);
      children.push(`<${tag}>`);
      for (const item of value) {
        children.push(objectToXmlTag("item", item as XmlInput, options));
      }
      children.push(`</${tag}>`);
    } else if (typeof value === "object" && value !== null) {
      children.push(objectToXmlTag(toKebab(key), value as XmlInput, options));
    } else {
      attributes[key] = value as XmlValue;
    }
  }

  const attrStr = createAttributes(attributes);
  const openTag = `<${toKebab(tagName)}${attrStr ? " " + attrStr : ""}>`;

  if (children.length === 0) {
    return selfCloseEmpty
      ? `<${toKebab(tagName)}${attrStr ? " " + attrStr : ""} />`
      : openTag + `</${toKebab(tagName)}>`;
  }

  return `${openTag}\n  ${children.join("\n  ")}\n</${toKebab(tagName)}>`;
}
