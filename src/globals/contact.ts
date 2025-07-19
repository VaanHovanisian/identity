import { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: 'contact',
  fields: [
    {
      name: "links",
      type: "array",
      required: true,
      fields: [
        {
          name: "icon",
          type: "upload",
          required: true,
          relationTo: "media",
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ]
    },
    {
      name: 'socilal-links',
      type: 'array',
      required: true,
      fields: [
        {
          name: "icon",
          type: "upload",
          required: true,
          relationTo: "media",
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ]
    }
  ],
}
