import { UnitCargaGeneralEdi } from "interfaces/unitCargaGeneralEdi/unitCargaGeneralEdi";
import { HeaderCGEdi } from "interfaces/unitCargaGeneralEdi/headerCGEdi";
import * as XLSX from "xlsx";

export interface ParseUnitCGEdiResult {
  header: HeaderCGEdi;
  units: UnitCargaGeneralEdi[];
}

export function parseUnitCGEdiSheet(
  workbook: XLSX.WorkBook
): ParseUnitCGEdiResult {
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Extraer datos de la cabecera de celdas específicas
  const tripNumber = worksheet["B1"] ? worksheet["B1"].v?.toString() : "";
  const identify = worksheet["E1"] ? worksheet["E1"].v?.toString() : "";
  const vesselName = worksheet["H1"] ? worksheet["H1"].v?.toString() : "";

  const header: HeaderCGEdi = {
    trip_number: tripNumber,
    identify: identify,
    vessel_name: vesselName,
  };

  // Parsear las unidades desde la fila 4 (índice 3)
  const jsonData = XLSX.utils.sheet_to_json<UnitCargaGeneralEdi>(worksheet, {
    header: [
      "id",
      "type",
      "location",
      "vgm",
      "wt",
      "awt",
      "vol",
      "pod",
      "poo",
      "reference_number",
    ],
    raw: false,
    range: 3,
  });

  const units = jsonData.map((item) => ({
    id: item.id,
    location: item.location,
    wt: item.wt,
    awt: item.awt,
    vol: item.vol,
    pod: item.pod,
    poo: item.poo,
    reference_number: item.reference_number,
    type: item.type,
  }));

  return {
    header,
    units,
  };
}
