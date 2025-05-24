export interface UnitExcel {
  visit_vessel_id?: string;
  routing_pod_1?: string;
  routing_pol?: string;

  booking_id?: string;

  id?: string; // Número de contenedor
  category?: string; // Categoría
  transit_state?: string; // Estado de tránsito
  freight_kind?: string; // FCL / LCL / MTY
  line?: string; // Línea naviera
  grade?: string; // Grado
  agent1?: string; // Agente 1
  agent2?: string; // Agente 2

  // Equipment
  equipment_type?: string; // ISO
  physical_build_date?: string;

  // Position
  position_slot?: string; // Ranura

  // Seals
  seals_seal_1?: string;
  seals_seal_2?: string;
  seals_seal_3?: string;
  seals_seal_4?: string;

  // Reefer
  reefer_temp_reqd_c?: string;
  reefer_temp_min_c?: string;
  reefer_temp_max_c?: string;
  reefer_o2_pct?: string;
  reefer_co2_pct?: string;
  reefer_humidity_pct?: string;
  reefer_vent_required_value?: string;
  reefer_is_power?: string;
  reefer_wanted_is_power?: string;

  // Unit Flex
  unit_flex_3?: string; // Estado RCE
  unit_flex_5?: string; // Estado de transmisión
  unit_flex_8?: string; // Canal Aduanero
  unit_flex_9?: string; // Bultos
  unit_flex_14?: string; // IRM Numerada
  unit_flex_15?: string; // Condicion de estructura

  // Ufv Flex
  ufv_flex_1?: string; // DAM
  ufv_flex_2?: string; // Número de RCE
  ufv_flex_3?: string; // Código de depósito
  ufv_flex_4?: string; // Número de RM
  ufv_flex_5?: string; // Guía de Remisión
  ufv_flex_6?: string; // Guía de transporte
  ufv_flex_7?: string; // Almacén simple
  ufv_flex_8?: string; // Levante aduanero
  ufv_flex_9?: string; // Tecnología Refeer
}
