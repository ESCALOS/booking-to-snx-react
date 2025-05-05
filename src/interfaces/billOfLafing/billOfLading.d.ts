import { GoodsBl } from "./goodsBl";
import { Item } from "./Item";

export interface BillOfLading {
  nbr?: string; // Booking
  category?: string; // Categoría
  line?: string; // Línea naviera
  type?: string; // Tipo de transporte
  original_bl_nbr?: string; // Número de bill of lading padre
  shipper_id?: string; // RUC Shipper
  consignee_id?: string; // Número de manifiesto
  carrier_visit?: string; // Fecha de visita
  bl_is_ib_to_ob_move_direct?: string; // N por defecto
  items?: Item[]; // Contenedores
  goods_bl?: GoodsBl; // Contenedores
}
