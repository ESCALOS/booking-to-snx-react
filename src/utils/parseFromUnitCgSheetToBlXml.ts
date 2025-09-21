import { unitCgHeaders } from "constants";
import { BillOfLadingCargaGeneral } from "interfaces/billOfLadingCargaGeneral";
import { UnitCargaGeneralExcel } from "interfaces/unitCargaGeneral/unitCargaGeneralExcel";

import * as XLSX from "xlsx";
export function parseFromUnitCgSheetToBlXml(
  workbook: XLSX.WorkBook
): BillOfLadingCargaGeneral[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const rowsGoods = XLSX.utils.sheet_to_json<UnitCargaGeneralExcel>(worksheet, {
    header: unitCgHeaders,
    raw: false,
    range: 2,
  });

  // Mapear BillOfLading únicos con sus goods_bl agrupados
  const blMap = new Map<string, BillOfLadingCargaGeneral>();

  rowsGoods.forEach((row) => {
    const blNumber = row.bill_of_lading;

    // Crear el good_bl para esta unidad
    const goodBl = {
      unit_id: row.id || "",
      unit_key: row.id || "",
    };

    const existingBl = blMap.get(blNumber);

    if (existingBl) {
      // Si ya existe el BL, agregar el good_bl
      existingBl.goods_bl?.push(goodBl);
    } else {
      // Crear nuevo BillOfLading
      const type = row.bl_type === "HOUSE" ? "HOUSE" : "MASTER";

      const newBl: BillOfLadingCargaGeneral = {
        nbr: blNumber,
        category: row.category,
        line: "GCP",
        carrier_visit: row.ob_visit,
        pol: "PEPIO",
        type,
        goods_bl: [goodBl],
      };

      blMap.set(blNumber, newBl);
    }
  });

  return Array.from(blMap.values());
}
