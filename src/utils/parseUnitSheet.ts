import * as XLSX from "xlsx";
import { Unit, UnitExcel } from "interfaces/unit";
import {
  unitCmaHeader,
  unitHeaders,
  unitMscHeader,
  unitOneHeader,
  unitSmlHeader,
} from "constants";
import { Carrier } from "interfaces/unit/carrier";
import { normalizeMonthYear, transformYearOnDate } from "./transformDateFormat";
import { UnitOne } from "interfaces/unit/byLine/unitOne";
import { UnitCma } from "interfaces/unit/byLine/unitCma";
import { UnitMsc } from "interfaces/unit/byLine/unitMsc";
import { getCategoryInfo } from "./getCategoryInfo";
import { extractManifest } from "./extractManifest";

export function parseUnitSheet(
  workbook: XLSX.WorkBook,
  fileName: string
): Unit[] {
  const name = fileName.toUpperCase();
  if (name.includes("MSC")) return parseUnitMsc(workbook);
  if (name.includes("ONE")) return parseUnitOne(workbook);
  if (name.includes("CMA")) return parseUnitCma(workbook);
  if (name.includes("SEABOARD")) return parseUnitSml(workbook);
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
  return jsonData.map((row) => {
    const { category, transit_state, freight_kind, isExport } = getCategoryInfo(
      row.status
    );

    return {
      id: row.container || undefined,
      category,
      restow: "NONE",
      transit_state,
      freight_kind,
      line: row.line || undefined,
      grade: getTecnology(row.reefer_tecnologia || "", row.leak_test || ""),
      agent1: row.customs_agency || undefined,
      agent2: row.logistics_operator || undefined,
      is_ib_to_ob_move_direct: "N",
      is_verified_yard_pos: "N",
      is_stowplan_posted: "Y",
      equipment: {
        eqid: row.container,
        type: row.iso || undefined,
        class: "CTR",
        tank_rails: "UNKNOWN",
        life_cycle_state: "ACT",
        role: "PRIMARY",
        physical: {
          build_date: transformYearOnDate(row.manufacture_year),
        },
        ownership: {
          owner: row.line || undefined,
          operator: row.line || undefined,
        },
      },
      position: {
        loc_type: "YARD",
        location: "PDP",
        orientation: "Y",
      },
      routing: {
        pol: row.pol || undefined,
        pod_1: row.pod || undefined,
        carrier: row.status
          ? generateCarriers(
              isExport,
              isExport ? row.loading_vessel : row.discharge_vessel
            )
          : undefined,
      },
      seals: {
        seal_1: row.seal1,
        seal_2: row.seal2,
        seal_3: row.seal3,
        seal_4: row.seal4,
      },
      reefer: {
        temp_reqd_c: row.temp_set || undefined,
        temp_min_c: row.temp_supply,
        temp_max_c: row.temp_return,
        temp_display_unit: "C",
        extended_time_monitors: "Y",
        is_alarm_on: "N",
      },

      unit_etc: {
        category: category || undefined,
        line: row.line || undefined,
        equip_condition: row.current_box_status,
      },
      unit_flex: {
        unit_flex_1: "N",
        unit_flex_2: "127",
        unit_flex_4: "0",
        unit_flex_10: "SI",
        unit_flex_11: "N",
        unit_flex_15: row.current_box_status || undefined,
      },
      ufv_flex: {
        ufv_flex_1: row.dam || undefined,
        ufv_flex_3: row.dt || undefined,
        ufv_flex_9: getTecnology(
          row.reefer_tecnologia || "",
          row.leak_test || ""
        ),
      },
      booking: row.booking
        ? {
            id: row.booking,
          }
        : undefined,
    };
  });
}

