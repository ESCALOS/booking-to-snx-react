export interface Carrier {
  id?: string; // Número de manifiesto
  facility?: string; // Puerto PDP
  mode?: string; // "VESSEL" por defecto
}

export interface Reefer {
  temp_reqd_c?: string; // Temperatura requerida
  humidity_pct?: string; // Humedad
  vent_required_value?: string; // Ventilación requerida
  vent_required_unit?: string; // Unidad de ventilación requerida
  co2_pct?: string; // CO2 en el contenedor
  o2_pct?: string; // O2 en el contenedor
}

export interface Oog {
  is_oog?: boolean; // Si es true es un oog
  oog_back_cm?: string; // Si es null no lo trae
  oog_front_cm?: string;
  oog_left_cm?: string;
  oog_right_cm?: string;
  oog_top_cm?: string;
}

export interface Item {
  qty?: string; // Cantidad del booking
  eq_size?: string; // Tamaño del contenedor
  eq_iso_group?: string; // Grupo de contenedor
  eq_height?: string; // Altura del contenedor
  eq_iso_group_description?: string; // Descripción del grupo de contenedor
  equipment_type?: string; // Tipo de equipo
  equip_type_description?: string; // Descripción del tipo de equipo
  seq_nbr?: string; // Prioridad
  tally_limit?: string; // Valor por defecto 1
  eq_material?: string; // Material del contenedor
  eq_grade?: string; // Tecnología del contenedor
  gross_weight?: string; // Peso bruto
  commodity_id?: string; // Codigo de producto
  commodity_name?: string; // Nombre del producto
  receive_limit?: string; // Valor por defecto 1
  remarks?: string; // Comentario
  created_by?: string; // Usuario que creó el booking
  created_date?: string; // Fecha de creación
  reefer?: Reefer; // Reefer
  oog?: Oog; // Oog
}

export interface Booking {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pod_1?: string; // Puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  quantity?: string; // Cantidad
  carrier?: Carrier; // Empresa
  items?: Item[]; // Contenedores
}

// Excel
export interface BookingExcel {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pod_1?: string; // Puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  quantity?: string; // Cantidad
  carrier_id?: string; // Número de manifiesto
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
// XML - Booking
export interface BookingXml {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pod_1?: string; // Puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  quantity?: string; // Cantidad
  carrier_id?: string; // Número de manifiesto
  item_qty?: string; // Igual a la cantidad
  equipment_type?: string; // Iso de contenedor
  item_tally_limit?: string; // Igual a la cantidad
  item_eq_grade?: string; // Tecnología del contenedor
  item_gross_weight?: string; // Peso bruto
  item_commodity_id?: string; // Codigo de producto
  item_receive_limit?: string; // Igual a la cantidad
  reefer_temp_reqd_c?: string; // Temperatura requerida
  reefer_humidity_pct?: string; // Humedad
  reefer_vent_required_value?: string; // Ventilación requerida
  reefer_vent_required_unit?: string; // Unidad de ventilación requerida
  reefer_co2_pct?: string; // CO2 en el contenedor
  reefer_o2_pct?: string; // O2 en el contenedor
  is_oog?: boolean; // Si es true es un oog
  oog_back_cm?: string; // Si es null no lo trae
  oog_front_cm?: string;
  oog_left_cm?: string;
  oog_right_cm?: string;
  oog_top_cm?: string;
}
