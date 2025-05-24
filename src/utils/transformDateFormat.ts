export function normalizeMonthYear(
  value: string | number | undefined
): string | undefined {
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

export function transformYearOnDate(value: string | undefined) {
  if (!value) return undefined;

  const str = String(value).trim();

  // Caso 2020 -> 2020-01-01
  if (str.length === 4) {
    return `${str}-01-01`;
  }

  return undefined;
}
