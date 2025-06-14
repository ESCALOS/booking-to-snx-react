import { BlExcel } from "interfaces/billOfLafing";
import { BookingExcel } from "interfaces/booking";
import { UnitExcel } from "interfaces/unit";
import { UnitOne } from "interfaces/unit/byLine/unitOne";
import { TemplateOption } from "types";
import { UnitCma } from "interfaces/unit/byLine/unitCma";
import { UnitMsc } from "interfaces/unit/byLine/unitMsc";
import { UnitSml } from "interfaces/unit/byLine/unitSml";
import { UnitMae } from "interfaces/unit/byLine/unitMae";
import { BookingTemplateExcel } from "interfaces/booking/bookingTemplateExcel";
import { ClientExcel } from "interfaces/client/clientExcel";

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

const bookingTemplateExcelExample: BookingTemplateExcel = {
  nro: undefined,
  line: undefined,
  poo: undefined,
  pol: undefined,
  pod: undefined,
  fds: undefined,
  booking: undefined,
  iso_code: undefined,
  size: undefined,
  kind: undefined,
  qty: undefined,
  state: undefined,
  commodity: undefined,
  tara: undefined,
  net_weight: undefined,
  gross_weight: undefined,
  vgm: undefined,
  peso_verificado: undefined,
  imo1: undefined,
  un1: undefined,
  imo2: undefined,
  un2: undefined,
  imo3: undefined,
  un3: undefined,
  imo4: undefined,
  un4: undefined,
  olb: undefined,
  olf: undefined,
  owl: undefined,
  owr: undefined,
  oh: undefined,
  temperature: undefined,
  maximum_temperature: undefined,
  minimum_temperature: undefined,
  humidity: undefined,
  air_flow: undefined,
  oxygen: undefined,
  carbon_dioxide: undefined,
  cliente: undefined,
  tecnologia: undefined,
  manifiesto: undefined,
};

