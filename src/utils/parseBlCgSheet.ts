import { blCgHeaders, blItemCgHeaders, goodsBlCgHeaders } from "constants";
import {
  BillOfLadingCargaGeneral,
  BillOfLadingCargaGeneralExcel,
  BillOfLadingItemCargaGeneralExcel,
  GoodsBlCargaGeneralExcel,
} from "interfaces/billOfLadingCargaGeneral";
import * as XLSX from "xlsx";

export function parseBlCgSheet(
  workbook: XLSX.WorkBook
): BillOfLadingCargaGeneral[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const worksheetItems = workbook.Sheets[workbook.SheetNames[1]];
  const worksheetGoods = workbook.Sheets[workbook.SheetNames[2]];

  const rows = XLSX.utils.sheet_to_json<BillOfLadingCargaGeneralExcel>(
    worksheet,
    {
      header: blCgHeaders,
      raw: false,
      range: 3,
    }
  );

  const rowsItems = XLSX.utils.sheet_to_json<BillOfLadingItemCargaGeneralExcel>(
    worksheetItems,
    {
      header: blItemCgHeaders,
      raw: false,
      range: 3,
    }
  );

  const rowsGoods = XLSX.utils.sheet_to_json<GoodsBlCargaGeneralExcel>(
    worksheetGoods,
    {
      header: goodsBlCgHeaders,
      raw: false,
      range: 1,
    }
  );

  // Agrupar items por bl_number
  const itemsMap = new Map<string, BillOfLadingItemCargaGeneralExcel[]>();
  rowsItems.forEach((item) => {
    const key = item.bl_number;
    if (!itemsMap.has(key)) {
      itemsMap.set(key, []);
    }
    itemsMap.get(key)?.push(item);
  });

  // Agrupar goods por nbr_bl
  const goodsBlMap = new Map<string, GoodsBlCargaGeneralExcel[]>();
  rowsGoods.forEach((item) => {
    const key = item.nbr_bl;
    if (!goodsBlMap.has(key)) {
      goodsBlMap.set(key, []);
    }
    goodsBlMap.get(key)?.push(item);
  });

  // Mapear a BillOfLadingCargaGeneral
  const billsOfLading: BillOfLadingCargaGeneral[] = rows.map((row) => {
    const blNumber = row.bl_number;

    // Mapear items del Excel a la interfaz
    const items =
      itemsMap.get(blNumber)?.map((item) => ({
        nbr: item.item_number || "",
        is_bulk: item.bulk === "SI" ? "Y" : "N",
        piece_is_bulk: "N",
        quantity: item.item_quantity || "",
        commodity_id: item.commodity || "",
        bulk_unit: item.bulk_units || "",
        weight_total_kg: item.item_total_weigth_kg || "",
        bl_item_is_ib_to_ob_move_direct: "N",
      })) || [];

    // Mapear goods del Excel a la interfaz
    const goods_bl =
      goodsBlMap.get(blNumber)?.map((good) => ({
        unit_id: good.vin_chassis || "",
      })) || [];

    const type =
      row.original_bl_number && row.bl_number !== row.original_bl_number
        ? "HOUSE"
        : "MASTER";

    return {
      nbr: row.bl_number, // Mapeo de bl_number a nbr
      category: row.category,
      line: "GCP",
      shipper_id: row.shipper,
      consignee_id: row.consignee,
      carrier_visit: row.manifiesto,
      pol: row.puerto_de_carga,
      pod_1: row.puerto_de_descarga,
      agent: undefined, // No está en el Excel
      type,
      original_bl_nbr: type === "HOUSE" ? row.original_bl_number : undefined,
      items,
      goods_bl,
      bl_flex: {
        bl_flex_string_03: row.numero_de_detalle,
        bl_flex_string_04:
          row.codigo_de_deposito === "9998" ? "OTRO" : row.codigo_de_deposito,
        bl_flex_string_05: row.bultos_manifestados,
        bl_flex_string_06: row.peso_total_manifestado,
      },
    };
  });

  return billsOfLading;
}
