import { Position } from "interfaces/unit/position";

export interface StorageUnit {
  id: string;
  category: string;
  transit_state: string;
  position: Position;
  storage: {
    storage_last_free_day: string;
  };
}
