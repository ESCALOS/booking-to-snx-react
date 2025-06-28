export interface TruckDriver {
  name?: string;
  card_id?: string;
  card_expiration?: string;
  license_nbr?: string;
  bat_nbr?: string; // CALLUP ID
  license_state?: string;
  suspended?: string; // DATE OF SUSPENSION
  status?: string;
  flex_1?: string; // Document Type (DNI - CE)
  life_cycle_state?: string;
}
