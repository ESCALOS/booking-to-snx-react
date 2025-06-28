export type TemplateOption = {
  value: TemplateType;
  label: string;
};

export type TemplateValue = "BK" | "BL" | "U" | "C" | "TD";

export type XmlConverter<T> = (item: T) => unknown;
