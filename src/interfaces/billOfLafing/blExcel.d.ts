export interface BlExcel {
  carrier_visit?: string; // Visit Vessel
  nbr?: string; // Número de bill of lading
  type?: string; // Tipo de bill of lading
  original_bl_nbr?: string; // Número de bill of lading padre
  category?: string; // Categoría
  line?: string; // Línea naviera
  shipper_id?: string; // RUC Shipper
  consignee_id?: string; // Número de manifiesto

  // Ítem (contenedor)
  item_nbr?: string; // Booking (del ítem)
  item_is_bulk?: string; // Si es bulk
  item_quantity?: string; // Cantidad
  item_commodity_id?: string; // Código de producto
  item_weight_total_kg?: string; // Peso total
}
