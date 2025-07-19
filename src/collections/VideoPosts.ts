import type { CollectionConfig } from "payload";

export const VideoPosts: CollectionConfig = {
  slug: "videoPosts",
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
      name: "address",
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

  ],
  labels: {
    singular: "Video Post",
    plural: "Video Posts",
  },
};
