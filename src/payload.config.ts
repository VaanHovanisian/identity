// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { VideoPosts } from "./collections/VideoPosts";
import { Title } from "./collections/Title";
import { MostViewedTitle } from "./collections/MostViewedTitle";
import { AboutProvince } from "./collections/AboutProvince";
import { Updates } from "./collections/Updates";
import { Tabs } from "./collections/Tabs";
import Pages from "./collections/Pages";
import { Header } from "./globals/header";
import { Footer } from "./globals/footer";
import { Contact } from "./globals/contact";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  globals: [
   Header,
   Footer,
   Contact
  ],
  collections: [
    Users,
    Media,
    VideoPosts,
    Title,
    MostViewedTitle,
    AboutProvince,
    Updates,
    Tabs,
    Pages,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },      {
        label: "Russian",
        code: "ru",
      },
      {
        label: "Armenian",
        code: "hy",
        // opt-in to setting default text-alignment on Input fields to rtl (right-to-left)
        // when current locale is rtl
      },
    ],
    defaultLocale: "en", // required
    fallback: true, // defaults to true
  },
});
