import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: 'header',

  fields: [
    {
      name: "logo",
      type: "group",
      required: true,
      fields: [
        {
          name: "logo-image",
          type: "upload",
          required: true,
          relationTo: "media",
        },
        {
          name: "logo-text",
          type: "text",
          required: true,
        },
      ]
    },

    {
      name: "tesadaran-links",
      type: "array",
      required: true,
      fields: [
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
        name: "button",
        type: "group",
        required: true,
        fields: [
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
