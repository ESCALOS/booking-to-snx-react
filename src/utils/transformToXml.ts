import { Booking } from "interfaces/booking";
import { XmlInput } from "./objectToXmlTag";
import { Equipment, Unit } from "interfaces/unit";
import { BillOfLading } from "interfaces/billOfLafing";
import { Client } from "interfaces/client/client";

export const bookingToXml = (booking: Booking): XmlInput => ({
  nbr: booking.nbr,
  line: booking.line,
  pol: booking.pol,
  pod_1: booking.pod_1,
  eq_status: booking.eq_status,
  pod_optional: booking.pod_optional,
  shipper_id: booking.shipper_id,
  prevent_type_subst: "N",
  category: "EXPORT",
  carrier: booking.carrier ? { ...booking.carrier } : undefined,
  items: booking.items?.map((item) => ({
    ...item,
    reefer: item.reefer ? { ...item.reefer } : undefined,
    oog: {
      is_oog: "N",
      oog_back_cm: "0",
      oog_front_cm: "0",
      oog_left_cm: "0",
      oog_right_cm: "0",
      oog_top_cm: "0",
    },
  })),
});

export const unitToXml = (unit: Unit): XmlInput => ({
  id: unit.id,
  category: unit.category,
  restow: unit.restow,
  transit_state: unit.transit_state,
  freight_kind: unit.freight_kind,
  line: unit.line,
  unique_key: unit.id,
  grade: unit.grade,
  agent1: unit.agent1,
  agent2: unit.agent2,
  is_ib_to_ob_move_direct: unit.is_ib_to_ob_move_direct,
  is_verified_yard_pos: unit.is_verified_yard_pos,
  is_stowplan_posted: unit.is_stowplan_posted,
  equipment: unit.equipment ? { ...equipmentToXml(unit.equipment) } : undefined,
  position: unit.position ? { ...unit.position } : undefined,
  seals: unit.seals ? { ...unit.seals } : undefined,
  routing: {
    pol: unit.routing?.pol,
    pod_1: unit.routing?.pod_1,
    carrier: unit.routing?.carrier?.map((carrier) => ({
      id: carrier.id,
      direction: carrier.direction,
      qualifier: carrier.qualifier,
      mode: carrier.mode,
      facility: carrier.facility,
    })),
    group: unit.routing?.group,
  },
  reefer: unit.reefer ? { ...unit.reefer } : undefined,
  unit_etc: unit.unit_etc ? { ...unit.unit_etc } : undefined,
  unit_flex: unit.unit_flex ? { ...unit.unit_flex } : undefined,
  ufv_flex: unit.ufv_flex ? { ...unit.ufv_flex } : undefined,
  booking: unit.booking ? { ...unit.booking } : undefined,
});

export const billOfLadingXml = (bill_of_lading: BillOfLading): XmlInput => ({
  nbr: bill_of_lading.nbr,
  type: bill_of_lading.type,
  original_bl_nbr: bill_of_lading.original_bl_nbr,
  category: bill_of_lading.category,
  line: bill_of_lading.line,
  shipper_id: bill_of_lading.shipper_id,
  consignee_id: bill_of_lading.consignee_id,
  carrier_visit: bill_of_lading.carrier_visit,
  bl_is_ib_to_ob_move_direct: bill_of_lading.bl_is_ib_to_ob_move_direct,
  items: bill_of_lading.items?.map((item) => ({
    ...item,
  })),
  goods_bl: bill_of_lading.goods_bl?.map((goods_bl) => ({
    ...goods_bl,
  })),
});

const equipmentToXml = (equipment: Equipment): XmlInput => ({
  eqid: equipment.eqid,
  type: equipment.type,
  class: equipment.class,
  tank_rails: equipment.tank_rails,
  life_cycle_state: equipment.life_cycle_state,
  role: equipment.role,
  physical: equipment.physical ? { ...equipment.physical } : undefined,
  ownership: equipment.ownership ? { ...equipment.ownership } : undefined,
});

export const clientToXml = (client: Client): XmlInput => ({
  id: client.id,
  authentication_method: client.authentication_method,
  password: client.password,
  first_name: client.first_name,
  last_name: client.last_name,
  operator: client.operator,
  complex: client.complex,
  facility: client.facility,
  yard: client.yard,
  e_mail: client.e_mail,
  telephone: client.telephone,
  fax: client.fax,
  biz_group: client.biz_group,
  active: client.active,
  my_list_choice: client.my_list_choice,
  list_view_auto_refresh: client.list_view_auto_refresh,
  roles: client.roles?.map((role) => ({
    name: role.name,
  })),
});
