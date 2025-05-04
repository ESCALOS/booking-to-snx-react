import * as XLSX from "xlsx";
import { Unit, UnitExcel } from "interfaces/unit";
import { unitHeaders } from "constants";

export function parseUnitSheet(worksheet: XLSX.Sheet): Unit[] {
  const jsonData = XLSX.utils.sheet_to_json<UnitExcel>(worksheet, {
    header: unitHeaders,
    raw: false,
    range: 1,
  });
  const units: Unit[] = jsonData.map((row) => ({
    id: row.id || undefined,
    category: row.category || undefined,
    restow: row.restow || undefined,
    transit_state: row.transit_state || undefined,
    freight_kind: row.freight_kind || undefined,
    line: row.line || undefined,
    unique_key: row.unique_key || undefined,
    grade: row.grade || undefined,
    agent1: row.agent1 || undefined,
    agent2: row.agent2 || undefined,
    is_ib_to_ob_move_direct: row.is_ib_to_ob_move_direct || undefined,
    is_verified_yard_pos: row.is_verified_yard_pos || undefined,
    is_stowplan_posted: row.is_stowplan_posted || undefined,
    equipment: {
      eqid: row.equipment_eqid || undefined,
      type: row.equipment_type || undefined,
      class: row.equipment_class || undefined,
      tank_rails: row.equipment_tank_rails || undefined,
      life_cycle_state: row.equipment_life_cycle_state || undefined,
      role: row.equipment_role || undefined,
      physical: {
        has_wheels: row.equipment_physical_has_wheels || undefined,
        height_mm: row.equipment_physical_height_mm || undefined,
        is_insulated: row.equipment_physical_is_insulated || undefined,
        is_permanently_out_of_service:
          row.equipment_physical_is_permanently_out_of_service || undefined,
        iso_group: row.equipment_physical_iso_group || undefined,
        length_mm: row.equipment_physical_length_mm || undefined,
        material: row.equipment_physical_material || undefined,
        strength_code: row.equipment_physical_strength_code || undefined,
        tare_weight_kg: row.equipment_physical_tare_weight_kg || undefined,
        width_mm: row.equipment_physical_width_mm || undefined,
        grade: row.equipment_physical_grade || undefined,
      },
      ownership: {
        owner: row.equipment_ownership_owner || undefined,
        operator: row.equipment_ownership_operator || undefined,
      },
      reefer: {
        is_controlled_atmosphere:
          row.equipment_reefer_is_controlled_atmosphere || undefined,
        is_starvent: row.equipment_reefer_is_starvent || undefined,
        is_super_freeze: row.equipment_reefer_is_super_freeze || undefined,
        is_temperature_controlled:
          row.equipment_reefer_is_temperature_controlled || undefined,
        rfr_type: row.equipment_reefer_rfr_type || undefined,
      },
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
      temp_display_unit: row.reefer_temp_display_unit || undefined,
      co2_pct: row.reefer_co2_pct || undefined,
      o2_pct: row.reefer_o2_pct || undefined,
      humidity_pct: row.reefer_humidity_pct || undefined,
      vent_required_value: row.reefer_vent_required_value || undefined,
      vent_required_unit: row.reefer_vent_required_unit || undefined,
      extended_time_monitors: row.reefer_extended_time_monitors || undefined,
      is_power: row.reefer_is_power || undefined,
      wanted_is_power: row.reefer_wanted_is_power || undefined,
      is_alarm_on: row.reefer_is_alarm_on || undefined,
    },
    unit_etc: {
      category: row.unit_etc_category || undefined,
      line: row.unit_etc_line || undefined,
      equip_condition: row.unit_etc_equip_condition || undefined,
    },
    unit_flex: {
      unit_flex_1: row.unit_flex_1 || undefined,
      unit_flex_2: row.unit_flex_2 || undefined,
      unit_flex_3: row.unit_flex_3 || undefined,
      unit_flex_4: row.unit_flex_4 || undefined,
      unit_flex_5: row.unit_flex_5 || undefined,
      unit_flex_8: row.unit_flex_8 || undefined,
      unit_flex_9: row.unit_flex_9 || undefined,
      unit_flex_10: row.unit_flex_10 || undefined,
      unit_flex_11: row.unit_flex_11 || undefined,
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
  }));

  return units;
}
