import type { CollectionConfig } from "payload";

export const MostViewedTitle: CollectionConfig = {
  slug: "most-viewed-title",
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