function parseUnitCma(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitCma>(worksheet, {
    header: unitCmaHeader,
    raw: false,
    range: 2,
  });
  return jsonData.map((row) => {
    const { category, transit_state, freight_kind, isExport } = getCategoryInfo(
      row.status
    );

    return {
      id: row.container || undefined,
      category,
      restow: "NONE",
      transit_state,
      freight_kind,
      line: row.line || undefined,
      grade: getTecnology(row.reefer_tecnologia || "", row.leak_test || ""),
      agent1: row.customs_agency || undefined,
      agent2: row.logistics_operator || undefined,
      is_ib_to_ob_move_direct: "N",
      is_verified_yard_pos: "N",
      is_stowplan_posted: "Y",
      equipment: {
        eqid: row.container,
        type: row.iso || undefined,
        class: "CTR",
        tank_rails: "UNKNOWN",
        life_cycle_state: "ACT",
        role: "PRIMARY",
        physical: {
          build_date: transformYearOnDate(row.manufacture_year),
        },
        ownership: {
          owner: row.line || undefined,
          operator: row.line || undefined,
        },
      },
      position: {
        loc_type: "YARD",
        location: "PDP",
        orientation: "Y",
      },
      routing: {
        pol: row.pol || undefined,
        pod_1: row.pod || undefined,
        carrier: row.status
          ? generateCarriers(
              isExport,
              isExport ? row.loading_vessel : row.discharge_vessel
            )
          : undefined,
      },
      seals: {
        seal_1: row.seal1,
        seal_2: row.seal2,
        seal_3: row.seal3,
        seal_4: row.seal4,
      },
      reefer: {
        temp_reqd_c: row.temp_set || undefined,
        temp_min_c: row.temp_supply,
        temp_max_c: row.temp_return,
        temp_display_unit: "C",
        extended_time_monitors: "Y",
        is_alarm_on: "N",
      },

      unit_etc: {
        category: category || undefined,
        line: row.line || undefined,
        equip_condition: row.current_box_status,
      },
      unit_flex: {
        unit_flex_1: "N",
        unit_flex_2: "127",
        unit_flex_4: "0",
        unit_flex_10: "SI",
        unit_flex_11: "N",
        unit_flex_15: row.current_box_status || undefined,
      },
      ufv_flex: {
        ufv_flex_1: row.dam || undefined,
        ufv_flex_3: row.dt || undefined,
        ufv_flex_9: getTecnology(
          row.reefer_tecnologia || "",
          row.leak_test || ""
        ),
      },
      booking: row.booking
        ? {
            id: row.booking,
          }
        : undefined,
    };
  });
}

function parseUnitMsc(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitMsc>(worksheet, {
    header: unitMscHeader,
    raw: false,
    range: 2,
  });
  return jsonData.map((row) => {
    const { category, transit_state, freight_kind, isExport } = getCategoryInfo(
      row.status
    );

    return {
      id: row.container || undefined,
      category,
      restow: "NONE",
      transit_state,
      freight_kind,
      line: row.line || undefined,
      grade: getTecnology(row.reefer_tecnologia || "", row.leak_test || ""),
      agent1: row.customs_agency || undefined,
      agent2: row.logistics_operator || undefined,
      is_ib_to_ob_move_direct: "N",
      is_verified_yard_pos: "N",
      is_stowplan_posted: "Y",
      equipment: {
        eqid: row.container,
        type: row.iso || undefined,
        class: "CTR",
        tank_rails: "UNKNOWN",
        life_cycle_state: "ACT",
        role: "PRIMARY",
        physical: {
          build_date: transformYearOnDate(row.manufacture_year),
        },
        ownership: {
          owner: row.line || undefined,
          operator: row.line || undefined,
        },
      },
      position: {
        loc_type: "YARD",
        location: "PDP",
        orientation: "Y",
      },
      routing: {
        pol: row.pol || undefined,
        pod_1: row.pod || undefined,
        carrier: row.status
          ? generateCarriers(
              isExport,
              isExport
                ? extractManifest(row.loading_vessel || "")
                : extractManifest(row.discharge_vessel || "")
            )
          : undefined,
      },
      seals: {
        seal_1: row.seal1,
        seal_2: row.seal2,
        seal_3: row.seal3,
        seal_4: row.seal4,
      },
      reefer: {
        temp_reqd_c: row.temp_set || undefined,
        temp_min_c: row.temp_supply,
        temp_max_c: row.temp_return,
        temp_display_unit: "C",
        extended_time_monitors: "Y",
        is_alarm_on: "N",
      },

      unit_etc: {
        category: category || undefined,
        line: row.line || undefined,
        equip_condition: row.current_box_status,
      },
      unit_flex: {
        unit_flex_1: "N",
        unit_flex_2: "127",
        unit_flex_4: "0",
        unit_flex_10: "SI",
        unit_flex_11: "N",
        unit_flex_15: row.current_box_status || undefined,
      },
      ufv_flex: {
        ufv_flex_1: row.dam || undefined,
        ufv_flex_3: row.deposito_temporal || undefined,
        ufv_flex_9: getTecnology(
          row.reefer_tecnologia || "",
          row.leak_test || ""
        ),
      },
      booking: row.booking
        ? {
            id: row.booking,
          }
        : undefined,
    };
  });
}

