export interface BookingExcel {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pod_1?: string; // Puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  carrier_id?: string; // Número de manifiesto
  item_qty?: string; // Cantidad
  item_equipment_type?: string; // Iso de contenedor
  item_eq_grade?: string; // Tecnología del contenedor
  item_gross_weight?: string; // Peso bruto
  item_commodity_id?: string; // Codigo de producto
  reefer_temp_reqd_c?: string; // Temperatura requerida
  reefer_humidity_pct?: string; // Humedad
  reefer_vent_required_value?: string; // Ventilación requerida
  reefer_vent_required_unit?: string; // Unidad de ventilación requerida
  reefer_co2_pct?: string; // CO2 en el contenedor
  reefer_o2_pct?: string; // O2 en el contenedor
}
