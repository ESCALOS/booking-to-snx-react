import { Booking } from "./types";

export function generateXML(booking: Booking): string {
  const booking_attributes = [
    `nbr="${booking.nbr ?? 0}"`,
    `line="${booking.line ?? 0}"`,
    `pol="${booking.pol ?? 0}"`,
    `pol_name="${booking.pol_name ?? 0}"`,
    `pod_1="${booking.pod_1 ?? 0}"`,
    `pod_1_name="${booking.pod_1_name ?? 0}"`,
    `eq_status="${booking.eq_status ?? 0}"`,
    `pod_optional="${booking.pod_optional ?? 0}"`,
    `shipper_id="${booking.shipper_id ?? 0}"`,
    `shipper_name="${booking.shipper_name ?? 0}"`,
    `origin="${booking.origin ?? 0}"`,
    `destination="${booking.destination ?? 0}"`,
    `client_ref_no="${booking.client_ref_no ?? 0}"`,
    `stow_block="${booking.stow_block ?? 0}"`,
    `stuffing_location="${booking.stuffing_location ?? 0}"`,
    `ood="${booking.ood ?? 0}"`,
    `override_cutoff="${booking.override_cutoff ?? 0}"`,
    `hold_partials="${booking.hold_partials ?? 0}"`,
    `prevent_type_subst="${booking.prevent_type_subst ?? 0}"`,
    `empty_pickup_location="${booking.empty_pickup_location ?? 0}"`,
    `full_return_location="${booking.full_return_location ?? 0}"`,
    `categorty="${booking.categorty ?? 0}"`,
    `notes="${booking.notes ?? 0}"`,
    `created_by="${booking.created_by ?? 0}"`,
    `created_date="${booking.created_date ?? 0}"`,
    `modified_by="${booking.modified_by ?? 0}"`,
    `modified_date="${booking.modified_date ?? 0}"`,
    `quantity="${booking.quantity ?? 0}"`,
  ].join(" ");

  const carrier_attributes = [
    `id="${booking.carrier?.id ?? 0}"`,
    `facility="${booking.carrier?.facility ?? 0}"`,
    `mode="${booking.carrier?.mode ?? 0}"`,
  ].join(" ");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <argo:snx xmlns:argo="http://www.navis.com/argo" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.navis.com/argo snx.xsd">
  <booking ${booking_attributes}>
    <carrier ${carrier_attributes} />
  </booking>
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
