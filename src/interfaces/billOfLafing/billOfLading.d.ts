import { GoodsBl } from "./goodsBl";
import { Item } from "./Item";

export interface BillOfLading {
  nbr?: string; // Booking
  category?: string; // Categoría
  line?: string; // Línea naviera
  shipper_id?: string; // RUC Shipper
  consignee_id?: string; // Número de manifiesto
  carrier_visit?: string; // Fecha de visita
  released_quantity?: string; // Cantidad total
  entered_quantity?: string; // Cantidad total
  bl_is_ib_to_ob_move_direct?: string; // N por defecto
  items?: Item[]; // Contenedores
  goods_bl?: GoodsBl; // Contenedores
}
