export function getCategoryInfo(status?: string) {
  if (!status)
    return {
      category: undefined,
      transit_state: undefined,
      freight_kind: undefined,
      isExport: false,
    };

  const isExport = status.includes("Full");

  return {
    category: isExport ? "EXPORT" : "STORAGE",
    transit_state: isExport ? "INBOUND" : "YARD",
    freight_kind: isExport ? "FCL" : "MTY",
    isExport,
  };
}
