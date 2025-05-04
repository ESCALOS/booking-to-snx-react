import { Booking } from "interfaces/booking";
import { XmlInput } from "./objectToXmlTag";
import { Equipment, Unit } from "interfaces/unit";
import { BillOfLading } from "interfaces/billOfLafing";

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
  equipment: unit.equipment ? { ...unit.equipment } : undefined,
  position: unit.position ? { ...unit.position } : undefined,
  seals: unit.seals ? { ...unit.seals } : undefined,
  reefer: unit.reefer ? { ...unit.reefer } : undefined,
  unit_etc: unit.unit_etc ? { ...unit.unit_etc } : undefined,
  ufv_flex: unit.ufv_flex ? { ...unit.ufv_flex } : undefined,
});

export const billOfLadingXml = (bill_of_lading: BillOfLading): XmlInput => ({
  items: bill_of_lading.items?.map((item) => ({
    ...item,
  })),
  goods_bl: bill_of_lading.goods_bl
    ? { ...bill_of_lading.goods_bl }
    : undefined,
});

export const unitEquipmentToXml = (equipment: Equipment): XmlInput => ({
  eqid: equipment.eqid,
  type: equipment.type,
  class: equipment.class,
  tank_rails: equipment.tank_rails,
  life_cycle_state: equipment.life_cycle_state,
  role: equipment.role,
});
