import { BlExcel } from "interfaces/billOfLafing";
import { BookingExcel } from "interfaces/booking";
import { UnitExcel } from "interfaces/unit";
import { UnitOne } from "interfaces/unit/byLine/unitOne";
import { TemplateOption } from "types";
import { UnitCma } from "interfaces/unit/byLine/unitCma";
import { UnitMsc } from "interfaces/unit/byLine/unitMsc";
import { UnitSml } from "interfaces/unit/byLine/unitSml";

const bookingExcelExample: BookingExcel = {
  nbr: undefined,
  line: undefined,
  pol: undefined,
  pod_1: undefined,
  eq_status: undefined,
  pod_optional: undefined,
  shipper_id: undefined,
  carrier_id: undefined,
  item_qty: undefined,
  item_equipment_type: undefined,
  item_eq_grade: undefined,
  item_gross_weight: undefined,
  item_commodity_id: undefined,
  reefer_temp_reqd_c: undefined,
  reefer_humidity_pct: undefined,
  reefer_vent_required_value: undefined,
  reefer_vent_required_unit: undefined,
  reefer_co2_pct: undefined,
  reefer_o2_pct: undefined,
};

export const bookingHeaders = Object.keys(bookingExcelExample);

const blExcelExample: BlExcel = {
  carrier_visit: undefined,
  nbr: undefined,
  type: undefined,
  original_bl_nbr: undefined,
  category: undefined,
  line: undefined,
  shipper_id: undefined,
  consignee_id: undefined,

  item_nbr: undefined,
  item_is_bulk: undefined,
  item_quantity: undefined,
  item_commodity_id: undefined,
  item_weight_total_kg: undefined,
};

export const blHeaders = Object.keys(blExcelExample);

export const goodsBlHeaders = ["bl_nbr", "unit_id"];

const unitExcelExample: UnitExcel = {
  visit_vessel_id: undefined,
  routing_pod_1: undefined,
  routing_pol: undefined,
  booking_id: undefined,
  id: undefined,
  category: undefined,
  transit_state: undefined,
  freight_kind: undefined,
  line: undefined,
  grade: undefined,
  agent1: undefined,
  agent2: undefined,
  equipment_type: undefined,
  physical_build_date: undefined,
  position_slot: undefined,
  seals_seal_1: undefined,
  seals_seal_2: undefined,
  seals_seal_3: undefined,
  seals_seal_4: undefined,
  reefer_temp_reqd_c: undefined,
  reefer_temp_min_c: undefined,
  reefer_temp_max_c: undefined,
  reefer_o2_pct: undefined,
  reefer_co2_pct: undefined,
  reefer_humidity_pct: undefined,
  reefer_vent_required_value: undefined,
  reefer_is_power: undefined,
  reefer_wanted_is_power: undefined,
  unit_flex_3: undefined,
  unit_flex_5: undefined,
  unit_flex_8: undefined,
  unit_flex_9: undefined,
  unit_flex_14: undefined,
  unit_flex_15: undefined,
  ufv_flex_1: undefined,
  ufv_flex_2: undefined,
  ufv_flex_3: undefined,
  ufv_flex_4: undefined,
  ufv_flex_5: undefined,
  ufv_flex_6: undefined,
  ufv_flex_7: undefined,
  ufv_flex_8: undefined,
  ufv_flex_9: undefined,
};

export const unitHeaders = Object.keys(unitExcelExample);

