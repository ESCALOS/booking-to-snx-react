import { Oog } from "@types/oog";
import { Reefer } from "@types/reefer";

export interface Item {
  qty?: string; // Cantidad del booking
  equipment_type?: string; // Tipo de equipo
  tally_limit?: string; // Igual que qty
  eq_grade?: string; // Tecnología del contenedor
  gross_weight?: string; // Peso bruto
  commodity_id?: string; // Codigo de producto
  receive_limit?: string; // Igual que qty
  reefer?: Reefer; // Reefer
  oog?: Oog; // Oog
}