export const bookingTemplateHeaders = Object.keys(bookingTemplateExcelExample);

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
  loading_manifest: undefined, // BD
  loading_vessel: undefined, // BE
  ssp_gate_out: undefined, // BF
  gate_out_mty_date: undefined, // BG
  gate_in_full_date: undefined, // BH
  gate_out_vessel: undefined, // BI
  dam: undefined, // BJ
  refrendo_date: undefined, // BK
  usuario: undefined, // BL
  aforo_date: undefined, // BM
  ingreso_callao: undefined, // BN
  dwell_time: undefined, // BO
  primer_pti: undefined, // BP
  segundo_pti: undefined, // BQ
  fecha_pti: undefined, // BR
  vigencia_pti: undefined, // BS
  pti_vencido_60_d: undefined, // BT
  pti_vencido_30_d: undefined, // BU
  estadia_en_terminal: undefined, // BV
  type_controlador: undefined, // BW
  type_rcd: undefined, // BX
  discharge_manifest: undefined, // BY
  discharge_vessel: undefined, // BZ
  discharge_date: undefined, // CA
  initial_motor_condition: undefined, // CB
  initial_motor_condition_date: undefined, // CC
  initial_condition_box: undefined, // CD
  initial_condition_box_date: undefined, // CE
  motor_trademark: undefined, // CF
  manufacture_year: undefined, // CG
  class: undefined, // CH
  reefer_tecnologia: undefined, // CI
  current_pti_status: undefined, // CJ
  current_box_status: undefined, // CK
  depot_status: undefined, // CL
  depot_zone: undefined, // CM
  depot_status_pti: undefined, // CN
  fecha_reparacion_pti: undefined, // CO
  depot_status_box: undefined, // CP
  fecha_reparacion_box: undefined, // CQ
  preparado_cot: undefined, // CR
  fecha_pre_cot: undefined, // CS
  leak_test: undefined, // CT
  fecha_leak_test: undefined, // CU
  preparado_coa: undefined, // CV
  doble_tecnologia: undefined, // CW
  cnt_lavado: undefined, // CX
  fecha_de_lavado: undefined, // CY
  obs: undefined, // CZ
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
  loading_manifest: undefined, // BD
  loading_vessel: undefined, // BE
  ssp_gate_out: undefined, // BF
  gate_out_mty_date: undefined, // BG
  gate_in_full_date: undefined, // BH
  gate_out_vessel: undefined, // BI
  dam: undefined, // BJ
  refrendo_date: undefined, // BK
  usuario: undefined, // BL
  aforo_date: undefined, // BM
  ingreso_callao: undefined, // BN
  dwell_time: undefined, // BO
  fecha_pti: undefined, // BP
  vigencia_pti: undefined, // BQ
  primer_pti: undefined, // BR
  segundo_pti: undefined, // BS
  pti_vencido_85_d: undefined, // BT
  pti_vencido_90_d: undefined, // BU
  estadia_en_terminal: undefined, // BV
  type_controlador: undefined, // BW
  type_rcd: undefined, // BX
  discharge_manifest: undefined, // BY
  discharge_vessel: undefined, // BZ
  discharge_date: undefined, // CA
  initial_motor_condition: undefined, // CB
  initial_motor_condition_date: undefined, // CC
  initial_condition_box: undefined, // CD
  initial_condition_box_date: undefined, // CE
  motor_trademark: undefined, // CF
  smart_refeer: undefined, // CG
  manufacture_year: undefined, // CH
  class: undefined, // CI
  reefer_tecnologia: undefined, // CJ
  current_pti_status: undefined, // CK
  current_box_status: undefined, // CL
  depot_status: undefined, // CM
  depot_zone: undefined, // CN
  depot_status_pti: undefined, // CO
  fecha_reparacion_pti: undefined, // CP
  depot_status_box: undefined, // CQ
  fecha_reparacion_box: undefined, // CR
  std: undefined, // CS
  fecha_std: undefined, // CT
  preparado_cot: undefined, // CU
  fecha_pre_cot: undefined, // CV
  leak_test: undefined, // CW
  preparado_coa: undefined, // CX
  fecha_coa: undefined, // CY
  doble_tecnologia: undefined, // CZ
  cnt_lavado: undefined, // DA
  fecha_de_lavado: undefined, // DB
  obs: undefined, // DC
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
  loading_manifest: undefined, // BD
  loading_vessel: undefined, // BE
  ssp_gate_out: undefined, // BF
  gate_out_mty_date: undefined, // BG
  gate_in_full_date: undefined, // BH
  gate_out_vessel: undefined, // BI
  dam: undefined, // BJ
  refrendo_date: undefined, // BK
  aforo_date: undefined, // BL
  type_controlador: undefined, // BM
  type_rcd: undefined, // BN
  dwell_time: undefined, // BO
  fecha_1_pti: undefined, // BP
  fecha_2_pti: undefined, // BQ
  fecha_3_pti: undefined, // BR
  fecha_4_pti: undefined, // BS
  fecha_5_pti: undefined, // BT
  fecha_pti_actual: undefined, // BU
  vigencia_pti: undefined, // BV
  pti_vencido_85_d: undefined, // BW
  pti_vencido_90_d: undefined, // BX
  estadia_en_terminal_dias: undefined, // BY
  discharge_manifest: undefined, // BZ
  discharge_vessel: undefined, // CA
  discharge_date: undefined, // CB
  initial_motor_condition: undefined, // CC
  initial_motor_condition_date: undefined, // CD
  initial_condition_box: undefined, // CE
  initial_condition_box_date: undefined, // CF
  manufacture_year: undefined, // CG
  class: undefined, // CH
  motor_trademark: undefined, // CI
  reefer_tecnologia: undefined, // CJ
  current_pti_status: undefined, // CK
  current_box_status: undefined, // CL
  depot_status: undefined, // CM
  depot_zone: undefined, // CN
  depot_status_pti: undefined, // CO
  fecha_reparacion_pti: undefined, // CP
  depot_status_box: undefined, // CQ
  fecha_reparacion_box: undefined, // CR
  leak_test: undefined, // CS
  fecha_precoa: undefined, // CT
  preparadas_cota: undefined, // CU
  fecha_precot2: undefined, // CV
  preparado_cot: undefined, // CW
  fecha_pre_cot: undefined, // CX
  pti_ca: undefined, // CY
  liventus: undefined, // CZ
  fecha_liventus: undefined, // DA
  cnt_lavado: undefined, // DB
  fecha_de_lavado: undefined, // DC
  doble_tecnologia: undefined, // DD
  fecha_doble_tecnologia: undefined, // DE
  obs_trasree: undefined, // DF
  obs_trasree2: undefined, // DG
  sensor_humedad: undefined, // DH
  bateria_de_controlador: undefined, // DI
  type_of_damage: undefined, // DJ
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
  loading_manifest: undefined, // BD
  loading_vessel: undefined, // BE
  ssp_gate_out: undefined, // BF
  gate_out_mty_date: undefined, // BG
  gate_in_full_date: undefined, // BH
  gate_out_vessel: undefined, // BI
  dam: undefined, // BJ
  refrendo_date: undefined, // BK
  usuario: undefined, // BL
  aforo_date: undefined, // BM
  ingreso_callao: undefined, // BN
  dwell_time: undefined, // BO
  primer_pti: undefined, // BP
  segundo_pti: undefined, // BQ
  tercer_pti: undefined, // BR
  vigencia_pti: undefined, // BS
  pti_vencido_85_d: undefined, // BT
  pti_vencido_90_d: undefined, // BU
  estadia_en_terminal: undefined, // BV
  type_controlador: undefined, // BW
  type_rcd: undefined, // BX
  discharge_manifest: undefined, // BY
  discharge_vessel: undefined, // BZ
  discharge_date: undefined, // CA
  initial_motor_condition: undefined, // CB
  initial_motor_condition_date: undefined, // CC
  initial_condition_box: undefined, // CD
  initial_condition_box_date: undefined, // CE
  motor_trademark: undefined, // CF
  manufacture_year: undefined, // CG
  class: undefined, // CH
  reefer_tecnologia: undefined, // CI
  current_pti_status: undefined, // CJ
  current_box_status: undefined, // CK
  depot_status: undefined, // CL
  depot_status_pti: undefined, // CM
  fecha_reparacion_pti: undefined, // CN
  depot_status_box: undefined, // CO
  fecha_reparacion_box: undefined, // CP
  preparado_cot: undefined, // CQ
  fecha_pre_cot: undefined, // CR
  leak_test: undefined, // CS
  fecha_leak_test: undefined, // CT
  preparado_coa: undefined, // CU
  doble_tecnologia: undefined, // CV
  cnt_lavado: undefined, // CW
  fecha_de_lavado: undefined, // CX
  obs: undefined, // CY
};
export const unitSmlHeader = Object.keys(unitSmlExample);

