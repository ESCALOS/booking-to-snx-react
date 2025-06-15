import { userHeaders } from "constants";
import { User } from "interfaces/user/user";
import { UserExcel } from "interfaces/user/userExcel";
import * as XLSX from "xlsx";

export function parseUserSheets(workbook: XLSX.WorkBook): User[] {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json<UserExcel>(worksheet, {
    header: userHeaders,
    raw: false,
    range: 1,
  });

  return jsonData.map((row) => {
    const roles = [];

    if (row.rol1) roles.push({ name: row.rol1 });
    if (row.rol2) roles.push({ name: row.rol2 });
    if (row.rol3) roles.push({ name: row.rol3 });
    if (row.rol4) roles.push({ name: row.rol4 });
    if (row.rol5) roles.push({ name: row.rol5 });
    if (row.rol6) roles.push({ name: row.rol6 });
    if (row.rol7) roles.push({ name: row.rol7 });

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
      horizon_days: "360",
      active: "Y",
      my_list_choice: row.tipo_usuario || "BIZGROUP",
      list_view_auto_refresh: "N",
      roles: roles.length > 0 ? roles : undefined,
    };
  });
}
