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
      name: row.name || undefined,
      card_id: row.card_id || undefined,
      license_nbr: row.license || undefined,
      bat_nbr: row.callup_id || undefined,
      license_state: row.license_state || undefined,
      status: row.status || undefined,
      flex_1: row.document_type || undefined,
      life_cycle_state: "ACT",
    };
  });
}
