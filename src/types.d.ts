export type TemplateOption = {
  value: TemplateType;
  label: string;
};

export type TemplateValue =
  | "BK"
  | "BL"
  | "BLCG"
  | "U"
  | "UCG"
  | "C"
  | "TD"
  | "UCGEDI";

export type XmlConverter<T> = (item: T) => unknown;
