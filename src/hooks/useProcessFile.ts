import { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import { Reefer } from "../types";
import { downloadXML, generateXML } from "../utils";

export const useProcessFile = () => {
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
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json<Reefer>(worksheet, {
        raw: false,
      });

      if (jsonData.length > 0) {
        const reefer: Reefer = {
          temp_reqd_c:
            parseFloat(jsonData[0].temp_reqd_c?.toString() ?? "") || undefined,
          humidity_pct:
            parseFloat(jsonData[0].humidity_pct?.toString() ?? "") || undefined,
          vent_required_value:
            parseFloat(jsonData[0].vent_required_value?.toString() ?? "") ||
            undefined,
          vent_required_unit:
            jsonData[0].vent_required_unit?.toString() || undefined,
          co2_pct:
            parseFloat(jsonData[0].co2_pct?.toString() ?? "") || undefined,
          o2_pct: parseFloat(jsonData[0].o2_pct?.toString() ?? "") || undefined,
        };

        const xml = generateXML(reefer);
        setXmlContent(xml);
      }
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

  return { processFile, isLoading, fileName, xmlContent, handleDownload };
};
