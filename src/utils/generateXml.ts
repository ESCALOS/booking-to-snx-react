import { BillOfLading } from "interfaces/billOfLafing/billOfLading";
import { Booking } from "interfaces/booking";
import { Unit } from "interfaces/unit";
import { objectToXmlTag, XmlInput } from "./objectToXmlTag";
import {
  billOfLadingXml,
  billOfLadingCargaGeneralToXml,
  bookingToXml,
  userToXml,
  unitToXml,
  truckDriverToXml,
  unitCargaGeneralToXml,
  storageUnitToXml,
} from "./transformToXml";
import { TemplateValue } from "types";
import { User } from "interfaces/user/user";
import { TruckDriver } from "interfaces/truckDriver/truckDriver";
import { BillOfLadingCargaGeneral } from "interfaces/billOfLadingCargaGeneral";
import { UnitCgCombinedResult } from "./parseUnitCgCombined";
import { StorageUnit } from "interfaces/storage/storageUnit";

type TemplateModelMap = {
  BK: Booking;
  BL: BillOfLading;
  BLCG: BillOfLadingCargaGeneral;
  U: Unit;
  UCG: UnitCgCombinedResult;
  C: User;
  TD: TruckDriver;
  SU: StorageUnit;
};

const kebabHeaderTag: Record<TemplateValue, string> = {
  BK: "booking",
  BL: "bill-of-lading",
  BLCG: "bill-of-lading",
  U: "unit",
  UCG: "bill-of-lading",
  C: "user",
  TD: "truck-driver",
  SU: "unit",
};

const xmlConverters: {
  [K in TemplateValue]: (item: TemplateModelMap[K]) => XmlInput;
} = {
  BK: bookingToXml,
  BL: billOfLadingXml,
  BLCG: billOfLadingCargaGeneralToXml,
  U: unitToXml,
  UCG: () => ({ dummy: "" }), // Placeholder, se maneja especialmente
  C: userToXml,
  TD: truckDriverToXml,
  SU: storageUnitToXml,
};

export function generateXML<K extends TemplateValue>(params: {
  model: TemplateModelMap[K][];
  selectedTemplate: K;
}): string {
  const { model, selectedTemplate } = params;

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<argo:snx xmlns:argo="http://www.navis.com/argo" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.navis.com/argo snx.xsd">`,
  ];

  // Caso especial para UCG que combina units y bill-of-lading
  if (selectedTemplate === "UCG") {
    const combinedData = model as UnitCgCombinedResult[];

    for (const item of combinedData) {
      // Agregar units
      for (const unit of item.units) {
        xml.push(objectToXmlTag("unit", unitCargaGeneralToXml(unit)));
      }

      // Agregar bills of lading
      for (const bl of item.billsOfLading) {
        xml.push(
          objectToXmlTag("bill-of-lading", billOfLadingCargaGeneralToXml(bl))
        );
      }
    }
  } else {
    // Casos normales
    const tag = kebabHeaderTag[selectedTemplate];
    const convert = xmlConverters[selectedTemplate];

    for (const item of model) {
      xml.push(objectToXmlTag(tag, convert(item)));
    }
  }

  xml.push(`</argo:snx>`);
  return xml.join("\n");
}
