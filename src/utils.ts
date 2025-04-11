import {
  Booking,
  CarrierXml,
  ItemXml,
  OogXml,
  ReeferXml,
  BookingXml,
} from "./types";

export function generateXML(bookings: Booking[]): string {
  const escapeXml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const toKebab = (str: string) => str.replace(/_/g, "-");

  const createAttributes = (
    obj: BookingXml | CarrierXml | ItemXml | ReeferXml | OogXml
  ): string =>
    Object.entries(obj || {})
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${toKebab(key)}="${escapeXml(String(value))}"`)
      .join(" ");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<argo:snx xmlns:argo="http://www.navis.com/argo" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.navis.com/argo snx.xsd">`,
  ];

  for (const booking of bookings) {
    const bookingAttrs = createAttributes({
      nbr: booking.nbr,
      line: booking.line,
      pol: booking.pol,
      pod_1: booking.pod_1,
      eq_status: booking.eq_status,
      pod_optional: booking.pod_optional,
      shipper_id: booking.shipper_id,
      quantity: booking.quantity ?? "1",
    });

    xml.push(`  <booking ${bookingAttrs}>`);

    if (booking.carrier) {
      const carrierAttrs = createAttributes(booking.carrier);
      xml.push(`    <carrier ${carrierAttrs} />`);
    }

    xml.push(`    <items>`);

    for (const item of booking.items ?? []) {
      const itemAttrs = createAttributes({
        qty: item.qty,
        equipment_type: item.equipment_type,
        tally_limit: item.tally_limit,
        eq_grade: item.eq_grade,
        gross_weight: item.gross_weight,
        commodity_id: item.commodity_id,
        receive_limit: item.receive_limit,
      });

      xml.push(`      <item ${itemAttrs}>`);
      xml.push(`        <hazards />`);

      if (item.reefer) {
        const reeferAttrs = createAttributes(item.reefer);
        xml.push(`        <reefer ${reeferAttrs} />`);
      }

      xml.push(
        `        <oog is-oog="N" oog-back-cm="0" oog-front-cm="0" oog-left-cm="0" oog-right-cm="0" oog-top-cm="0" />`
      );

      xml.push(`      </item>`);
    }

    xml.push(`    </items>`);
    xml.push(`    <hazards />`);
    xml.push(`  </booking>`);
  }

  xml.push(`</argo:snx>`);

  return xml.join("\n");
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
