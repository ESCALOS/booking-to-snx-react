export interface UnitBase {
  // Campos básicos comunes
  container?: string;
  status?: string;
  line?: string;
  pol?: string;
  pod?: string;
  iso?: string;
  yard_position?: string;
  booking?: string;

  // Campos para reefer
  temp_set?: string;
  temp_supply?: string;
  temp_return?: string;
  reefer_tecnologia?: string;
  leak_test?: string;

  // Campos para agentes
  customs_agency?: string;
  logistics_operator?: string;

  // Campos para sellos
  seal1?: string;
  seal2?: string;
  seal3?: string;
  seal4?: string;

  // Campos para equipamiento
  manufacture_year?: string;
  current_pti_status?: string;
  current_box_status?: string;

  // Campos para routing/vessels
  loading_manifest?: string;
  loading_vessel?: string;
  discharge_manifest?: string;
  discharge_vessel?: string;
  discharge_bl?: string;

  dam?: string;
  dt?: string;

  cnt_lavado?: string;
}
