export interface BookingTemplateExcel {
  nro?: string; // Número correlativo - A
  line?: string; // Línea naviera - B
  poo?: string; // Puerto de Origen - C
  pol?: string; // Puerto de Carga - D
  pod?: string; // Puerto de Descarga - E
  fds?: string; // Puerto de Destino - F
  booking?: string; // Número de Booking - G
  iso_code?: string; // Código ISO del contenedor - H
  size?: string; // Tamaño del contenedor - I
  kind?: string; // Tipo de contenedor - J
  qty?: string; // Cantidad de contenedores - K
  state?: string; // Estado del contenedor - L
  commodity?: string; // Código de producto - M
  tara?: string; // Peso tara del contenedor - N
  net_weight?: string; // Peso neto del contenedor - O
  gross_weight?: string; // Peso bruto del contenedor - P
  vgm?: string; // Peso verificado del contenedor - Q
  peso_verificado?: string; // Peso verificado - R
  imo1?: string; // IMO Clase 1 - S
  un1?: string; // UN Clase 1 - T
  imo2?: string; // IMO Clase 2 - U
  un2?: string; // UN Clase 2 - V
  imo3?: string; // IMO Clase 3 - W
  un3?: string; // UN Clase 3 - X
  imo4?: string; // IMO Clase 4 - Y
  un4?: string; // UN Clase 4 - Z
  olb?: string; // OLB (Over Length Box) - AA
  olf?: string; // OLF (Over Length Flag) - AB
  owl?: string; // OWL (Over Width Length) - AC
  owr?: string; // OWR (Over Width Flag) - AD
  oh?: string; // OH (Over Height) - AE
  temperature?: string; // Temperatura del contenedor - AF
  maximum_temperature?: string; // Temperatura máxima del contenedor - AG
  minimum_temperature?: string; // Temperatura mínima del contenedor - AH
  humidity?: string; // Humedad del contenedor - AI
  air_flow?: string; // Flujo de aire del contenedor - AJ
  oxygen?: string; // Oxígeno del contenedor - AK
  carbon_dioxide?: string; // Dióxido de carbono del contenedor - AL
  cliente?: string; // Cliente asociado - AM
  tecnologia?: string; // Tecnología del contenedor - AN
  manifiesto?: string; // Número de manifiesto - AO
}
