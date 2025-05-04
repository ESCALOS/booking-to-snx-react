import { EquipmentReefer } from "./equipmentReefer";
import { Ownership } from "./ownership";
import { Physical } from "./physical";

export interface Equipment {
  eqid?: string; // Equipo
  type?: string; // Tipo de equipo
  class?: string; // Clase
  tank_rails?: string; // Cantidad de tanque
  life_cycle_state?: string; // Estado de vida del equipo
  role?: string; // Rol
  physical?: Physical; // Físico
  ownership?: Ownership; // Propiedad
  reefer?: EquipmentReefer; // Reefer
}
