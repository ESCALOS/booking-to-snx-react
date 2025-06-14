import { Role } from "./role";

export interface Client {
  id?: string; // User ID
  authentication_method?: string; // Authentication method
  password?: string; // Password
  first_name?: string; // First name
  last_name?: string; // Last name
  operator?: string; // Operator
  complex?: string; // Complex
  facility?: string; // Facility
  yard?: string; // Yard
  e_mail?: string; // Email
  telephone?: string; // Telephone
  fax?: string; // Fax
  biz_group?: string; // Business group
  active?: string; // Active status
  my_list_choice?: string; // My list choice
  list_view_auto_refresh?: string; // List view auto refresh
  roles?: Role[]; // Roles
}
