import { parseUserSheets } from "@utils/parseUserSheets";
import { parseBlCgSheet } from "@utils/parseBlCgSheet";
import * as XLSX from "xlsx";
import { downloadXML } from "@utils/downloadXml";
import { useCallback, useState } from "react";
import { TemplateValue } from "types";
import { Booking } from "interfaces/booking";
import { BillOfLading } from "interfaces/billOfLafing";
import { BillOfLadingCargaGeneral } from "interfaces/billOfLadingCargaGeneral";
import { Unit } from "interfaces/unit";
import { parseBookingSheet } from "@utils/parseBookingSheet";
import { parseBlSheet } from "@utils/parseBlSheet";
import { parseUnitSheet } from "@utils/parseUnitSheet";
import { generateXML } from "@utils/generateXml";
import { User } from "interfaces/user/user";
import { TruckDriver } from "interfaces/truckDriver/truckDriver";
import { parseTruckDriverSheets } from "@utils/parseTruckDriverSheets";
import { UnitCargaGeneral } from "interfaces/unitCargaGeneral/unitCargaGeneral";
import {
  parseUnitCgCombined,
  UnitCgCombinedResult,
} from "@utils/parseUnitCgCombined";

export const useProcessFile = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateValue>("BK");
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [xmlContent, setXmlContent] = useState<string | null>(null);

  const processFile = async (file: File) => {
    setIsLoading(true);
    setFileName(file.name);
    setXmlContent(null);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);

      let parsedData:
        | Booking[]
        | BillOfLading[]
        | BillOfLadingCargaGeneral[]
        | Unit[]
        | UnitCargaGeneral[]
        | User[]
        | TruckDriver[]
        | UnitCgCombinedResult[] = [];

      switch (selectedTemplate) {
        case "BK":
          parsedData = await parseBookingSheet(workbook);
          break;
        case "BL":
          parsedData = parseBlSheet(workbook);
          break;
        case "BLCG":
          parsedData = parseBlCgSheet(workbook);
          break;
        case "U":
          parsedData = parseUnitSheet(workbook, file.name);
          break;
        case "UCG":
          parsedData = [parseUnitCgCombined(workbook)];
          break;
        case "C":
          parsedData = parseUserSheets(workbook);
          break;
        case "TD":
          parsedData = parseTruckDriverSheets(workbook);
          break;
      }
      const xml = generateXML({
        model: parsedData,
        selectedTemplate,
      });

      setXmlContent(xml);
    } catch (error) {
      console.error("Error processing file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = useCallback(() => {
    if (xmlContent && fileName) {
      downloadXML(xmlContent, fileName);
    }
  }, [xmlContent, fileName]);

  return {
    processFile,
    selectedTemplate,
    setSelectedTemplate,
    isLoading,
    fileName,
    xmlContent,
    handleDownload,
  };
};