const unitMaeExample: UnitMae = {
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
  loading_manifest: undefined, // BD
  loading_vessel: undefined, // BE
  ssp_gate_out: undefined, // BF
  gate_out_mty_date: undefined, // BG
  gate_in_full_date: undefined, // BH
  gate_out_vessel: undefined, // BI
  dam: undefined, // BJ
  refrendo_date: undefined, // BK
  aforo_date: undefined, // BL
  type_size: undefined, // BM
  manufacture_year: undefined, // BN
  payload: undefined, // BO
  tare: undefined, // BP
  clase: undefined, // BQ
  permanencia: undefined, // BR
  estado_box: undefined, // BS
  estado_maq: undefined, // BT
  zona: undefined, // BU
  reefer_tecnologia: undefined, // BV
  motor: undefined, // BW
  iso_code: undefined, // BX
  acondicionamiento: undefined, // BY
  observaciones: undefined, // BZ
  ussda: undefined, // CA
  upgrade: undefined, // CB
  rcd: undefined, // CC
  operative: undefined, // CD
  cleaning: undefined, // CE
  damaged: undefined, // CF
  without_pti: undefined, // CG
  under_inspection: undefined, // CH
  pre_asigned: undefined, // CI
  in_hold: undefined, // CJ
  load_empty: undefined, // CK
  total_lost: undefined, // CL
  sale: undefined, // CM
  primer_pti: undefined, // CN
  segundo_pti: undefined, // CO
  tercer_pti: undefined, // CP
  type_controlador: undefined, // CQ
  discharge_manifest: undefined, // CR
  discharge_vessel: undefined, // CS
  discharge_date: undefined, // CT
  initial_motor_condition: undefined, // CU
  initial_motor_condition_date: undefined, // CV
  initial_box_condition: undefined, // CW
  initial_box_condition_date: undefined, // CX
  current_pti_status: undefined, // CY
  current_box_status: undefined, // CZ
  depot_status: undefined, // DA
  depot_zone: undefined, // DB
  depot_status_pti: undefined, // DC
  fecha_reparacion_pti: undefined, // DD
  depot_status_box: undefined, // DE
  fecha_reparacion_box: undefined, // DF
  leak_test: undefined, // DG
  leak_test_date: undefined, // DH
  preparadas_cot: undefined, // DI
  fecha_prueba_cot: undefined, // DJ
  doble_tecnologia: undefined, // DK
  preparadas_coa: undefined, // DL
  fecha_preparadas_coa: undefined, // DM
  cnt_lavado: undefined, // DN
  fecha_lavado: undefined, // DO
  observacion: undefined, // DP
};
export const unitMaeHeader = Object.keys(unitMaeExample);

export const templateOptions: TemplateOption[] = [
  { value: "BK", label: "Booking" },
  { value: "BL", label: "Bill of Lading" },
  { value: "U", label: "Unit" },
  { value: "C", label: "Clientes" },
];

export const headerMap: Record<string, string[]> = {
  "Stock MSC": unitMscHeader,
  "Stock ONE": unitOneHeader,
  "Stock CMA": unitCmaHeader,
  "Stock SEABOARD": unitSmlHeader,
  default: unitHeaders,
};

const clientExample: ClientExcel = {
  user_id: undefined,
  clave: undefined,
  ruc: undefined,
  dni: undefined,
  apellidos: undefined,
  nombres: undefined,
  correo: undefined,
};
export const clientHeaders = Object.keys(clientExample);
