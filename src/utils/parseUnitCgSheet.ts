import { UnitCargaGeneral } from "interfaces/unitCargaGeneral/unitCargaGeneral";
import { UnitCargaGeneralExcel } from "interfaces/unitCargaGeneral/unitCargaGeneralExcel";
import * as XLSX from "xlsx";
import { generateCarriers } from "./generateCarriers";
import { unitCgHeaders } from "constants";

export function parseUnitCgSheet(workbook: XLSX.WorkBook): UnitCargaGeneral[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitCargaGeneralExcel>(worksheet, {
    header: unitCgHeaders,
    raw: false,
    range: 2,
  });

  console.log(jsonData);

  return jsonData.map((row: UnitCargaGeneralExcel) => ({
    id: row.id,
    category: row.category,
    restow: "NONE",
    transit_state: row.transit_state,
    freight_kind: row.freight_kind,
    line: "GCP",
    unique_key: row.id,
    is_verifies_yard_pos: "N",
    is_stowplan_posted: "N",
    equipment: {
      eqid: row.id,
      type: row.iso_type,
      class: "CTR",
      tank_rails: "UNKNOWN",
      life_cycle_state: "ACT",
      role: "PRIMARY",
    },
    position: {
      loc_type: row.transit_state?.toUpperCase() === "YARD" ? "YARD" : "TRUCK",
      location:
        row.transit_state?.toUpperCase() === "YARD" ? "PDP" : "GEN_TRUCK",
      slot: row.transit_state?.toUpperCase() === "YARD" ? "CFS" : undefined,
    },
    routing: {
      pol: "PEPIO",
      pod_1: row.pod,
      carrier: row.category
        ? generateCarriers(
            row.category?.toUpperCase().trim() === "EXPORT",
            row.ob_visit || undefined
          )
        : undefined,
    },
    contents: {
      weight_kg: row.weight,
      weight_kg_advised: row.weight,
      commodity_id: row.commodity,
      bl_nbr: row.bill_of_lading,
    },
    unit_etc: {
      category: row.category,
      line: "GCP",
    },
    unit_flex: {
      unit_flex_1: row.cabotaje || undefined,
      unit_flex_2: row.codigo_aduana || undefined,
      unit_flex_10: row.tipo_vehiculo || undefined,
    },
    ufv_flex: {
      ufv_flex_1: row.dam || undefined,
      ufv_flex_2: row.rce || undefined,
      ufv_flex_3: row.codigo_deposito || undefined,
      ufv_flex_4: row.rm || undefined,
      ufv_flex_7: row.almacen_simple || undefined,
    },
    non_move_history:
      row.transit_state?.toUpperCase() === "YARD"
        ? undefined
        : {
            event: {
              id: "CG_GENERATE_BILLABLE_EVENTS",
              time_event_applied: "",
              user_id: "admin",
              is_billable: "",
            },
          },
  }));
}
