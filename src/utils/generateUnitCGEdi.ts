import { HeaderCGEdi } from "interfaces/unitCargaGeneralEdi/headerCGEdi";
import { UnitCargaGeneralEdi } from "interfaces/unitCargaGeneralEdi/unitCargaGeneralEdi";

export function generateUnitCGEDI(
  headerUnitCGEdi: HeaderCGEdi,
  unitCGEdi: UnitCargaGeneralEdi[]
): string {
  // Generar fecha y hora actual
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const dateTime = `${year}${month}${day}:${hours}${minutes}`;
  const fullDateTime = `${year}${month}${day}${hours}${minutes}`;

  // Calcular el número del día del año + 99
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const yearLastTwoDigits = year.slice(-2);
  const sequenceNumber = `${yearLastTwoDigits}${dayOfYear + 99}`;

  // Construir las líneas del EDI
  const lines: string[] = [];

  // Primera línea: UNB
  lines.push(`UNB+UNOA:2+GCPU+PEPIO+${dateTime}+${sequenceNumber}'`);

  // Segunda línea: UNH (estática)
  lines.push(`UNH+1+BAPLIE:D:95B:UN:SMDG20'`);

  // Tercera línea: BGM (estática)
  lines.push(`BGM++0+22'`);

  // Cuarta línea: DTM
  lines.push(`DTM+137:${fullDateTime}:203'`);

  // Quinta línea: TDT
  const tripNumber = headerUnitCGEdi.trip_number || "1";
  const vesselId = headerUnitCGEdi.identify || "12345";
  const vesselName = headerUnitCGEdi.vessel_name || "NAVE GAPS";
  lines.push(
    `TDT+20+${tripNumber}+++GCP:172:20+++${vesselId}:103::${vesselName}'`
  );

  // Sexta línea: LOC (estática)
  lines.push(`LOC+5+PEPIO:139:6'`);

  // Generar líneas para cada contenedor
  unitCGEdi.forEach((unit) => {
    const location = unit.location || "0010102";
    const wt = unit.wt || "17000";
    const awt = unit.awt || "30000";
    const vol = unit.vol || "";
    const poo = unit.poo || "CLVAP";
    const pod = "PEPIO"; // Estático según documentación
    const referenceNumber = unit.reference_number || "1";
    const containerId = unit.id;
    const containerType = unit.type || "FRAC";

    // LOC+147+ ubicación
    lines.push(
      `LOC+147+${location}::5'MEA+VGM++KGM:${wt}'MEA+WT++KGM:${wt}'MEA+AWT++KGM:${awt}'MEA+VOL++M3:${vol}'LOC+9+${poo}'LOC+11+${pod}'LOC+76+${poo}'LOC+83+${pod}'RFF+BM:${referenceNumber}'EQD+CN+${containerId}+${containerType}++3+5'NAD+CA+GCP:172:20'`
    );
  });

  return lines.join("\n");
}
