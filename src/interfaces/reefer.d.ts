export interface Reefer {
  temp_reqd_c?: string; // Temperatura requerida
  temp_min_c?: string; // Temperatura minima
  temp_max_c?: string; // Temperatura maxima
  temp_display_unit?: string; // Unidad de temperatura mostrada
  humidity_pct?: string; // Humedad
  vent_required_value?: string; // Ventilación requerida
  vent_required_unit?: string; // Unidad de ventilación requerida
  co2_pct?: string; // CO2 en el contenedor
  o2_pct?: string; // O2 en el contenedor
  extended_time_monitors?: string;
  is_power?: string;
  wanted_is_power?: string;
  is_alarm_on?: string;
}
