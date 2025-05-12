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
  