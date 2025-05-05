import { BillOfLading, BlExcel, Item } from "interfaces/billOfLafing";
import { blHeaders } from "constants";
import * as XLSX from "xlsx";

export function parseBlSheet(worksheet: XLSX.WorkSheet): BillOfLading[] {
  const rows = XLSX.utils.sheet_to_json<BlExcel>(worksheet, {
    header: blHeaders,
    raw: false,
    range: 1,
  });

  const blMap = new Map<string, BillOfLading>();

  rows.forEach((row) => {
    const nbr = row.nbr || "";
    const item: Item = {
      nbr: row.item_nbr || undefined,
      is_bulk: row.item_is_bulk || undefined,
      piece_is_bulk: row.item_piece_is_bulk || undefined,
      quantity: row.item_quantity || undefined,
      commodity_id: row.item_commodity_id || undefined,
      weight_total_kg: row.item_weight_total_kg || undefined,
      bl_item_is_ib_to_ob_move_direct: "N",
    };

    const goods_bl = {
      unit_id: row.goods_unit_id || undefined,
    };

    const existingBl = blMap.get(row.nbr || "");

    if (existingBl) {
      existingBl.items?.push(item);
    } else {
      const bl: BillOfLading = {
        nbr: row.nbr || undefined,
        type: row.original_bl_nbr ? "HOUSE" : "MASTER",
        original_bl_nbr: row.original_bl_nbr || undefined,
        category: row.category || undefined,
        line: row.line || undefined,
        shipper_id: row.shipper_id || undefined,
        consignee_id: row.consignee_id || undefined,
        carrier_visit: row.carrier_visit || undefined,
        bl_is_ib_to_ob_move_direct: row.bl_is_ib_to_ob_move_direct || undefined,
        items: [item],
        goods_bl,
      };
      blMap.set(nbr, bl);
    }
  });

  return Array.from(blMap.values());
}
