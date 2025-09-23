import { blHeaders, goodsBlHeaders } from "constants";
import { BillOfLading, BlExcel, GoodsBl, Item } from "interfaces/billOfLafing";
import { GoodsBlExcel } from "interfaces/billOfLafing/goodsBlExcel";
import * as XLSX from "xlsx";

export function parseBlSheet(workbook: XLSX.WorkBook): BillOfLading[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const worksheetGoods = workbook.Sheets[workbook.SheetNames[1]];

  const rows = XLSX.utils.sheet_to_json<BlExcel>(worksheet, {
    header: blHeaders,
    raw: false,
    range: 1,
  });

  const rowsGoods = XLSX.utils.sheet_to_json<GoodsBlExcel>(worksheetGoods, {
    header: goodsBlHeaders,
    raw: false,
    range: 1,
  });

  // Mapear los goods_bl por bl_nbr
  const goodsMap = new Map<string, GoodsBl[]>();

  rowsGoods.forEach((row) => {
    const blNbr = row.bl_nbr?.toString().trim() || ""; // Asumiendo que 'bl_nbr' es la propiedad que se utiliza en worksheetGoods
    const unit: GoodsBl = {
      unit_id: row.unit_id?.toString().trim() || "",
    };

    if (goodsMap.has(blNbr)) {
      goodsMap.get(blNbr)?.push(unit);
    } else {
      goodsMap.set(blNbr, [unit]);
    }
  });

  const blMap = new Map<string, BillOfLading>();

  rows.forEach((row) => {
    const nbr = row.nbr?.toString().trim() || "";
    const item: Item = {
      nbr: row.item_nbr?.toString().trim() || undefined,
      is_bulk: row.item_is_bulk?.toString().trim() || undefined,
      piece_is_bulk: "N",
      quantity: row.item_quantity?.toString().trim() || undefined,
      commodity_id: row.item_commodity_id?.toString().trim() || undefined,
      weight_total_kg: row.item_weight_total_kg?.toString().trim() || undefined,
      bl_item_is_ib_to_ob_move_direct: "N",
    };

    const existingBl = blMap.get(row.nbr?.toString().trim() || "");

    // Agregar items al Bill of Lading existente
    if (existingBl) {
      existingBl.items?.push(item);
    } else {
      const bl: BillOfLading = {
        nbr: row.nbr?.toString().trim() || undefined,
        type: row.original_bl_nbr ? "HOUSE" : "MASTER",
        original_bl_nbr: row.original_bl_nbr?.toString().trim() || undefined,
        category: row.category?.toString().trim() || undefined,
        line: row.line?.toString().trim() || undefined,
        shipper_id: row.shipper_id?.toString().trim() || undefined,
        consignee_id: row.consignee_id?.toString().trim() || undefined,
        carrier_visit: row.carrier_visit?.toString().trim() || undefined,
        bl_is_ib_to_ob_move_direct: "N",
        items: row.item_commodity_id ? [item] : undefined,
        goods_bl: goodsMap.get(nbr) || [], // Asignar goods_bl a partir del mapa
      };
      blMap.set(nbr, bl);
    }
  });

  return Array.from(blMap.values());
}
