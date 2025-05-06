import { Booking, BookingExcel } from "interfaces/booking";
import { bookingHeaders } from "constants";
import * as XLSX from "xlsx";

export function parseBookingSheet(workbook: XLSX.WorkBook): Booking[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<BookingExcel>(worksheet, {
    header: bookingHeaders,
    raw: false,
    range: 1,
  });

  const bookingMap = new Map<string, Booking>();

  jsonData.forEach((row) => {
    const item = {
      qty: row.item_qty || undefined,
      equipment_type: row.item_equipment_type || undefined,
      tally_limit: row.item_qty || undefined,
      eq_grade: row.item_eq_grade || undefined,
      gross_weight: row.item_gross_weight || undefined,
      commodity_id: row.item_commodity_id || undefined,
      receive_limit: row.item_qty || undefined,
      reefer: {
        temp_reqd_c: row.reefer_temp_reqd_c || undefined,
        humidity_pct: row.reefer_humidity_pct || undefined,
        vent_required_value: row.reefer_vent_required_value || undefined,
        vent_required_unit: row.reefer_vent_required_unit || undefined,
        co2_pct: row.reefer_co2_pct || undefined,
        o2_pct: row.reefer_o2_pct || undefined,
      },
    };

    const existingBooking = bookingMap.get(row.nbr || "");

    if (existingBooking) {
      existingBooking.items?.push(item);
    } else {
      const newBooking: Booking = {
        nbr: row.nbr || undefined,
        line: row.line || undefined,
        pol: row.pol || undefined,
        pod_1: row.pod_1 || undefined,
        eq_status: row.eq_status || undefined,
        pod_optional: row.pod_optional || undefined,
        shipper_id: row.shipper_id || undefined,
        carrier: {
          id: row.carrier_id || undefined,
        },
        items: [item],
      };
      bookingMap.set(row.nbr || "", newBooking);
    }
  });

  return Array.from(bookingMap.values());
}
