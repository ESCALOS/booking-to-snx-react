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
import { UserExcel } from "interfaces/user/userExcel";
import { TruckDriverExcel } from "interfaces/truckDriver/truckDriverExcel";

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
  discharge_bl: undefined, // CB
  discharge_date: undefined, // CC
  initial_motor_condition: undefined, // CD
  initial_motor_condition_date: undefined, // CE
  initial_condition_box: undefined, // CF
  initial_condition_box_date: undefined, // CG
  motor_trademark: undefined, // CH
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
  preparado_cot: undefined, // CU
  fecha_pre_cot: undefined, // CV
  vigencia_cot: undefined, // CW
  fecha_venc_pre_cot: undefined, // CX
  leak_test: undefined, // CY
  fecha_leak_test: undefined, // CZ
  preparado_coa: undefined, // DA
  doble_tecnologia: undefined, // DB
  cnt_lavado: undefined, // DC
  fecha_de_lavado: undefined, // DD
  obs: undefined, // DE
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
  discharge_bl: undefined, // CB
  discharge_date: undefined, // CC
  initial_motor_condition: undefined, // CD
  initial_motor_condition_date: undefined, // CE
  initial_condition_box: undefined, // CF
  initial_condition_box_date: undefined, // CG
  motor_trademark: undefined, // CH
  smart_refeer: undefined, // CI
  manufacture_year: undefined, // CJ
  class: undefined, // CK
  reefer_tecnologia: undefined, // CL
  current_pti_status: undefined, // CM
  current_box_status: undefined, // CN
  depot_status: undefined, // CO
  depot_zone: undefined, // CP
  depot_status_pti: undefined, // CQ
  fecha_reparacion_pti: undefined, // CR
  depot_status_box: undefined, // CS
  fecha_reparacion_box: undefined, // CT
  std: undefined, // CU
  fecha_std: undefined, // CV
  preparado_cot: undefined, // CW
  fecha_pre_cot: undefined, // CX
  leak_test: undefined, // CY
  preparado_coa: undefined, // CZ
  fecha_coa: undefined, // DA
  doble_tecnologia: undefined, // DB
  cnt_lavado: undefined, // DC
  fecha_de_lavado: undefined, // DD
  obs: undefined, // DE
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
  discharge_bl: undefined, // CC
  discharge_date: undefined, // CD
  initial_motor_condition: undefined, // CE
  initial_motor_condition_date: undefined, // CF
  initial_condition_box: undefined, // CG
  initial_condition_box_date: undefined, // CH
  manufacture_year: undefined, // CI
  class: undefined, // CJ
  motor_trademark: undefined, // CK
  reefer_tecnologia: undefined, // CL
  current_pti_status: undefined, // CM
  current_box_status: undefined, // CN
  depot_status: undefined, // CO
  depot_zone: undefined, // CP
  depot_status_pti: undefined, // CQ
  fecha_reparacion_pti: undefined, // CR
  depot_status_box: undefined, // CS
  fecha_reparacion_box: undefined, // CT
  leak_test: undefined, // CU
  fecha_precoa: undefined, // CV
  preparadas_cota: undefined, // CW
  fecha_precot2: undefined, // CX
  preparado_cot: undefined, // CY
  fecha_pre_cot: undefined, // CZ
  pti_ca: undefined, // DA
  liventus: undefined, // DB
  fecha_liventus: undefined, // DC
  cnt_lavado: undefined, // DD
  fecha_de_lavado: undefined, // DE
  doble_tecnologia: undefined, // DF
  fecha_doble_tecnologia: undefined, // DG
  obs_trasree: undefined, // DH
  obs_trasree2: undefined, // DI
  sensor_humedad: undefined, // DJ
  bateria_de_controlador: undefined, // DK
  type_of_damage: undefined, // DL
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
  discharge_bl: undefined, // CB
  discharge_date: undefined, // CC
  initial_motor_condition: undefined, // CD
  initial_motor_condition_date: undefined, // CE
  initial_condition_box: undefined, // CF
  initial_condition_box_date: undefined, // CG
  motor_trademark: undefined, // CH
  manufacture_year: undefined, // CI
  class: undefined, // CJ
  reefer_tecnologia: undefined, // CK
  current_pti_status: undefined, // CL
  current_box_status: undefined, // CM
  depot_status: undefined, // CN
  depot_status_pti: undefined, // CO
  fecha_reparacion_pti: undefined, // CP
  depot_status_box: undefined, // CQ
  fecha_reparacion_box: undefined, // CR
  preparado_cot: undefined, // CS
  fecha_pre_cot: undefined, // CT
  leak_test: undefined, // CY
  fecha_leak_test: undefined, // CV
  preparado_coa: undefined, // CW
  doble_tecnologia: undefined, // CX
  cnt_lavado: undefined, // CY
  fecha_de_lavado: undefined, // CZ
  obs: undefined, // DA
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
  discharge_bl: undefined, // CU
  discharge_date: undefined, // CV
  initial_motor_condition: undefined, // CW
  initial_motor_condition_date: undefined, // CX
  initial_box_condition: undefined, // CY
  initial_box_condition_date: undefined, // CZ
  current_pti_status: undefined, // DA
  current_box_status: undefined, // DB
  depot_status: undefined, // DC
  depot_zone: undefined, // DD
  depot_status_pti: undefined, // DE
  fecha_reparacion_pti: undefined, // DF
  depot_status_box: undefined, // DG
  fecha_reparacion_box: undefined, // DH
  leak_test: undefined, // DI
  leak_test_date: undefined, // DJ
  preparadas_cot: undefined, // DK
  fecha_prueba_cot: undefined, // DL
  doble_tecnologia: undefined, // DM
  preparadas_coa: undefined, // DN
  fecha_preparadas_coa: undefined, // DO
  cnt_lavado: undefined, // DP
  fecha_lavado: undefined, // DQ
  observacion: undefined, // DR
};

export const unitMaeHeader = Object.keys(unitMaeExample);

export const templateOptions: TemplateOption[] = [
  { value: "BK", label: "Booking" },
  { value: "BL", label: "Bill of Lading" },
  { value: "U", label: "Unit" },
  { value: "C", label: "Usuarios" },
  { value: "TD", label: "Conductores" },
];

export const headerMap: Record<string, string[]> = {
  "Stock MSC": unitMscHeader,
  "Stock ONE": unitOneHeader,
  "Stock CMA": unitCmaHeader,
  "Stock SEABOARD": unitSmlHeader,
  default: unitHeaders,
};

const userExample: UserExcel = {
  user_id: undefined,
  clave: undefined,
  ruc: undefined,
  dni: undefined,
  apellidos: undefined,
  nombres: undefined,
  correo: undefined,
  tipo_usuario: undefined,
  rol1: undefined,
  rol2: undefined,
  rol3: undefined,
  rol4: undefined,
  rol5: undefined,
  rol6: undefined,
  rol7: undefined,
};
export const userHeaders = Object.keys(userExample);

const truckDriverExample: TruckDriverExcel = {
  name: undefined,
  card_id: undefined,
  license: undefined,
  callup_id: undefined,
  license_state: undefined,
  status: undefined,
  document_type: undefined,
  internal: undefined,
  life_cycle_state: undefined,
};
export const truckDriverHeaders = Object.keys(truckDriverExample);
