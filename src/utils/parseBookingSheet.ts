import { Booking } from "interfaces/booking";
import { bookingTemplateHeaders } from "constants";
import * as XLSX from "xlsx";
import { BookingTemplateExcel } from "interfaces/booking/bookingTemplateExcel";
import { getRucByCompanyName } from "services/companyService";

export async function parseBookingSheet(
  workbook: XLSX.WorkBook
): Promise<Booking[]> {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<BookingTemplateExcel>(worksheet, {
    header: bookingTemplateHeaders,
    raw: false,
    range: 1,
  });

  const bookings: Booking[] = [];

  for (const row of jsonData) {
    const tecnology = getTecnology(row.tecnologia, row.kind);

    // Obtener RUC para cliente y operador logístico
    const shipperId = row.cliente
      ? await getRucByCompanyName(row.cliente)
      : undefined;
    const agentId = row.operador_logistico
      ? await getRucByCompanyName(row.operador_logistico)
      : undefined;

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
            humidity_pct: row.humidity || undefined,
          },
    };

    const booking: Booking = {
      nbr: row.booking || undefined,
      line: row.line || undefined,
      pol: row.pol || undefined,
      pod_1: row.pod || undefined,
      eq_status: "FCL",
      shipper_id: shipperId || undefined,
      agent_id: agentId || undefined,
      carrier: {
        id: row.manifiesto || undefined,
      },
      items: [item],
    };

    bookings.push(booking);
  }

  return bookings;
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
