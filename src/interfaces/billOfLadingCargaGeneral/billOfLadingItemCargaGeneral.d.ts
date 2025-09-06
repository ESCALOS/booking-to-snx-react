export interface BillOfLadingItemCargaGeneral {
  nbr: string; // Número de item de bill of lading
  is_bulk?: string; // Si es bulk (Y/N)
  piece_is_bulk?: string; // Si la pieza es bulk (Y/N)
  quantity?: string; // Cantidad
  commodity_id?: string; // Descripción de la mercancía
  bulk_unit?: string; // Unidades bulk
  weight_total_kg?: string; // Peso total
  bl_item_is_ib_to_ob_move_direct?: string; // N por defecto
}
