import { BillOfLading } from "interfaces/billOfLafing/billOfLading";
import { Booking } from "interfaces/booking";
import { Unit } from "interfaces/unit";
import { objectToXmlTag, XmlInput } from "./objectToXmlTag";
import {
  billOfLadingXml,
  bookingToXml,
  userToXml,
  unitToXml,
} from "./transformToXml";
import { TemplateValue } from "types";
import { User } from "interfaces/user/user";

type TemplateModelMap = {
  BK: Booking;
  BL: BillOfLading;
  U: Unit;
  C: User;
};

const kebabHeaderTag: Record<TemplateValue, string> = {
  BK: "booking",
  BL: "bill-of-lading",
  U: "unit",
  C: "user",
};

const xmlConverters: {
  [K in TemplateValue]: (item: TemplateModelMap[K]) => XmlInput;
} = {
  BK: bookingToXml,
  BL: billOfLadingXml,
  U: unitToXml,
  C: userToXml,
};

export function generateXML<K extends TemplateValue>(params: {
  model: TemplateModelMap[K][];
  selectedTemplate: K;
}): string {
  const { model, selectedTemplate } = params;
  const tag = kebabHeaderTag[selectedTemplate];
  const convert = xmlConverters[selectedTemplate];

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<argo:snx xmlns:argo="http://www.navis.com/argo" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.navis.com/argo snx.xsd">`,
  ];

  for (const item of model) {
    xml.push(objectToXmlTag(tag, convert(item)));
  }

  xml.push(`</argo:snx>`);
  return xml.join("\n");
}
