/**
 * @fileoverview Pages collection configuration for Payload CMS
 * @module Pages
 */

import { CollectionConfig } from "payload";

/**
 * Pages collection configuration
 * Defines the structure and fields for pages in Payload CMS
 *
 * @type {CollectionConfig}
 * @property {string} slug - Unique identifier for the collection
 * @property {Array<Object>} fields - Field definitions for the collection
 * @property {Object} fields.title - Text field for page title
 * @property {Object} fields.slug - Text field for page URL slug
 * @property {Object} fields.layout - Blocks field for page layout components
 */
const Pages: CollectionConfig = {
  slug: "pages",
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "buttonText",
      type: "text",
    },
  ],
};

export default Pages;
