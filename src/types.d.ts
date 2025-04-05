export interface Carrier {
  id?: string; // Número de manifiesto
  facility?: string; // Puerto PDP
  mode?: string; // "VESSEL" por defecto
}

export interface Reefer {
  temp_reqd_c?: number; // Temperatura requerida
  humidity_pct?: number; // Humedad
  vent_required_value?: number; // Ventilación requerida
  vent_required_unit?: string; // Unidad de ventilación requerida
  co2_pct?: number; // CO2 en el contenedor
  o2_pct?: number; // O2 en el contenedor
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
  qty?: number; // Cantidad del booking
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
  gross_weight?: number; // Peso bruto
  commodity_id?: string; // Codigo de producto
  commodity_name?: string; // Nombre del producto
  receive_limit?: number; // Valor por defecto 1
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
  pol_name?: string; // País del puerto de embarque
  pod_1?: string; // Puerto de descarga
  pod_1_name?: string; // País del puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  shipper_name?: string; // Razón social Shipper
  origin?: string; // Origen
  destination?: string; // Destino
  client_ref_no?: string; // Referencia del cliente
  stow_block?: string; // Bloque de estiba
  stuffing_location?: string; // Lugar de estufado
  ood?: string; // Valor por defecto N
  override_cutoff?: string; // Valor por defecto N
  hold_partials?: string; // Valor por defecto N
  prevent_type_subst?: string; // Valor por defecto N
  empty_pickup_location?: string; // Valor por defecto N
  full_return_location?: string; // Retorno de contenedor lleno
  category?: string; // EXPORT o domestic
  notes?: string; // Notas
  created_by?: string; // Usuario que creó el booking
  created_date?: string; // Fecha de creación
  modified_by?: string; // Usuario que modificó el booking
  modified_date?: string; // Fecha de modificación
  quantity?: number; // Cantidad
  carrier?: Carrier; // Empresa
  items?: Item[]; // Contenedores
}

// Excel

export interface BookingExcel {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pol_name?: string; // País del puerto de embarque
  pod_1?: string; // Puerto de descarga
  pod_1_name?: string; // País del puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  shipper_name?: string; // Razón social Shipper
  origin?: string; // Origen
  destination?: string; // Destino
  client_ref_no?: string; // Referencia del cliente
  stow_block?: string; // Bloque de estiba
  stuffing_location?: string; // Lugar de estufado
  ood?: string; // Valor por defecto N
  override_cutoff?: string; // Valor por defecto N
  hold_partials?: string; // Valor por defecto N
  prevent_type_subst?: string; // Valor por defecto N
  empty_pickup_location?: string; // Valor por defecto N
  full_return_location?: string; // Retorno de contenedor lleno
  category?: string; // EXPORT o domestic
  notes?: string; // Notas
  created_by?: string; // Usuario que creó el booking
  created_date?: string; // Fecha de creación
  modified_by?: string; // Usuario que modificó el booking
  modified_date?: string; // Fecha de modificación
  quantity?: number; // Cantidad
  carrier_id?: string; // Número de manifiesto
  carrier_facility?: string; // Puerto PDP
  carrier_mode?: string; // "VESSEL" por defecto
  item_qty?: number; // Cantidad del booking
  item_eq_size?: string; // Tamaño del contenedor
  item_eq_iso_group?: string; // Grupo de contenedor
  item_eq_height?: string; // Altura del contenedor
  item_eq_iso_group_description?: string; // Descripción del grupo de contenedor
  item_equipment_type?: string; // Tipo de equipo
  item_equip_type_description?: string; // Descripción del tipo de equipo
  item_seq_nbr?: string; // Prioridad
  item_tally_limit?: string; // Valor por defecto 1
  item_eq_material?: string; // Material del contenedor
  item_eq_grade?: string; // Tecnología del contenedor
  item_gross_weight?: number; // Peso bruto
  item_commodity_id?: string; // Codigo de producto
  item_commodity_name?: string; // Nombre del producto
  item_receive_limit?: number; // Valor por defecto 1
  item_remarks?: string; // Comentario
  item_created_by?: string; // Usuario que creó el booking
  item_created_date?: string; // Fecha de creación
  reefer_temp_reqd_c?: number; // Temperatura requerida
  reefer_humidity_pct?: number; // Humedad
  reefer_vent_required_value?: number; // Ventilación requerida
  reefer_vent_required_unit?: string; // Unidad de ventilación requerida
  reefer_co2_pct?: number; // CO2 en el contenedor
  reefer_o2_pct?: number; // O2 en el contenedor
  oog_is_oog?: string; // Si es true es un oog
  oog_oog_back_cm?: string; // Si es null no lo trae
  oog_oog_front_cm?: string;
  oog_oog_left_cm?: string;
  oog_oog_right_cm?: string;
  oog_oog_top_cm?: string;
}
// XML

export interface CarrierXml {
  id?: string; // Número de manifiesto
  facility?: string; // Puerto PDP
  mode?: string; // "VESSEL" por defecto
}

export interface ReeferXml {
  temp_reqd_c?: number; // Temperatura requerida
  humidity_pct?: number; // Humedad
  vent_required_value?: number; // Ventilación requerida
  vent_required_unit?: string; // Unidad de ventilación requerida
  co2_pct?: number; // CO2 en el contenedor
  o2_pct?: number; // O2 en el contenedor
}

export interface OogXml {
  is_oog?: string; // Si es true es un oog
  oog_back_cm?: string; // Si es null no lo trae
  oog_front_cm?: string;
  oog_left_cm?: string;
  oog_right_cm?: string;
  oog_top_cm?: string;
}

export interface ItemXml {
  qty?: number; // Cantidad del booking
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
  gross_weight?: number; // Peso bruto
  commodity_id?: string; // Codigo de producto
  commodity_name?: string; // Nombre del producto
  receive_limit: string | number; // Valor por defecto 1
  remarks?: string; // Comentario
  created_by?: string; // Usuario que creó el booking
  created_date?: string; // Fecha de creación
  reefer?: Reefer; // Reefer
  oog?: Oog; // Oog
}

export interface BookingXml {
  nbr?: string; // Booking
  line?: string; // Línea naviera
  pol?: string; // Puerto de embarque
  pol_name?: string; // País del puerto de embarque
  pod_1?: string; // Puerto de descarga
  pod_1_name?: string; // País del puerto de descarga
  eq_status?: string; // Estado del contenedor
  pod_optional?: string; // Puerto final
  shipper_id?: string; // RUC Shipper
  shipper_name?: string; // Razón social Shipper
  origin?: string; // Origen
  destination?: string; // Destino
  client_ref_no?: string; // Referencia del cliente
  stow_block?: string; // Bloque de estiba
  stuffing_location?: string; // Lugar de estufado
  ood?: string; // Valor por defecto N
  override_cutoff?: string; // Valor por defecto N
  hold_partials?: string; // Valor por defecto N
  prevent_type_subst?: string; // Valor por defecto N
  empty_pickup_location?: string; // Valor por defecto N
  full_return_location?: string; // Retorno de contenedor lleno
  category?: string; // EXPORT o domestic
  notes?: string; // Notas
  created_by?: string; // Usuario que creó el booking
  created_date?: string; // Fecha de creación
  modified_by?: string; // Usuario que modificó el booking
  modified_date?: string; // Fecha de modificación
  quantity: string | number; // Cantidad
  carrier?: Carrier; // Empresa
  items?: Item[]; // Contenedores
}
