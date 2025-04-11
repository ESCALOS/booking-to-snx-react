import { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import { Booking, BookingExcel } from "../types";
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
      const headers: string[] = [
        "nbr",
        "line",
        "pol",
        "pod_1",
        "eq_status",
        "pod_optional",
        "shipper_id",
        "quantity",
        "carrier_id",
        "item_equipment_type",
        "item_eq_grade",
        "item_gross_weight",
        "item_commodity_id",
        "reefer_temp_reqd_c",
        "reefer_humidity_pct",
        "reefer_vent_required_value",
        "reefer_vent_required_unit",
        "reefer_co2_pct",
        "reefer_o2_pct",
      ];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json<BookingExcel>(worksheet, {
        header: headers,
        raw: false,
        range: 1,
      });

      if (jsonData.length > 0) {
        const bookings: Booking[] = jsonData.map((bookingJson) => {
          return {
            nbr: bookingJson.nbr || undefined,
            line: bookingJson.line || undefined,
            pol: bookingJson.pol || undefined,
            pod_1: bookingJson.pod_1 || undefined,
            eq_status: bookingJson.eq_status || undefined,
            pod_optional: bookingJson.pod_optional || undefined,
            shipper_id: bookingJson.shipper_id || undefined,
            quantity: bookingJson.quantity || undefined,
            carrier: {
              id: bookingJson.carrier_id || undefined,
            },
            items: [
              {
                qty: bookingJson.quantity || undefined,
                equipment_type: bookingJson.item_equipment_type || undefined,
                tally_limit: bookingJson.quantity || undefined,
                eq_grade: bookingJson.item_eq_grade || undefined,
                gross_weight: bookingJson.item_gross_weight || undefined,
                commodity_id: bookingJson.item_commodity_id || undefined,
                receive_limit: bookingJson.quantity || undefined,
                reefer: {
                  temp_reqd_c: bookingJson.reefer_temp_reqd_c || undefined,
                  humidity_pct: bookingJson.reefer_humidity_pct || undefined,
                  vent_required_value:
                    bookingJson.reefer_vent_required_value || undefined,
                  vent_required_unit:
                    bookingJson.reefer_vent_required_unit || undefined,
                  co2_pct: bookingJson.reefer_co2_pct || undefined,
                  o2_pct: bookingJson.reefer_o2_pct || undefined,
                },
              },
            ],
          };
        });

        const xml = generateXML(bookings);
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
