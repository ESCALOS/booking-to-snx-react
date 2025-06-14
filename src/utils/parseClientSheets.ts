import { clientHeaders } from "constants";
import { Client } from "interfaces/client/client";
import { ClientExcel } from "interfaces/client/clientExcel";
import * as XLSX from "xlsx";

export function parseClientSheets(workbook: XLSX.WorkBook): Client[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<ClientExcel>(worksheet, {
    header: clientHeaders,
    raw: false,
    range: 1,
  });

  return jsonData.map((row) => {
    return {
      id: row.user_id || undefined,
      authentication_method: "INTERNAL",
      password: row.clave || "ABCabc12345678++",
      first_name: row.nombres || undefined,
      last_name: row.apellidos || undefined,
      operator: "PDP",
      complex: "PEPIO",
      facility: "PDP",
      yard: "PDP",
      e_mail: row.correo || undefined,
      telephone: "DNI",
      fax: row.dni || undefined,
      biz_group: row.ruc,
      active: "Y",
      my_list_choice: "BIZGROUP",
      list_view_auto_refresh: "N",
      roles: [
        {
          name: "N4CAP_Cliente",
        },
      ],
    };
  });
}
