import { storageUnitHeaders } from "constants";
import { StorageUnitExcel } from "interfaces/storage/storageUnitExcel";
import * as XLSX from "xlsx";

export function parseUnitStorageSheet(workbook: XLSX.WorkBook) {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<StorageUnitExcel>(worksheet, {
    header: storageUnitHeaders,
    raw: false,
    range: 1,
  });

  console.log("Parsed Storage Unit Data:", jsonData);
  return jsonData.map((row: StorageUnitExcel) => ({
    id: row.unit || "",
    category: row.category || "",
    transit_state: row.transit_state || "",
    position: {
      loc_type: "YARD",
      location: "PDP",
      slot: row.slot || undefined,
      orientation: "Y",
    },
    storage: {
      storage_last_free_day: row.storage_last_free_day
        ? formatExcelDate(row.storage_last_free_day)
        : "",
    },
  }));

  function formatExcelDate(dateStr: string): string {
    // Try to parse as Excel date serial number
    const excelDate = Number(dateStr);
    if (!isNaN(excelDate)) {
      const jsDate = XLSX.SSF.parse_date_code(excelDate);
      if (jsDate) {
        const yyyy = jsDate.y;
        const mm = String(jsDate.m).padStart(2, "0");
        const dd = String(jsDate.d).padStart(2, "0");
        const hh = String(jsDate.H).padStart(2, "0");
        const min = String(jsDate.M).padStart(2, "0");
        const ss = String(jsDate.S).padStart(2, "0");
        return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
      }
    }
    // If not a serial, try to parse as string date
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const hh = String(d.getHours()).padStart(2, "0");
      const min = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
    }
    return dateStr;
  }
}
