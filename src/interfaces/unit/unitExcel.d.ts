export interface UnitExcel {
  id?: string; // Número de manifiesto
  category?: string; // Categoría
  restow?: string; // Restow
  transit_state?: string; // Estado de tránsito
  freight_kind?: string; // Tipo de transporte
  line?: string; // Línea naviera
  unique_key?: string; // Clave única
  grade?: string; // Grado
  agent1?: string; // Agente 1
  agent2?: string; // Agente 2
  is_ib_to_ob_move_direct?: string;
  is_verified_yard_pos?: string;
  is_stowplan_posted?: string;

  // Equipment
  equipment_eqid?: string; // Equipo
  equipment_type?: string; // Tipo de equipo
  equipment_class?: string; // Clase
  equipment_tank_rails?: string; // Cantidad de tanque
  equipment_life_cycle_state?: string;
  equipment_role?: string;

  // Equipment > Physical
  equipment_physical_has_wheels?: string;
  equipment_physical_height_mm?: string;
  equipment_physical_is_insulated?: string;
  equipment_physical_is_permanently_out_of_service?: string;
  equipment_physical_iso_group?: string;
  equipment_physical_length_mm?: string;
  equipment_physical_material?: string;
  equipment_physical_strength_code?: string;
  equipment_physical_tare_weight_kg?: string;
  equipment_physical_width_mm?: string;
  equipment_physical_grade?: string;

  // Equipment > Ownership
  equipment_ownership_owner?: string;
  equipment_ownership_operator?: string;

  // Equipment > Reefer
  equipment_reefer_is_controlled_atmosphere?: string;
  equipment_reefer_is_starvent?: string;
  equipment_reefer_is_super_freeze?: string;
  equipment_reefer_is_temperature_controlled?: string;
  equipment_reefer_rfr_type?: string;

  // Seals
  seals_seal_1?: string;
  seals_seal_2?: string;
  seals_seal_3?: string;
  seals_seal_4?: string;

  // Reefer
  reefer_temp_reqd_c?: string;
  reefer_temp_min_c?: string;
  reefer_temp_max_c?: string;
  reefer_temp_display_unit?: string;
  reefer_o2_pct?: string;
  reefer_co2_pct?: string;
  reefer_humidity_pct?: string;
  reefer_vent_required_value?: string;
  reefer_vent_required_unit?: string;
  reefer_extended_time_monitors?: string;
  reefer_is_power?: string;
  reefer_wanted_is_power?: string;
  reefer_is_alarm_on?: string;

  // Unit Etc
  unit_etc_category?: string;
  unit_etc_line?: string;
  unit_etc_equip_condition?: string;

  // Unit Flex
  unit_flex_1?: string;
  unit_flex_2?: string;
  unit_flex_3?: string;
  unit_flex_4?: string;
  unit_flex_5?: string;
  unit_flex_8?: string;
  unit_flex_9?: string;
  unit_flex_10?: string;
  unit_flex_11?: string;
  unit_flex_14?: string;
  unit_flex_15?: string;

  // Ufv Flex
  ufv_flex_1?: string;
  ufv_flex_2?: string;
  ufv_flex_3?: string;
  ufv_flex_4?: string;
  ufv_flex_5?: string;
  ufv_flex_6?: string;
  ufv_flex_7?: string;
  ufv_flex_8?: string;
  ufv_flex_9?: string;
}
