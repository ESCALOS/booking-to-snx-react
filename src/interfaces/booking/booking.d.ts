import { Carrier } from "interfaces/carrier";
import { Item } from "./Item";

export interface Booking {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pod_1?: string; // Puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  prevent_type_subst?: string; // Si es true es un oog
  category?: string; // Categoria
  carrier?: Carrier; // Empresa
  items?: Item[]; // Contenedores
}