const unitOneExample: UnitOne = {
  item: undefined, // A
  line: undefined, // B
  stowage_position: undefined, // C
  bay: undefined, // D
  row: undefined, // E
  tier: undefined, // F
  poo: undefined, // G
  pol: undefined, // H
  pod: undefined, // I
  fds: undefined, // J
  booking: undefined, // K
  bl: undefined, // L
  iso: undefined, // M
  size: undefined, // N
  type: undefined, // O
  container: undefined, // P
  status: undefined, // Q
  commodity: undefined, // R
  tare_weight: undefined, // S
  net_weight: undefined, // T
  gross_weight: undefined, // U
  vgm: undefined, // V
  peso_verificado: undefined, // W
  logistics_operator: undefined, // X
  shipper: undefined, // Y
  shipper_ruc: undefined, // Z
  customs_agency: undefined, // AA
  imo1: undefined, // AB
  un1: undefined, // AC
  imo2: undefined, // AD
  un2: undefined, // AE
  imo3: undefined, // AF
  un3: undefined, // AG
  imo4: undefined, // AH
  un4: undefined, // AI
  temp_set: undefined, // AJ
  temp_supply: undefined, // AK
  temp_return: undefined, // AL
  humidity: undefined, // AM
  air_flow: undefined, // AN
  oxigen: undefined, // AO
  carbon_dioxide: undefined, // AP
  olb: undefined, // AQ
  olf: undefined, // AR
  owl: undefined, // AS
  owr: undefined, // AT
  oh: undefined, // AU
  seal1: undefined, // AV
  seal2: undefined, // AW
  seal3: undefined, // AX
  seal4: undefined, // AY
  dt: undefined, // AZ
  condition: undefined, // BA
  tecnologia: undefined, // BB
  terminal: undefined, // BC
  loading_vessel: undefined, // BD
  ssp_gate_out: undefined, // BE
  gate_out_mty_date: undefined, // BF
  gate_in_full_date: undefined, // BG
  gate_out_vessel: undefined, // BH
  dam: undefined, // BI
  refrendo_date: undefined, // BJ
  usuario: undefined, // BK
  aforo_date: undefined, // BL
  ingreso_callao: undefined, // BM
  dwell_time: undefined, // BN
  primer_pti: undefined, // BO
  segundo_pti: undefined, // BP
  fecha_pti: undefined, // BQ
  vigencia_pti: undefined, // BR
  pti_vencido_60_d: undefined, // BS
  pti_vencido_30_d: undefined, // BT
  estadia_en_terminal: undefined, // BU
  type_controlador: undefined, // BV
  type_rcd: undefined, // BW
  discharge_vessel: undefined, // BX
  discharge_date: undefined, // BY
  initial_motor_condition: undefined, // BZ
  initial_motor_condition_date: undefined, // CA
  initial_condition_box: undefined, // CB
  initial_condition_box_date: undefined, // CC
  motor_trademark: undefined, // CD
  manufacture_year: undefined, // CE
  class: undefined, // CF
  reefer_tecnologia: undefined, // CG
  current_pti_status: undefined, // CH
  current_box_status: undefined, // CI
  depot_status: undefined, // CJ
  depot_zone: undefined, // CK
  depot_status_pti: undefined, // CL
  fecha_reparacion_pti: undefined, // CM
  depot_status_box: undefined, // CN
  fecha_reparacion_box: undefined, // CO
  preparado_cot: undefined, // CP
  fecha_pre_cot: undefined, // CQ
  leak_test: undefined, // CR
  fecha_leak_test: undefined, // CS
  preparado_coa: undefined, // CT
  doble_tecnologia: undefined, // CU
  cnt_lavado_pdp: undefined, // CV
  fecha_de_lavado: undefined, // CW
  obs: undefined, // CX
};

export const unitOneHeader = Object.keys(unitOneExample);

