import * as XLSX from "xlsx";
import { Unit, UnitExcel } from "interfaces/unit";
import {
  unitCmaHeader,
  unitHeaders,
  unitMaeHeader,
  unitMscHeader,
  unitOneHeader,
  unitSmlHeader,
} from "constants";
import { normalizeMonthYear } from "./transformDateFormat";
import { UnitOne } from "interfaces/unit/byLine/unitOne";
import { UnitCma } from "interfaces/unit/byLine/unitCma";
import { UnitMsc } from "interfaces/unit/byLine/unitMsc";
import { UnitSml } from "interfaces/unit/byLine/unitSml";
import { generateCarriers } from "./generateCarriers";
import { mapUnitBase } from "./unitMapperBase";

export function parseUnitSheet(
  workbook: XLSX.WorkBook,
  fileName: string
): Unit[] {
  const name = fileName.toUpperCase();
  if (name.includes("MSC")) return parseUnitMsc(workbook);
  if (name.includes("ONE")) return parseUnitOne(workbook);
  if (name.includes("CMA")) return parseUnitCma(workbook);
  if (name.includes("SEABOARD")) return parseUnitSml(workbook);
  if (name.includes("MAERSK")) return parseUnitMae(workbook);
  // Fallback
  return parseDefaultUnit(workbook);
}

function parseUnitOne(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitOne>(worksheet, {
    header: unitOneHeader,
    raw: false,
    range: 2,
  });
  return jsonData
    .map(mapUnitBase)
    .filter((unit): unit is Unit => unit !== null);
}

function parseUnitCma(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitCma>(worksheet, {
    header: unitCmaHeader,
    raw: false,
    range: 2,
  });
  return jsonData
    .map(mapUnitBase)
    .filter((unit): unit is Unit => unit !== null);
}

function parseUnitMsc(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitMsc>(worksheet, {
    header: unitMscHeader,
    raw: false,
    range: 2,
  });
  return jsonData
    .map(mapUnitBase)
    .filter((unit): unit is Unit => unit !== null);
}

function parseUnitSml(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitSml>(worksheet, {
    header: unitSmlHeader,
    raw: false,
    range: 2,
  });
  return jsonData
    .map(mapUnitBase)
    .filter((unit): unit is Unit => unit !== null);
}

function parseUnitMae(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets["Stock Pisco"];
  const jsonData = XLSX.utils.sheet_to_json<UnitExcel>(worksheet, {
    header: unitMaeHeader,
    raw: false,
    range: 1,
  });
  return jsonData
    .map(mapUnitBase)
    .filter((unit): unit is Unit => unit !== null);
}

function parseDefaultUnit(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitExcel>(worksheet, {
    header: unitHeaders,
    raw: false,
    range: 1,
  });
  return jsonData.map((row) => ({
    id: row.id || undefined,
    category: row.category || undefined,
    restow: "NONE",
    transit_state: row.transit_state || undefined,
    freight_kind: row.freight_kind || undefined,
    line: row.line || undefined,
    grade: row.grade || undefined,
    agent1: row.agent1 || undefined,
    agent2: row.agent2 || undefined,
    is_ib_to_ob_move_direct: "N",
    is_verified_yard_pos: "N",
    is_stowplan_posted: "Y",
    equipment: {
      eqid: row.id,
      type: row.equipment_type || undefined,
      class: "CTR",
      tank_rails: "UNKNOWN",
      life_cycle_state: "ACT",
      role: "PRIMARY",
      physical: {
        build_date: normalizeMonthYear(row.physical_build_date),
      },
      ownership: {
        owner: row.line,
        operator: row.line,
      },
    },
    position: {
      loc_type: "YARD",
      location: "PDP",
      slot: row.position_slot || undefined,
      orientation: "Y",
    },
    routing: {
      pol: row.routing_pol || undefined,
      pod_1: row.routing_pod_1 || undefined,
      carrier: row.category
        ? generateCarriers(
            row.category.toUpperCase().trim() === "EXPORT",
            row.visit_vessel_id || undefined
          )
        : undefined,
    },
    seals: {
      seal_1: row.seals_seal_1 || undefined,
      seal_2: row.seals_seal_2 || undefined,
      seal_3: row.seals_seal_3 || undefined,
      seal_4: row.seals_seal_4 || undefined,
    },
    reefer: {
      temp_reqd_c: row.reefer_temp_reqd_c || undefined,
      temp_min_c: row.reefer_temp_min_c || undefined,
      temp_max_c: row.reefer_temp_max_c || undefined,
      temp_display_unit: "C",
      o2_pct: row.reefer_o2_pct || undefined,
      co2_pct: row.reefer_co2_pct || undefined,
      humidity_pct: row.reefer_humidity_pct || undefined,
      vent_required_value: row.reefer_vent_required_value || undefined,
      vent_required_unit: "CUBIC_M_HOUR",
      extended_time_monitors: "Y",
      is_power: row.reefer_is_power || undefined,
      wanted_is_power: row.reefer_wanted_is_power || undefined,
      is_alarm_on: "N",
    },
    unit_etc: {
      category: row.category || undefined,
      line: row.line || undefined,
      equip_condition: "OK",
    },
    unit_flex: {
      unit_flex_1: "N",
      unit_flex_2: "127",
      unit_flex_3: row.unit_flex_3 || undefined,
      unit_flex_4: "0",
      unit_flex_5: row.unit_flex_5 || undefined,
      unit_flex_8: row.unit_flex_8 || undefined,
      unit_flex_9: row.unit_flex_9 || undefined,
      unit_flex_10: "SI",
      unit_flex_11: "N",
      unit_flex_14: row.unit_flex_14 || undefined,
      unit_flex_15: row.unit_flex_15 || undefined,
    },
    ufv_flex: {
      ufv_flex_1: row.ufv_flex_1 || undefined,
      ufv_flex_2: row.ufv_flex_2 || undefined,
      ufv_flex_3: row.ufv_flex_3 || undefined,
      ufv_flex_4: row.ufv_flex_4 || undefined,
      ufv_flex_5: row.ufv_flex_5 || undefined,
      ufv_flex_6: row.ufv_flex_6 || undefined,
      ufv_flex_7: row.ufv_flex_7 || undefined,
      ufv_flex_8: row.ufv_flex_8 || undefined,
      ufv_flex_9: row.ufv_flex_9 || undefined,
    },
    booking: row.booking_id
      ? {
          id: row.booking_id,
        }
      : undefined,
  }));
}
