export interface BillOfLadingItemCargaGeneralExcel {
  bl_number: string; // Número de bill of lading
  item_number?: string; // Número de ítem
  commodity?: string; // Descripción de la mercancía
  bulk?: string; // Si es bulk (SI/NO)
  bulk_units?: string; // Unidades bulk
  item_quantity?: string; // Cantidad
  item_total_weigth_kg?: string; // Peso total
  dam?: string; // DAM
  codigo_de_deposito?: string; // Código de depósito
  almacen_simple?: string; // Almacén simple (SI/NO)
}
