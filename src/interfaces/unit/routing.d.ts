import { Carrier } from "./carrier";

export interface Routing {
  pol?: string;
  pod_1?: string;
  carrier?: Carrier[];
  group?: string; // Grupo de estado
}