function parseUnitSml(workbook: XLSX.WorkBook): Unit[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UnitCma>(worksheet, {
    header: unitSmlHeader,
    raw: false,
    range: 2,
  });
  return jsonData.map((row) => {
    const { category, transit_state, freight_kind, isExport } = getCategoryInfo(
      row.status
    );

    return {
      id: row.container || undefined,
      category,
      restow: "NONE",
      transit_state,
      freight_kind,
      line: row.line || undefined,
      grade: getTecnology(row.reefer_tecnologia || "", row.leak_test || ""),
      agent1: row.customs_agency || undefined,
      agent2: row.logistics_operator || undefined,
      is_ib_to_ob_move_direct: "N",
      is_verified_yard_pos: "N",
      is_stowplan_posted: "Y",
      equipment: {
        eqid: row.container,
        type: row.iso || undefined,
        class: "CTR",
        tank_rails: "UNKNOWN",
        life_cycle_state: "ACT",
        role: "PRIMARY",
        physical: {
          build_date: transformYearOnDate(row.manufacture_year),
        },
        ownership: {
          owner: row.line || undefined,
          operator: row.line || undefined,
        },
      },
      position: {
        loc_type: "YARD",
        location: "PDP",
        orientation: "Y",
      },
      routing: {
        pol: row.pol || undefined,
        pod_1: row.pod || undefined,
        carrier: row.status
          ? generateCarriers(
              isExport,
              isExport ? row.loading_vessel : row.discharge_vessel
            )
          : undefined,
      },
      seals: {
        seal_1: row.seal1,
        seal_2: row.seal2,
        seal_3: row.seal3,
        seal_4: row.seal4,
      },
      reefer: {
        temp_reqd_c: row.temp_set || undefined,
        temp_min_c: row.temp_supply,
        temp_max_c: row.temp_return,
        temp_display_unit: "C",
        extended_time_monitors: "Y",
        is_alarm_on: "N",
      },

      unit_etc: {
        category: category || undefined,
        line: row.line || undefined,
        equip_condition: row.current_box_status,
      },
      unit_flex: {
        unit_flex_1: "N",
        unit_flex_2: "127",
        unit_flex_4: "0",
        unit_flex_10: "SI",
        unit_flex_11: "N",
        unit_flex_15: row.current_box_status || undefined,
      },
      ufv_flex: {
        ufv_flex_1: row.dam || undefined,
        ufv_flex_3: row.dt || undefined,
        ufv_flex_9: getTecnology(
          row.reefer_tecnologia || "",
          row.leak_test || ""
        ),
      },
      booking: row.booking
        ? {
            id: row.booking,
          }
        : undefined,
    };
  });
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

/**
 * Generates a list of carriers based on the provided parameters.
 * @param {boolean} isExport - Indicates if the carriers are for export.
 * @param {string} [carrierId] - The carrier ID to be used for import carriers.
 * @returns {Carrier[]} - An array of Carrier objects.
 */

function generateCarriers(isExport: boolean, carrierId?: string): Carrier[] {
  return [
    {
      direction: "IB",
      qualifier: "DECLARED",
      facility: "PDP",
      mode: isExport ? "TRUCK" : "VESSEL",
      id: isExport ? undefined : carrierId,
    },
    {
      direction: "IB",
      qualifier: "ACTUAL",
      facility: "PDP",
      mode: isExport ? "TRUCK" : "VESSEL",
      id: isExport ? undefined : carrierId,
    },
    {
      direction: "OB",
      qualifier: "DECLARED",
      facility: "PDP",
      mode: isExport ? "VESSEL" : "UNKNOWN",
      id: isExport ? carrierId : undefined,
    },
    {
      direction: "OB",
      qualifier: "ACTUAL",
      facility: "PDP",
      mode: isExport ? "VESSEL" : "UNKNOWN",
      id: isExport ? carrierId : undefined,
    },
  ];
}

function getTecnology(
  tecnologyStr: string,
  leakTest: string
): string | undefined {
  if (tecnologyStr.includes("DRY 20")) return "DRY 20'";
  if (tecnologyStr.includes("DRY 40")) return "DRY 40'";
  if (leakTest.includes("OK")) return "COT+COA";
  if (tecnologyStr.includes("Liventus")) return "COA";
  if (tecnologyStr.includes("Standard")) return "STD";
  if (tecnologyStr.includes("Cold")) return "COT";
  if (tecnologyStr.includes("Controlada")) return "COA";

  return undefined;
}
