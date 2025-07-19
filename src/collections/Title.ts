import type { CollectionConfig } from "payload";

export const Title: CollectionConfig = {
  slug: "title",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};
