import localFont from "next/font/local";
import "../globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "@/lib/get-messages";

export const metadata: Metadata = {
  title: "ԻՆՔՆՈՒԹՅՈՒՆ",
};

const myFont = localFont({
  src: [
    {
      path: "../fonts/Montserrat-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Arm-Hmks-Bebas-Neue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={myFont.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
