import type { CollectionConfig } from "payload";

export const Tabs: CollectionConfig = {
  slug: "map",
  fields: [
    {
      type: "group", // required
      fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "groups",
              type: "group",
              fields: [
                {
                  name: "provinceName",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "number-of-monuments",
                  type: "number",
                  required: true,
                },
                {
                  name:"monuments-text",
                  type:"text",
                  required:true,
                  localized:true
                },
                {
                  name: "Area",
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
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                    name: "videoPosts",
                    type: "relationship",
                    relationTo: "videoPosts",
                    hasMany: true,
                    required: true
                },
                {
                  name: "button-text",
                  type: "text",
                  required: true,
                  localized: true,
                }
              ],
              required: true,
            },
      ],
    },
  ],
};
