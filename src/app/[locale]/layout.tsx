import { Montserrat, Bebas_Neue, Oswald } from "next/font/google";
import "../globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "@/lib/get-messages";

export const metadata: Metadata = {
  title: "Identity",
};

const montserrat = Montserrat({
  variable: "--font-family",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--second-family",
  display: "swap",
  weight: "400",
});

const oswald = Oswald({
  variable: "--third-family",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html
      lang={locale}
      className={`${bebasNeue.variable} ${montserrat.variable} ${oswald.variable}`}
    >
      <body className={oswald.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
