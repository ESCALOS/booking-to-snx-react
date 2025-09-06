import { BillOfLadingFlexCargaGeneral } from "./billOfLadingFlexCargaGeneral";
import { BillOfLadingItemCargaGeneral } from "./billOfLadingItemCargaGeneral.d";
import { GoodsBlCargaGeneral } from "./goodsBlCargaGeneral";
export interface BillOfLadingCargaGeneral {
  nbr: string; // Número de bill of lading
  category?: string; // Categoría
  line?: string; // Línea naviera
  shipper_id?: string; // Exportador
  consignee_id?: string; // Consignatario
  carrier_visit?: string; // Número de manifiesto
  pol?: string; // Puerto de carga
  pod_1?: string; // Puerto de descarga 1
  agent?: string; // Agente
  type?: string; // Tipo de bill of lading (MASTER/HOUSE)
  original_bl_nbr?: string; // Número de bill of lading original
  items?: BillOfLadingItemCargaGeneral[]; // Ítems
  goods_bl?: GoodsBlCargaGeneral[]; // Merchandise
  bl_flex?: BillOfLadingFlexCargaGeneral; // Información adicional flexible
}
