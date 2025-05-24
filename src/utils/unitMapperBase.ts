import { UnitBase } from "../interfaces/unit/byLine/unitBase";
import { Unit } from "../interfaces/unit/unit";
import { extractManifest } from "./extractManifest";
import { getCategoryInfo } from "./getCategoryInfo";
import { transformYearOnDate } from "./transformDateFormat";
import { generateCarriers } from "./generateCarriers";

export function mapUnitBase<T extends UnitBase>(row: T): Unit | null {
  // Ignorar filas con status "Client"
  if (row.status?.toLowerCase().includes("client")) {
    return null;
  }

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
