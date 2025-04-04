import { Reefer } from "./types";

export function generateXML(reefer: Reefer): string {
  const attributes = [
    `temp-reqd-c="${reefer.temp_reqd_c ?? 0}"`,
    `humidity-pct="${reefer.humidity_pct ?? 0}"`,
    `vent-required-value="${reefer.vent_required_value ?? 0}"`,
    `vent-required-unit="${reefer.vent_required_unit ?? "PERCENTAGE"}"`,
    `co2-pct="${reefer.co2_pct ?? 0}"`,
    `o2-pct="${reefer.o2_pct ?? 0}"`,
  ].join(" ");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <argo:snx xmlns:argo="http://www.navis.com/argo" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.navis.com/argo snx.xsd">
  <reefer ${attributes} />
  </argo:snx>`;
}

export function downloadXML(xmlContent: string, fileName: string) {
  const blob = new Blob([xmlContent], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName.replace(".xlsx", ".xml");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