const unitCmaExample: UnitCma = {
  item: undefined, // A
  line: undefined, // B
  stowage_position: undefined, // C
  bay: undefined, // D
  row: undefined, // E
  tier: undefined, // F
  poo: undefined, // G
  pol: undefined, // H
  pod: undefined, // I
  fds: undefined, // J
  booking: undefined, // K
  bl: undefined, // L
  iso: undefined, // M
  size: undefined, // N
  type: undefined, // O
  container: undefined, // P
  status: undefined, // Q
  commodity: undefined, // R
  tare_weight: undefined, // S
  net_weight: undefined, // T
  gross_weight: undefined, // U
  vgm: undefined, // V
  peso_verificado: undefined, // W
  logistics_operator: undefined, // X
  shipper: undefined, // Y
  shipper_ruc: undefined, // Z
  customs_agency: undefined, // AA
  imo1: undefined, // AB
  un1: undefined, // AC
  imo2: undefined, // AD
  un2: undefined, // AE
  imo3: undefined, // AF
  un3: undefined, // AG
  imo4: undefined, // AH
  un4: undefined, // AI
  temp_set: undefined, // AJ
  temp_supply: undefined, // AK
  temp_return: undefined, // AL
  humidity: undefined, // AM
  air_flow: undefined, // AN
  oxigen: undefined, // AO
  carbon_dioxide: undefined, // AP
  olb: undefined, // AQ
  olf: undefined, // AR
  owl: undefined, // AS
  owr: undefined, // AT
  oh: undefined, // AU
  seal1: undefined, // AV
  seal2: undefined, // AW
  seal3: undefined, // AX
  seal4: undefined, // AY
  dt: undefined, // AZ
  condition: undefined, // BA
  tecnologia: undefined, // BB
  terminal: undefined, // BC
  loading_vessel: undefined, // BD
  ssp_gate_out: undefined, // BE
  gate_out_mty_date: undefined, // BF
  gate_in_full_date: undefined, // BG
  gate_out_vessel: undefined, // BH
  dam: undefined, // BI
  refrendo_date: undefined, // BJ
  usuario: undefined, // BK
  aforo_date: undefined, // BL
  ingreso_callao: undefined, // BM
  dwell_time: undefined, // BN
  fecha_pti: undefined, // BO
  vigencia_pti: undefined, // BP
  primer_pti: undefined, // BQ
  segundo_pti: undefined, // BR
  pti_vencido_85_d: undefined, // BS
  pti_vencido_90_d: undefined, // BT
  estadia_en_terminal: undefined, // BU
  type_controlador: undefined, // BV
  type_rcd: undefined, // BW
  discharge_vessel: undefined, // BX
  discharge_date: undefined, // BY
  initial_motor_condition: undefined, // BZ
  initial_motor_condition_date: undefined, // CA
  initial_condition_box: undefined, // CB
  initial_condition_box_date: undefined, // CC
  motor_trademark: undefined, // CD
  smart_refeer: undefined, // CE
  manufacture_year: undefined, // CF
  class: undefined, // CG
  reefer_tecnologia: undefined, // CH
  current_pti_status: undefined, // CI
  current_box_status: undefined, // CJ
  depot_status: undefined, // CK
  depot_zone: undefined, // CL
  depot_status_pti: undefined, // CM
  fecha_reparacion_pti: undefined, // CN
  depot_status_box: undefined, // CO
  fecha_reparacion_box: undefined, // CP
  std: undefined, // CQ
  fecha_std: undefined, // CR
  preparado_cot: undefined, // CS
  fecha_pre_cot: undefined, // CT
  leak_test: undefined, // CU
  preparado_coa: undefined, // CV
  fecha_coa: undefined, // CW
  doble_tecnologia: undefined, // CX
  cnt_lavado_pdp: undefined, // CY
  fecha_de_lavado: undefined, // CZ
  obs: undefined, // DA
};

export const unitCmaHeader = Object.keys(unitCmaExample);

