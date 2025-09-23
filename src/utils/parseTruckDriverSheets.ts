import { truckDriverHeaders } from "constants";
import { TruckDriver } from "interfaces/truckDriver/truckDriver";
import { TruckDriverExcel } from "interfaces/truckDriver/truckDriverExcel";
import * as XLSX from "xlsx";

export function parseTruckDriverSheets(workbook: XLSX.WorkBook): TruckDriver[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<TruckDriverExcel>(worksheet, {
    header: truckDriverHeaders,
    raw: false,
    range: 1,
  });

  return jsonData.map((row) => {
    return {
      name: row.name?.toString().trim() || undefined,
      card_id: row.card_id?.toString().trim() || undefined,
      license_nbr: row.license?.toString().trim() || undefined,
      bat_nbr: row.callup_id?.toString().trim() || undefined,
      license_state: row.license_state?.toString().trim() || undefined,
      status: row.status?.toString().trim() || undefined,
      flex_1: row.document_type?.toString().trim() || undefined,
      life_cycle_state: "ACT",
    };
  });
}
