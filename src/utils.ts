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
      pol_name: booking.pol_name,
      pod_1: booking.pod_1,
      pod_1_name: booking.pod_1_name,
      eq_status: booking.eq_status,
      pod_optional: booking.pod_optional,
      shipper_id: booking.shipper_id,
      shipper_name: booking.shipper_name,
      origin: booking.origin ?? "0",
      destination: booking.destination ?? "0",
      client_ref_no: booking.client_ref_no ?? "0",
      stow_block: booking.stow_block ?? "0",
      stuffing_location: booking.stuffing_location ?? "0",
      ood: booking.ood ?? "N",
      override_cutoff: booking.override_cutoff ?? "N",
      hold_partials: booking.hold_partials ?? "N",
      prevent_type_subst: booking.prevent_type_subst ?? "N",
      empty_pickup_location: booking.empty_pickup_location ?? "0",
      full_return_location: booking.full_return_location ?? "0",
      category: booking.category ?? "EXPORT",
      notes: booking.notes ?? "0",
      created_by: booking.created_by,
      created_date: booking.created_date,
      modified_by: booking.modified_by,
      modified_date: booking.modified_date,
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
        eq_size: item.eq_size,
        eq_iso_group: item.eq_iso_group,
        eq_height: item.eq_height,
        eq_iso_group_description: item.eq_iso_group_description,
        equipment_type: item.equipment_type,
        equip_type_description: item.equip_type_description,
        seq_nbr: item.seq_nbr ?? "0",
        tally_limit: item.tally_limit ?? "1",
        eq_material: item.eq_material ?? "UNKNOWN",
        eq_grade: item.eq_grade,
        gross_weight: item.gross_weight,
        commodity_id: item.commodity_id,
        commodity_name: item.commodity_name,
        receive_limit: item.receive_limit ?? "1",
        remarks: item.remarks ?? "0",
        created_by: item.created_by,
        created_date: item.created_date,
      });

      xml.push(`      <item ${itemAttrs}>`);
      xml.push(`        <hazards />`);

      if (item.reefer) {
        const reeferAttrs = createAttributes(item.reefer);
        xml.push(`        <reefer ${reeferAttrs} />`);
      }

      if (item.oog) {
        const oogAttrs = createAttributes({
          is_oog: item.oog.is_oog ? "Y" : "N",
          oog_back_cm: item.oog.oog_back_cm ?? "0",
          oog_front_cm: item.oog.oog_front_cm ?? "0",
          oog_left_cm: item.oog.oog_left_cm ?? "0",
          oog_right_cm: item.oog.oog_right_cm ?? "0",
          oog_top_cm: item.oog.oog_top_cm ?? "0",
        });
        xml.push(`        <oog ${oogAttrs} />`);
      }

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
