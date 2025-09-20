import { NonMoveHistory } from "interfaces/nonMoveHistory";
import { Contents } from "interfaces/unit/contents";
import { Equipment } from "interfaces/unit/equipment";
import { Position } from "interfaces/unit/position";
import { Routing } from "interfaces/unit/routing";
import { UfvFlex } from "interfaces/unit/ufvFlex";
import { UnitEtc } from "interfaces/unit/unitEtc";
import { UnitFlex } from "interfaces/unit/unitFlex";

export interface UnitCargaGeneral {
  id: string;
  category?: string;
  restow?: string;
  transit_state?: string;
  freight_kind?: string;
  line?: string;
  unique_key?: string;
  is_verifies_yard_pos?: string;
  is_stowplan_posted?: string;
  equipment: Equipment;
  position: Position;
  routing?: Routing;
  contents?: Contents;
  unit_etc?: UnitEtc;
  unit_flex?: UnitFlex;
  ufv_flex?: UfvFlex;
  non_move_history?: NonMoveHistory;
}
