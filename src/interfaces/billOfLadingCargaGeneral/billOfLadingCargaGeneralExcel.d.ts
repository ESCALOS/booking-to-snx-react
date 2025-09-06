export interface BillOfLadingCargaGeneralExcel {
  bl_number: string; // Número de bill of lading
  category?: string; // Categoría
  manifiesto?: string; // Número de manifiesto
  puerto_de_descarga?: string; // Puerto de descarga
  puerto_de_carga?: string; // Puerto de carga
  shipper?: string; // Exportador
  consignee?: string; // Consignatario
  bl_type?: string; // Tipo de transporte
  original_bl_number?: string; // Número de bill of lading padre
  numero_de_detalle?: string; // Número de detalle
  codigo_de_deposito?: string; // Código de depósito
  peso_total_manifestado?: string; // Peso total manifestado
  bultos_manifestados?: string; // Bultos manifestados
  fecha_y_hora_de_ingreso_de_la_carga?: string; // Fecha y hora de ingreso de la carga
  fecha_y_hora_de_termino_operativo_de_la_nave?: string; // Fecha y hora de término operativo de la nave
}
