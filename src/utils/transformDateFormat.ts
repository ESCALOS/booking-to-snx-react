export function parseExcelDate(value: any): string | undefined {
    if (!value) return undefined;
  
    // Si ya es un Date (excel puede hacer esto si raw: false)
    if (value instanceof Date) {
      return value.toISOString().split("T")[0]; // yyyy-mm-dd
    }
  
    // Si es una fecha en string como "23-09-12"
    const isoGuess = new Date(value);
    if (!isNaN(isoGuess.getTime())) {
      return isoGuess.toISOString().split("T")[0];
    }
  
    // Si es número (fecha serial de Excel)
    const excelEpoch = new Date(Date.UTC(1899, 11, 30));
    const dateFromSerial = new Date(excelEpoch.getTime() + value * 86400000);
    return dateFromSerial.toISOString().split("T")[0];
  }
  
  export function normalizeMonthYear(value: string | number | undefined): string | undefined {
    if (!value) return undefined;
  
    const str = String(value).trim();
  
    // Caso: contiene "/"
    if (str.includes("/")) {
      const [monthPart, yearPart] = str.split("/");
      const mm = monthPart.padStart(2, "0");
      const yyyy = yearPart.length === 2 ? `20${yearPart}` : yearPart;
      return `${yyyy}-${mm}-01`;
    }
  
    // Caso: concatenado tipo 042012 o 42012
    const clean = str.padStart(6, "0"); // Asegura mínimo 6 dígitos
    const month = clean.slice(0, clean.length - 4);
    const year = clean.slice(-4);
    const mm = month.padStart(2, "0");
    return `${year}-${mm}-01`;
  }
  
  