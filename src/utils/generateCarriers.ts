/**
 * Generates a list of carriers based on the provided parameters.
 * @param {boolean} isExport - Indicates if the carriers are for export.
 * @param {string} [carrierId] - The carrier ID to be used for import carriers.
 * @returns {Carrier[]} - An array of Carrier objects.
 */

import { Carrier } from "interfaces/unit/carrier";

export function generateCarriers(
  isExport: boolean,
  carrierId?: string
): Carrier[] {
  return [
    {
      direction: "IB",
      qualifier: "DECLARED",
      facility: "PDP",
      mode: isExport ? "TRUCK" : "VESSEL",
      id: isExport ? undefined : carrierId,
    },
    {
      direction: "IB",
      qualifier: "ACTUAL",
      facility: "PDP",
      mode: isExport ? "TRUCK" : "VESSEL",
      id: isExport ? undefined : carrierId,
    },
    {
      direction: "OB",
      qualifier: "DECLARED",
      facility: "PDP",
      mode: isExport ? "VESSEL" : "UNKNOWN",
      id: isExport ? carrierId : undefined,
    },
    {
      direction: "OB",
      qualifier: "ACTUAL",
      facility: "PDP",
      mode: isExport ? "VESSEL" : "UNKNOWN",
      id: isExport ? carrierId : undefined,
    },
  ];
}
