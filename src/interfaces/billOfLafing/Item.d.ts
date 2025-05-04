export interface Item {
  nbr?: string; // Booking
  is_bulk?: string; // Si es bulk
  piece_is_bulk?: string; // Si es bulk
  quantity?: string; // Cantidad
  commodity_id?: string; // Codigo de producto
  package_weight_kg?: string; // Peso bruto
  weight_total_kg?: string; // Peso total
  bl_item_is_ib_to_ob_move_direct?: string; // N por defecto
}
