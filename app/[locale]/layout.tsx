import type { Metadata } from "next";
import { domAnimation, LazyMotion } from "motion/react"
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from 'next/font/google'
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { getLocale } from "next-intl/server";
import Head from "next/head";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

import { Playfair_Display } from 'next/font/google';


const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Consultanță juridică online în Moldova.",
  description: "JuristOnline.md – răspunsuri legale rapide, sigure și la preț concret.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <Head>
       <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <LazyMotion features={domAnimation}>
          <NextIntlClientProvider >
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
