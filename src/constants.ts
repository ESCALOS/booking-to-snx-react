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
  nro: undefined, // A
  line: undefined, // B
  poo: undefined, // C
  pol: undefined, // D
  pod: undefined, // E
  fds: undefined, // F
  booking: undefined, // G
  iso_code: undefined, // H
  size: undefined, // I
  kind: undefined, // J
  qty: undefined, // K
  state: undefined, // L
  commodity: undefined, // M
  tara: undefined, // N
  net_weight: undefined, // O
  gross_weight: undefined, // P
  vgm: undefined, // Q
  peso_verificado: undefined, // R
  imo1: undefined, // S
  un1: undefined, // T
  imo2: undefined, // U
  un2: undefined, // V
  imo3: undefined, // W
  un3: undefined, // X
  imo4: undefined, // Y
  un4: undefined, // Z
  olb: undefined, // AA
  olf: undefined, // AB
  owl: undefined, // AC
  owr: undefined, // AD
  oh: undefined, // AE
  temperature: undefined, // AF
  maximum_temperature: undefined, // AG
  minimum_temperature: undefined, // AH
  humidity: undefined, // AI
  air_flow: undefined, // AJ
  oxygen: undefined, // AK
  carbon_dioxide: undefined, // AL
  cliente: undefined, // AM
  operador_logistico: undefined, // AN
  tecnologia: undefined, // AO
  manifiesto: undefined, // AP
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
  yard_position: undefined, // K
  booking: undefined, // L
  bl: undefined, // M
  iso: undefined, // N
  size: undefined, // O
  type: undefined, // P
  container: undefined, // Q
  status: undefined, // R
  commodity: undefined, // S
  tare_weight: undefined, // T
  net_weight: undefined, // U
  gross_weight: undefined, // V
  vgm: undefined, // W
  peso_verificado: undefined, // X
  logistics_operator: undefined, // Y
  shipper: undefined, // Z
  shipper_ruc: undefined, // AA
  customs_agency: undefined, // AB
  imo1: undefined, // AC
  un1: undefined, // AD
  imo2: undefined, // AE
  un2: undefined, // AF
  imo3: undefined, // AG
  un3: undefined, // AH
  imo4: undefined, // AI
  un4: undefined, // AJ
  temp_set: undefined, // AK
  temp_supply: undefined, // AL
  temp_return: undefined, // AM
  humidity: undefined, // AN
  air_flow: undefined, // AO
  oxigen: undefined, // AP
  carbon_dioxide: undefined, // AQ
  olb: undefined, // AR
  olf: undefined, // AS
  owl: undefined, // AT
  owr: undefined, // AU
  oh: undefined, // AV
  seal1: undefined, // AW
  seal2: undefined, // AX
  seal3: undefined, // AY
  seal4: undefined, // AZ
  dt: undefined, // BA
  condition: undefined, // BB
  tecnologia: undefined, // BC
  terminal: undefined, // BD
  loading_manifest: undefined, // BE
  loading_vessel: undefined, // BF
  ssp_gate_out: undefined, // BG
  gate_out_mty_date: undefined, // BH
  gate_in_full_date: undefined, // BI
  gate_out_vessel: undefined, // BJ
  dam: undefined, // BK
  refrendo_date: undefined, // BL
  usuario: undefined, // BM
  aforo_date: undefined, // BN
  ingreso_callao: undefined, // BO
  dwell_time: undefined, // BP
  primer_pti: undefined, // BQ
  segundo_pti: undefined, // BR
  fecha_pti: undefined, // BS
  vigencia_pti: undefined, // BT
  pti_vencido_60_d: undefined, // BU
  pti_vencido_30_d: undefined, // BV
  estadia_en_terminal: undefined, // BW
  type_controlador: undefined, // BX
  type_rcd: undefined, // BY
  discharge_manifest: undefined, // BZ
  discharge_vessel: undefined, // CA
  discharge_date: undefined, // CB
  initial_motor_condition: undefined, // CC
  initial_motor_condition_date: undefined, // CD
  initial_condition_box: undefined, // CE
  initial_condition_box_date: undefined, // CF
  motor_trademark: undefined, // CG
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
  preparado_cot: undefined, // CT
  fecha_pre_cot: undefined, // CU
  vigencia_cot: undefined, // CV
  fecha_venc_pre_cot: undefined, // CW
  leak_test: undefined, // CX
  fecha_leak_test: undefined, // CY
  preparado_coa: undefined, // CZ
  doble_tecnologia: undefined, // DA
  cnt_lavado: undefined, // DB
  fecha_de_lavado: undefined, // DC
  obs: undefined, // DD
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
  yard_position: undefined, // K
  booking: undefined, // L
  bl: undefined, // M
  iso: undefined, // N
  size: undefined, // O
  type: undefined, // P
  container: undefined, // Q
  status: undefined, // R
  commodity: undefined, // S
  tare_weight: undefined, // T
  net_weight: undefined, // U
  gross_weight: undefined, // V
  vgm: undefined, // W
  peso_verificado: undefined, // X
  logistics_operator: undefined, // Y
  shipper: undefined, // Z
  shipper_ruc: undefined, // AA
  customs_agency: undefined, // AB
  imo1: undefined, // AC
  un1: undefined, // AD
  imo2: undefined, // AE
  un2: undefined, // AF
  imo3: undefined, // AG
  un3: undefined, // AH
  imo4: undefined, // AI
  un4: undefined, // AJ
  temp_set: undefined, // AK
  temp_supply: undefined, // AL
  temp_return: undefined, // AM
  humidity: undefined, // AN
  air_flow: undefined, // AO
  oxigen: undefined, // AP
  carbon_dioxide: undefined, // AQ
  olb: undefined, // AR
  olf: undefined, // AS
  owl: undefined, // AT
  owr: undefined, // AU
  oh: undefined, // AV
  seal1: undefined, // AW
  seal2: undefined, // AX
  seal3: undefined, // AY
  seal4: undefined, // AZ
  dt: undefined, // BA
  condition: undefined, // BB
  tecnologia: undefined, // BC
  terminal: undefined, // BD
  loading_manifest: undefined, // BE
  loading_vessel: undefined, // BF
  ssp_gate_out: undefined, // BG
  gate_out_mty_date: undefined, // BH
  gate_in_full_date: undefined, // BI
  gate_out_vessel: undefined, // BJ
  dam: undefined, // BK
  refrendo_date: undefined, // BL
  usuario: undefined, // BM
  aforo_date: undefined, // BN
  ingreso_callao: undefined, // BO
  dwell_time: undefined, // BP
  fecha_pti: undefined, // BQ
  vigencia_pti: undefined, // BR
  primer_pti: undefined, // BS
  segundo_pti: undefined, // BT
  pti_vencido_85_d: undefined, // BU
  pti_vencido_90_d: undefined, // BV
  estadia_en_terminal: undefined, // BW
  type_controlador: undefined, // BX
  type_rcd: undefined, // BY
  discharge_manifest: undefined, // BZ
  discharge_vessel: undefined, // CA
  discharge_date: undefined, // CB
  initial_motor_condition: undefined, // CC
  initial_motor_condition_date: undefined, // CD
  initial_condition_box: undefined, // CE
  initial_condition_box_date: undefined, // CF
  motor_trademark: undefined, // CG
  smart_refeer: undefined, // CH
  manufacture_year: undefined, // CI
  class: undefined, // CJ
  reefer_tecnologia: undefined, // CK
  current_pti_status: undefined, // CL
  current_box_status: undefined, // CM
  depot_status: undefined, // CN
  depot_zone: undefined, // CO
  depot_status_pti: undefined, // CP
  fecha_reparacion_pti: undefined, // CQ
  depot_status_box: undefined, // CR
  fecha_reparacion_box: undefined, // CS
  std: undefined, // CT
  fecha_std: undefined, // CU
  preparado_cot: undefined, // CV
  fecha_pre_cot: undefined, // CW
  leak_test: undefined, // CX
  preparado_coa: undefined, // CY
  fecha_coa: undefined, // CZ
  doble_tecnologia: undefined, // DA
  cnt_lavado: undefined, // DB
  fecha_de_lavado: undefined, // DC
  obs: undefined, // DD
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
  yard_position: undefined, // K
  booking: undefined, // L
  bl: undefined, // M
  iso: undefined, // N
  size: undefined, // O
  type: undefined, // P
  container: undefined, // Q
  status: undefined, // R
  commodity: undefined, // S
  tare_weight: undefined, // T
  net_weight: undefined, // U
  gross_weight: undefined, // V
  vgm: undefined, // W
  peso_verificado: undefined, // X
  logistics_operator: undefined, // Y
  shipper: undefined, // Z
  shipper_ruc: undefined, // AA
  customs_agency: undefined, // AB
  imo1: undefined, // AC
  un1: undefined, // AD
  imo2: undefined, // AE
  un2: undefined, // AF
  imo3: undefined, // AG
  un3: undefined, // AH
  imo4: undefined, // AI
  un4: undefined, // AJ
  temp_set: undefined, // AK
  temp_supply: undefined, // AL
  temp_return: undefined, // AM
  humidity: undefined, // AN
  air_flow: undefined, // AO
  oxigen: undefined, // AP
  carbon_dioxide: undefined, // AQ
  olb: undefined, // AR
  olf: undefined, // AS
  owl: undefined, // AT
  owr: undefined, // AU
  oh: undefined, // AV
  seal1: undefined, // AW
  seal2: undefined, // AX
  seal3: undefined, // AY
  seal4: undefined, // AZ
  dt: undefined, // BA
  condition: undefined, // BB
  tecnologia: undefined, // BC
  terminal: undefined, // BD
  loading_manifest: undefined, // BE
  loading_vessel: undefined, // BF
  ssp_gate_out: undefined, // BG
  gate_out_mty_date: undefined, // BH
  gate_in_full_date: undefined, // BI
  gate_out_vessel: undefined, // BJ
  dam: undefined, // BK
  refrendo_date: undefined, // BL
  aforo_date: undefined, // BM
  type_controlador: undefined, // BN
  type_rcd: undefined, // BO
  dwell_time: undefined, // BP
  fecha_1_pti: undefined, // BQ
  fecha_2_pti: undefined, // BR
  fecha_3_pti: undefined, // BS
  fecha_4_pti: undefined, // BT
  fecha_5_pti: undefined, // BU
  fecha_pti_actual: undefined, // BV
  vigencia_pti: undefined, // BW
  pti_vencido_85_d: undefined, // BX
  pti_vencido_90_d: undefined, // BY
  estadia_en_terminal_dias: undefined, // BZ
  discharge_manifest: undefined, // CA
  discharge_vessel: undefined, // CB
  discharge_date: undefined, // CC
  initial_motor_condition: undefined, // CD
  initial_motor_condition_date: undefined, // CE
  initial_condition_box: undefined, // CF
  initial_condition_box_date: undefined, // CG
  manufacture_year: undefined, // CH
  class: undefined, // CI
  motor_trademark: undefined, // CJ
  reefer_tecnologia: undefined, // CK
  current_pti_status: undefined, // CL
  current_box_status: undefined, // CM
  depot_status: undefined, // CN
  depot_zone: undefined, // CO
  depot_status_pti: undefined, // CP
  fecha_reparacion_pti: undefined, // CQ
  depot_status_box: undefined, // CR
  fecha_reparacion_box: undefined, // CS
  leak_test: undefined, // CT
  fecha_precoa: undefined, // CU
  preparadas_cota: undefined, // CV
  fecha_precot2: undefined, // CW
  preparado_cot: undefined, // CX
  fecha_pre_cot: undefined, // CY
  pti_ca: undefined, // CZ
  liventus: undefined, // DA
  fecha_liventus: undefined, // DB
  cnt_lavado: undefined, // DC
  fecha_de_lavado: undefined, // DD
  doble_tecnologia: undefined, // DE
  fecha_doble_tecnologia: undefined, // DF
  obs_trasree: undefined, // DG
  obs_trasree2: undefined, // DH
  sensor_humedad: undefined, // DI
  bateria_de_controlador: undefined, // DJ
  type_of_damage: undefined, // DK
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
  yard_position: undefined, // K
  booking: undefined, // L
  bl: undefined, // M
  iso: undefined, // N
  size: undefined, // O
  type: undefined, // P
  container: undefined, // Q
  status: undefined, // R
  commodity: undefined, // S
  tare_weight: undefined, // T
  net_weight: undefined, // U
  gross_weight: undefined, // V
  vgm: undefined, // W
  peso_verificado: undefined, // X
  logistics_operator: undefined, // Y
  shipper: undefined, // Z
  shipper_ruc: undefined, // AA
  customs_agency: undefined, // AB
  imo1: undefined, // AC
  un1: undefined, // AD
  imo2: undefined, // AE
  un2: undefined, // AF
  imo3: undefined, // AG
  un3: undefined, // AH
  imo4: undefined, // AI
  un4: undefined, // AJ
  temp_set: undefined, // AK
  temp_supply: undefined, // AL
  temp_return: undefined, // AM
  humidity: undefined, // AN
  air_flow: undefined, // AO
  oxigen: undefined, // AP
  carbon_dioxide: undefined, // AQ
  olb: undefined, // AR
  olf: undefined, // AS
  owl: undefined, // AT
  owr: undefined, // AU
  oh: undefined, // AV
  seal1: undefined, // AW
  seal2: undefined, // AX
  seal3: undefined, // AY
  seal4: undefined, // AZ
  dt: undefined, // BA
  condition: undefined, // BB
  tecnologia: undefined, // BC
  terminal: undefined, // BD
  loading_manifest: undefined, // BE
  loading_vessel: undefined, // BF
  ssp_gate_out: undefined, // BG
  gate_out_mty_date: undefined, // BH
  gate_in_full_date: undefined, // BI
  gate_out_vessel: undefined, // BJ
  dam: undefined, // BK
  refrendo_date: undefined, // BL
  usuario: undefined, // BM
  aforo_date: undefined, // BN
  ingreso_callao: undefined, // BO
  dwell_time: undefined, // BP
  primer_pti: undefined, // BQ
  segundo_pti: undefined, // BR
  tercer_pti: undefined, // BS
  vigencia_pti: undefined, // BT
  pti_vencido_85_d: undefined, // BU
  pti_vencido_90_d: undefined, // BV
  estadia_en_terminal: undefined, // BW
  type_controlador: undefined, // BX
  type_rcd: undefined, // BY
  discharge_manifest: undefined, // BZ
  discharge_vessel: undefined, // CA
  discharge_date: undefined, // CB
  initial_motor_condition: undefined, // CC
  initial_motor_condition_date: undefined, // CD
  initial_condition_box: undefined, // CE
  initial_condition_box_date: undefined, // CF
  motor_trademark: undefined, // CG
  manufacture_year: undefined, // CH
  class: undefined, // CI
  reefer_tecnologia: undefined, // CJ
  current_pti_status: undefined, // CK
  current_box_status: undefined, // CL
  depot_status: undefined, // CM
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
  yard_position: undefined, // K
  booking: undefined, // L
  bl: undefined, // M
  iso: undefined, // N
  size: undefined, // O
  type: undefined, // P
  container: undefined, // Q
  status: undefined, // R
  commodity: undefined, // S
  tare_weight: undefined, // T
  net_weight: undefined, // U
  gross_weight: undefined, // V
  vgm: undefined, // W
  peso_verificado: undefined, // X
  logistics_operator: undefined, // Y
  shipper: undefined, // Z
  shipper_ruc: undefined, // AA
  customs_agency: undefined, // AB
  imo1: undefined, // AC
  un1: undefined, // AD
  imo2: undefined, // AE
  un2: undefined, // AF
  imo3: undefined, // AG
  un3: undefined, // AH
  imo4: undefined, // AI
  un4: undefined, // AJ
  temp_set: undefined, // AK
  temp_supply: undefined, // AL
  temp_return: undefined, // AM
  humidity: undefined, // AN
  air_flow: undefined, // AO
  oxigen: undefined, // AP
  carbon_dioxide: undefined, // AQ
  olb: undefined, // AR
  olf: undefined, // AS
  owl: undefined, // AT
  owr: undefined, // AU
  oh: undefined, // AV
  seal1: undefined, // AW
  seal2: undefined, // AX
  seal3: undefined, // AY
  seal4: undefined, // AZ
  dt: undefined, // BA
  condition: undefined, // BB
  tecnologia: undefined, // BC
  terminal: undefined, // BD
  loading_manifest: undefined, // BE
  loading_vessel: undefined, // BF
  ssp_gate_out: undefined, // BG
  gate_out_mty_date: undefined, // BH
  gate_in_full_date: undefined, // BI
  gate_out_vessel: undefined, // BJ
  dam: undefined, // BK
  refrendo_date: undefined, // BL
  aforo_date: undefined, // BM
  type_size: undefined, // BN
  manufacture_year: undefined, // BO
  payload: undefined, // BP
  tare: undefined, // BQ
  clase: undefined, // BR
  permanencia: undefined, // BS
  estado_box: undefined, // BT
  estado_maq: undefined, // BU
  zona: undefined, // BV
  reefer_tecnologia: undefined, // BW
  motor: undefined, // BX
  iso_code: undefined, // BY
  acondicionamiento: undefined, // BZ
  observaciones: undefined, // CA
  ussda: undefined, // CB
  upgrade: undefined, // CC
  rcd: undefined, // CD
  operative: undefined, // CE
  cleaning: undefined, // CF
  damaged: undefined, // CG
  without_pti: undefined, // CH
  under_inspection: undefined, // CI
  pre_asigned: undefined, // CJ
  in_hold: undefined, // CK
  load_empty: undefined, // CL
  total_lost: undefined, // CM
  sale: undefined, // CN
  primer_pti: undefined, // CO
  segundo_pti: undefined, // CP
  tercer_pti: undefined, // CQ
  type_controlador: undefined, // CR
  discharge_manifest: undefined, // CS
  discharge_vessel: undefined, // CT
  discharge_date: undefined, // CU
  initial_motor_condition: undefined, // CV
  initial_motor_condition_date: undefined, // CW
  initial_box_condition: undefined, // CX
  initial_box_condition_date: undefined, // CY
  current_pti_status: undefined, // CZ
  current_box_status: undefined, // DA
  depot_status: undefined, // DB
  depot_zone: undefined, // DC
  depot_status_pti: undefined, // DD
  fecha_reparacion_pti: undefined, // DE
  depot_status_box: undefined, // DF
  fecha_reparacion_box: undefined, // DG
  leak_test: undefined, // DH
  leak_test_date: undefined, // DI
  preparadas_cot: undefined, // DJ
  fecha_prueba_cot: undefined, // DK
  doble_tecnologia: undefined, // DL
  preparadas_coa: undefined, // DM
  fecha_preparadas_coa: undefined, // DN
  cnt_lavado: undefined, // DO
  fecha_lavado: undefined, // DP
  observacion: undefined, // DQ
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
