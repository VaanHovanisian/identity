import { GlobalConfig } from "payload";

export const Footer:GlobalConfig = {
  slug: 'footer',
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
      name: 'first-text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'last-text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'button-text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'bottom-text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: "himnadram-links",
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
      name: "socilal-links",
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
    }
  ],
}
