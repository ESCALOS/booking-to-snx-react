import { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import { Booking, Reefer } from "../types";
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
      const jsonData = XLSX.utils.sheet_to_json<Booking>(worksheet, {
        raw: false,
      });

      if (jsonData.length > 0) {
        for (const bookingJson of jsonData) {
          const booking: Booking = {
            nbr: bookingJson.nbr?.toString() || undefined,
            line: bookingJson.line?.toString() || undefined,
            pol: bookingJson.pol?.toString() || undefined,
            pol_name: bookingJson.pol_name?.toString() || undefined,
            pod_1: bookingJson.pod_1?.toString() || undefined,
            pod_1_name: bookingJson.pod_1_name?.toString() || undefined,
            eq_status: bookingJson.eq_status?.toString() || undefined,
            pod_optional: bookingJson.pod_optional?.toString() || undefined,
            shipper_id: bookingJson.shipper_id?.toString() || undefined,
            shipper_name: bookingJson.shipper_name?.toString() || undefined,
            origin: bookingJson.origin?.toString() || undefined,
            destination: bookingJson.destination?.toString() || undefined,
            client_ref_no: bookingJson.client_ref_no?.toString() || undefined,
            stow_block: bookingJson.stow_block?.toString() || undefined,
            stuffing_location:
              bookingJson.stuffing_location?.toString() || undefined,
            ood: bookingJson.ood?.toString() || undefined,
            override_cutoff:
              bookingJson.override_cutoff?.toString() || undefined,
            hold_partials: bookingJson.hold_partials?.toString() || undefined,
            prevent_type_subst:
              bookingJson.prevent_type_subst?.toString() || undefined,
            empty_pickup_location:
              bookingJson.empty_pickup_location?.toString() || undefined,
            full_return_location:
              bookingJson.full_return_location?.toString() || undefined,
            categorty: bookingJson.categorty?.toString() || undefined,
            notes: bookingJson.notes?.toString() || undefined,
            created_by: bookingJson.created_by?.toString() || undefined,
            created_date: bookingJson.created_date?.toString() || undefined,
            modified_by: bookingJson.modified_by?.toString() || undefined,
            modified_date: bookingJson.modified_date?.toString() || undefined,
            quantity:
              parseFloat(bookingJson.quantity?.toString() ?? "") || undefined,
            carrier: {
              id: bookingJson.carrier?.id?.toString() || undefined,
              facility: bookingJson.carrier?.facility?.toString() || undefined,
              mode: bookingJson.carrier?.mode?.toString() || undefined,
            },
          };
        }

        const xml = generateXML(booking);
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
