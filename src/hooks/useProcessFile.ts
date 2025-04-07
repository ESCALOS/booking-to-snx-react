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
        "ppol_name",
        "pod_1",
        "pod_1_name",
        "eq_status",
        "pod_optional",
        "shipper_id",
        "shipper_name",
        "origin",
        "destination",
        "client_ref_no",
        "stow_block",
        "stuffing_location",
        "ood",
        "override_cutoff",
        "hold_partials",
        "prevent_type_subst",
        "empty_pickup_location",
        "full_return_location",
        "category",
        "notes",
        "created_by",
        "created_date",
        "modified_by",
        "modified_date",
        "quantity",
        "carrier_id",
        "carrier_facility",
        "carrier_mode",
        "item_qty",
        "item_eq_size",
        "item_eq_iso_group",
        "item_eq_height",
        "item_eq_iso_group_description",
        "item_equipment_type",
        "item_equip_type_description",
        "item_seq_nbr",
        "item_tally_limit",
        "item_eq_material",
        "item_eq_grade",
        "item_gross_weight",
        "item_commodity_id",
        "item_commodity_name",
        "item_receive_limit",
        "item_remarks",
        "item_created_by",
        "item_created_date",
        "reefer_temp_reqd_c",
        "reefer_humidity_pct",
        "reefer_vent_required_value",
        "reefer_vent_required_unit",
        "reefer_co2_pct",
        "reefer_o2_pct",
        "oog_is_oog",
        "oog_oog_back_cm",
        "oog_oog_front_cm",
        "oog_oog_left_cm",
        "oog_oog_right_cm",
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
            category: bookingJson.category?.toString() || undefined,
            notes: bookingJson.notes?.toString() || undefined,
            created_by: bookingJson.created_by?.toString() || undefined,
            created_date: bookingJson.created_date?.toString() || undefined,
            modified_by: bookingJson.modified_by?.toString() || undefined,
            modified_date: bookingJson.modified_date?.toString() || undefined,
            quantity:
              parseFloat(bookingJson.quantity?.toString() ?? "") || undefined,
            carrier: {
              id: bookingJson.carrier_id?.toString() || undefined,
              facility: bookingJson.carrier_facility?.toString() || undefined,
              mode: bookingJson.carrier_mode?.toString() || undefined,
            },
            items: [
              {
                qty:
                  parseFloat(bookingJson.item_qty?.toString() ?? "") ||
                  undefined,
                eq_size: bookingJson.item_eq_size?.toString() || undefined,
                eq_iso_group:
                  bookingJson.item_eq_iso_group?.toString() || undefined,
                eq_height: bookingJson.item_eq_height?.toString() || undefined,
                eq_iso_group_description:
                  bookingJson.item_eq_iso_group_description?.toString() ||
                  undefined,
                equipment_type:
                  bookingJson.item_equipment_type?.toString() || undefined,
                equip_type_description:
                  bookingJson.item_equip_type_description?.toString() ||
                  undefined,
                seq_nbr: bookingJson.item_seq_nbr?.toString() || undefined,
                tally_limit:
                  bookingJson.item_tally_limit?.toString() || undefined,
                eq_material:
                  bookingJson.item_eq_material?.toString() || undefined,
                eq_grade: bookingJson.item_eq_grade?.toString() || undefined,
                gross_weight:
                  parseFloat(bookingJson.item_gross_weight?.toString() ?? "") ||
                  undefined,
                commodity_id:
                  bookingJson.item_commodity_id?.toString() || undefined,
                commodity_name:
                  bookingJson.item_commodity_name?.toString() || undefined,
                receive_limit:
                  parseFloat(
                    bookingJson.item_receive_limit?.toString() ?? ""
                  ) || undefined,
                remarks: bookingJson.item_remarks?.toString() || undefined,
                created_by:
                  bookingJson.item_created_by?.toString() || undefined,
                created_date:
                  bookingJson.item_created_date?.toString() || undefined,
                reefer: {
                  temp_reqd_c:
                    parseFloat(
                      bookingJson.reefer_temp_reqd_c?.toString() ?? ""
                    ) || undefined,
                  humidity_pct:
                    parseFloat(
                      bookingJson.reefer_humidity_pct?.toString() ?? ""
                    ) || undefined,
                  vent_required_value:
                    parseFloat(
                      bookingJson.reefer_vent_required_value?.toString() ?? ""
                    ) || undefined,
                  vent_required_unit:
                    bookingJson.reefer_vent_required_unit?.toString() ||
                    undefined,
                  co2_pct:
                    parseFloat(bookingJson.reefer_co2_pct?.toString() ?? "") ||
                    undefined,
                  o2_pct:
                    parseFloat(bookingJson.reefer_o2_pct?.toString() ?? "") ||
                    undefined,
                },
                oog: {
                  is_oog:
                    bookingJson.oog_is_oog?.toString() === "Y" ? true : false,
                  oog_back_cm:
                    bookingJson.oog_oog_back_cm?.toString() || undefined,
                  oog_front_cm:
                    bookingJson.oog_oog_front_cm?.toString() || undefined,
                  oog_left_cm:
                    bookingJson.oog_oog_left_cm?.toString() || undefined,
                  oog_right_cm:
                    bookingJson.oog_oog_right_cm?.toString() || undefined,
                  oog_top_cm:
                    bookingJson.oog_oog_top_cm?.toString() || undefined,
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
