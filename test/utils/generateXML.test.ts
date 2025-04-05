import { describe, it, expect } from "vitest";
import { generateXML } from "../../src/utils";

describe("generateXML", () => {
  it("genera XML válido con un booking básico", () => {
    const bookings = [
      {
        nbr: "250680531",
        line: "MAE",
        pol: "PEPIO",
        pol_name: "Peru",
        pod_1: "PABLB",
        pod_1_name: "Panama",
        eq_status: "FCL",
        pod_optional: "PABLB",
        shipper_id: "20604583552",
        shipper_name: "NECOVEX S.A.C.",
        created_by: "c.ortiz",
        created_date: "2025-04-02T16:06:41",
        modified_by: "c.ortiz",
        modified_date: "2025-04-02T16:11:25",
        quantity: 1,
        carrier: {
          id: "2024-576",
          facility: "PDP",
          mode: "VESSEL",
        },
        items: [
          {
            qty: 1,
            eq_size: "NOM40",
            eq_iso_group: "RE",
            eq_height: "NOM96",
            eq_iso_group_description: "Refrigerated container",
            equipment_type: "45R1",
            equip_type_description: "40ft hi-cube reefer",
            seq_nbr: "0",
            tally_limit: "1",
            eq_material: "UNKNOWN",
            eq_grade: "COT",
            gross_weight: 24660.0,
            commodity_id: "GRAPES",
            commodity_name: "Grapes",
            receive_limit: 1,
            remarks: "0",
            created_by: "c.ortiz",
            created_date: "2025-04-02T16:10:02",
            reefer: {
              temp_reqd_c: -0.7,
              humidity_pct: 0,
              vent_required_value: 0,
              vent_required_unit: "PERCENTAGE",
              co2_pct: 0,
              o2_pct: 0,
            },
            oog: {
              is_oog: false,
              oog_back_cm: "0",
              oog_front_cm: "0",
              oog_left_cm: "0",
              oog_right_cm: "0",
              oog_top_cm: "0",
            },
          },
        ],
      },
    ];

    const xml = generateXML(bookings);

    expect(xml).toContain("<argo:snx"); // verifica que el XML comienza bien
    expect(xml).toContain('booking nbr="250680531"');
    expect(xml).toContain('<reefer temp-reqd-c="-0.7"');
    expect(xml).toContain('<oog is-oog="N"');
    expect(xml).toMatchSnapshot(); // opcional: guarda un snapshot del resultado
  });
});
