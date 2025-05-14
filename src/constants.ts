import { BlExcel } from "interfaces/billOfLafing";
import { BookingExcel } from "interfaces/booking";
import { UnitExcel } from "interfaces/unit";
import { TemplateOption } from "types";

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

export const templateOptions: TemplateOption[] = [
  { value: "BK", label: "Booking" },
  { value: "BL", label: "Bill of Lading" },
  { value: "U", label: "Unit" },
];