const unitMscExample: UnitMsc = {
  item: undefined, // A
  line: undefined, // B
  stowage_position: undefined, // C
  bay: undefined, // D
  row: undefined, // E
  tier: undefined, // F
  poo: undefined, // G
  pol: undefined, // H
  pod: undefined, // I
  fds: undefined, // J
  booking: undefined, // K
  bl: undefined, // L
  iso: undefined, // M
  size: undefined, // N
  type: undefined, // O
  container: undefined, // P
  status: undefined, // Q
  commodity: undefined, // R
  tare_weight: undefined, // S
  net_weight: undefined, // T
  gross_weight: undefined, // U
  vgm: undefined, // V
  peso_verificado: undefined, // W
  logistics_operator: undefined, // X
  shipper: undefined, // Y
  shipper_ruc: undefined, // Z
  customs_agency: undefined, // AA
  imo1: undefined, // AB
  un1: undefined, // AC
  imo2: undefined, // AD
  un2: undefined, // AE
  imo3: undefined, // AF
  un3: undefined, // AG
  imo4: undefined, // AH
  un4: undefined, // AI
  temp_set: undefined, // AJ
  temp_supply: undefined, // AK
  temp_return: undefined, // AL
  humidity: undefined, // AM
  air_flow: undefined, // AN
  oxigen: undefined, // AO
  carbon_dioxide: undefined, // AP
  olb: undefined, // AQ
  olf: undefined, // AR
  owl: undefined, // AS
  owr: undefined, // AT
  oh: undefined, // AU
  seal1: undefined, // AV
  seal2: undefined, // AW
  seal3: undefined, // AX
  seal4: undefined, // AY
  dt: undefined, // AZ
  condition: undefined, // BA
  tecnologia: undefined, // BB
  terminal: undefined, // BC
  loading_vessel: undefined, // BD
  ssp_gate_out: undefined, // BE
  gate_out_mty_date: undefined, // BF
  gate_in_full_date: undefined, // BG
  gate_out_vessel: undefined, // BH
  dam: undefined, // BI
  refrendo_date: undefined, // BJ
  aforo_date: undefined, // BK
  type_controlador: undefined, // BL
  type_rcd: undefined, // BM
  dwell_time: undefined, // BN
  fecha_1_pti: undefined, // BO
  fecha_2_pti: undefined, // BP
  fecha_3_pti: undefined, // BQ
  fecha_4_pti: undefined, // BR
  fecha_5_pti: undefined, // BS
  fecha_pti_actual: undefined, // BT
  vigencia_pti: undefined, // BU
  pti_vencido_85_d: undefined, // BV
  pti_vencido_90_d: undefined, // BW
  estadia_en_terminal_dias: undefined, // BX
  discharge_vessel: undefined, // BY
  discharge_date: undefined, // BZ
  initial_motor_condition: undefined, // CA
  initial_motor_condition_date: undefined, // CB
  initial_condition_box: undefined, // CC
  initial_condition_box_date: undefined, // CD
  manufacture_year: undefined, // CE
  class: undefined, // CF
  motor_trademark: undefined, // CG
  reefer_tecnologia: undefined, // CH
  current_pti_match: undefined, // CI
  current_box_status: undefined, // CJ
  depot_status: undefined, // CK
  depot_zone: undefined, // CL
  depot_status_pti: undefined, // CM
  fecha_reparacion_pti: undefined, // CN
  depot_status_box: undefined, // CO
  fecha_reparacion_box: undefined, // CP
  leak_test: undefined, // CQ
  fecha_precoa: undefined, // CR
  preparadas_cota: undefined, // CS
  fecha_precot2: undefined, // CT
  preparado_cot: undefined, // CU
  fecha_pre_cot: undefined, // CV
  pti_ca: undefined, // CW
  liventus: undefined, // CX
  fecha_liventus: undefined, // CY
  cnt_lavados_pdp: undefined, // CZ
  fecha_de_lavado: undefined, // DA
  doble_tecnologia: undefined, // DB
  fecha_doble_tecnologia: undefined, // DC
  obs_trasree: undefined, // DD
  obs_trasree2: undefined, // DE
  sensor_humedad: undefined, // DF
  bateria_de_controlador: undefined, // DG
  type_of_damage: undefined, // DH
};
export const unitMscHeader = Object.keys(unitMscExample);

