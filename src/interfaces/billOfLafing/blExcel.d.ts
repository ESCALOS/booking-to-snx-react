export interface BlExcel {
  nbr?: string; // Booking
  category?: string; // Categoría
  line?: string; // Línea naviera
  shipper_id?: string; // RUC Shipper
  consignee_id?: string; // Número de manifiesto
  carrier_visit?: string; // Fecha de visita
  released_quantity?: string; // Cantidad total
  entered_quantity?: string; // Cantidad total
  bl_is_ib_to_ob_move_direct?: string; // N por defecto

  // Ítem (contenedor)
  item_nbr?: string; // Booking (del ítem)
  item_is_bulk?: string; // Si es bulk
  item_piece_is_bulk?: string; // Si es bulk
  item_quantity?: string; // Cantidad
  item_commodity_id?: string; // Código de producto
  item_package_weight_kg?: string; // Peso bruto
  item_weight_total_kg?: string; // Peso total
  item_bl_item_is_ib_to_ob_move_direct?: string; // N por defecto

  // Goods BL
  goods_unit_id?: string; // Número de manifiesto
}
