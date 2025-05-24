import { Equipment } from "./equipment";
import { Seals } from "./seals";
import { UnitEtc } from "./unitEtc";
import { UfvFlex } from "./ufvFlex";
import { UnitFlex } from "./unitFlex";
import { Reefer } from "interfaces/reefer";
import { Position } from "./position";
import { Routing } from "./routing";
import { Booking } from "./booking";

export interface Unit {
  id?: string; // Número de manifiesto
  category?: string; // Categoría
  restow?: string; // Restow
  transit_state?: string; // Estado de transito
  freight_kind?: string; // Tipo de transporte
  line?: string; // Línea naviera
  unique_key?: string; // Clave única
  grade?: string; // Grado
  agent1?: string; // Agente 1
  agent2?: string; // Agente 2
  is_ib_to_ob_move_direct?: string;
  is_verified_yard_pos?: string;
  is_stowplan_posted?: string;
  equipment?: Equipment;
  position?: Position;
  routing?: Routing;
  seals?: Seals;
  reefer?: Reefer;
  unit_etc?: UnitEtc;
  unit_flex?: UnitFlex;
  ufv_flex?: UfvFlex;
  booking?: Booking;
}
