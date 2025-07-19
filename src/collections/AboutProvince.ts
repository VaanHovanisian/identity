import type { CollectionConfig } from "payload";

export const AboutProvince: CollectionConfig = {
  slug: "province-info",

  access: {
    read: () => true,
  },
  fields: [
    {
      name: "provinceName",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "monuments",
      type: "number",
      required: true,
    },
    {
      name: "area",
      type: "number",
      required: true,
    },
    {
      name: "population",
      type: "number",
      required: true,
    },
    {
      name: "cities",
      type: "number",
      required: true,
    },
    {
      name: "villages",
      type: "number",
      required: true,
    },
    {
      name: "about",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};
