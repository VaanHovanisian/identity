import type { CollectionConfig } from "payload";

export const Updates: CollectionConfig = {
  slug: "updates",
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
    {
      name: "aboutUpdate",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "video",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
  ],
};
