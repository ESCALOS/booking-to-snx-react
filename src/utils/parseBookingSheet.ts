import { Booking } from "interfaces/booking";
import { bookingTemplateHeaders } from "constants";
import * as XLSX from "xlsx";
import { BookingTemplateExcel } from "interfaces/booking/bookingTemplateExcel";

export function parseBookingSheet(workbook: XLSX.WorkBook): Booking[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<BookingTemplateExcel>(worksheet, {
    header: bookingTemplateHeaders,
    raw: false,
    range: 1,
  });

  const bookingMap = new Map<string, Booking>();

  jsonData.forEach((row) => {
    const tecnology = getTecnology(row.tecnologia, row.kind);
    const item = {
      qty: row.qty || undefined,
      equipment_type: row.iso_code || undefined,
      tally_limit: row.qty || undefined,
      eq_grade: tecnology,
      gross_weight: row.gross_weight
        ? row.gross_weight.toString().replace(/,/g, "")
        : undefined,
      commodity_id: row.commodity
        ? row.commodity.split(" ")[0].replace(/,/g, "")
        : undefined,
      receive_limit: row.qty || undefined,
      reefer: tecnology?.includes("DRY")
        ? undefined
        : {
            temp_reqd_c: row.temperature || undefined,
          },
    };

    const existingBooking = bookingMap.get(row.booking || "");

    if (existingBooking) {
      existingBooking.items?.push(item);
    } else {
      const newBooking: Booking = {
        nbr: row.booking || undefined,
        line: row.line || undefined,
        pol: row.pol || undefined,
        pod_1: row.pod || undefined,
        eq_status: "FCL",
        shipper_id: row.cliente || undefined,
        carrier: {
          id: row.manifiesto || undefined,
        },
        items: [item],
      };
      bookingMap.set(row.booking || "", newBooking);
    }
  });
  console.log(`Parsed ${bookingMap.size} bookings from the sheet.`);
  console.log(Array.from(bookingMap.values()));

  return Array.from(bookingMap.values());
}

function getTecnology(
  tecnology: string | undefined,
  kind: string | undefined
): string | undefined {
  if (tecnology === undefined) return undefined;

  if (tecnology.toUpperCase().includes("DRY")) {
    if (kind === "HC") {
      return "DRY 40'";
    }
    return "DRY 20'";
  }
  return tecnology;
}