const unitSmlExample: UnitSml = {
  item: undefined, // A
  line: undefined, // B
  stowage_position: undefined, // C
  bay: undefined, // D
  row: undefined, // E
  tier: undefined, // F
  poo: undefined, // G
  pol: undefined, // H
  pod: undefined, // I
  fds: undefined, // J
  booking: undefined, // K
  bl: undefined, // L
  iso: undefined, // M
  size: undefined, // N
  type: undefined, // O
  container: undefined, // P
  status: undefined, // Q
  commodity: undefined, // R
  tare_weight: undefined, // S
  net_weight: undefined, // T
  gross_weight: undefined, // U
  vgm: undefined, // V
  peso_verificado: undefined, // W
  logistics_operator: undefined, // X
  shipper: undefined, // Y
  shipper_ruc: undefined, // Z
  customs_agency: undefined, // AA
  imo1: undefined, // AB
  un1: undefined, // AC
  imo2: undefined, // AD
  un2: undefined, // AE
  imo3: undefined, // AF
  un3: undefined, // AG
  imo4: undefined, // AH
  un4: undefined, // AI
  temp_set: undefined, // AJ
  temp_supply: undefined, // AK
  temp_return: undefined, // AL
  humidity: undefined, // AM
  air_flow: undefined, // AN
  oxigen: undefined, // AO
  carbon_dioxide: undefined, // AP
  olb: undefined, // AQ
  olf: undefined, // AR
  owl: undefined, // AS
  owr: undefined, // AT
  oh: undefined, // AU
  seal1: undefined, // AV
  seal2: undefined, // AW
  seal3: undefined, // AX
  seal4: undefined, // AY
  dt: undefined, // AZ
  condition: undefined, // BA
  tecnologia: undefined, // BB
  terminal: undefined, // BC
  loading_vessel: undefined, // BD
  ssp_gate_out: undefined, // BE
  gate_out_mty_date: undefined, // BF
  gate_in_full_date: undefined, // BG
  gate_out_vessel: undefined, // BH
  dam: undefined, // BI
  refrendo_date: undefined, // BJ
  usuario: undefined, // BK
  aforo_date: undefined, // BL
  ingreso_callao: undefined, // BM
  dwell_time: undefined, // BN
  primer_pti: undefined, // BO
  segundo_pti: undefined, // BP
  tercer_pti: undefined, // BQ
  vigencia_pti: undefined, // BR
  pti_vencido_85_d: undefined, // BS
  pti_vencido_90_d: undefined, // BT
  estadia_en_terminal: undefined, // BU
  type_controlador: undefined, // BV
  type_rcd: undefined, // BW
  discharge_vessel: undefined, // BX
  discharge_date: undefined, // BY
  initial_motor_condition: undefined, // BZ
  initial_motor_condition_date: undefined, // CA
  initial_condition_box: undefined, // CB
  initial_condition_box_date: undefined, // CC
  motor_trademark: undefined, // CD
  manufacture_year: undefined, // CE
  class: undefined, // CF
  reefer_tecnologia: undefined, // CG
  current_pti_status: undefined, // CH
  current_box_status: undefined, // CI
  depot_status: undefined, // CJ
  depot_status_pti: undefined, // CK
  fecha_reparacion_pti: undefined, // CL
  depot_status_box: undefined, // CM
  fecha_reparacion_box: undefined, // CN
  preparado_cot: undefined, // CO
  fecha_pre_cot: undefined, // CP
  leak_test: undefined, // CQ
  fecha_leak_test: undefined, // CR
  preparado_coa: undefined, // CS
  doble_tecnologia: undefined, // CT
  cnt_lavado_pdp: undefined, // CU
  fecha_de_lavado: undefined, // CV
  obs: undefined, // CW
};
export const unitSmlHeader = Object.keys(unitSmlExample);

export const templateOptions: TemplateOption[] = [
  { value: "BK", label: "Booking" },
  { value: "BL", label: "Bill of Lading" },
  { value: "U", label: "Unit" },
];

export const headerMap: Record<string, string[]> = {
  "Stock MSC": unitMscHeader,
  "Stock ONE": unitOneHeader,
  "Stock CMA": unitCmaHeader,
  "Stock SEABOARD": unitSmlHeader,
  default: unitHeaders,
};
