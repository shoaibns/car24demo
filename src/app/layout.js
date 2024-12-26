import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Providers from "@/context/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car24 - The Best Platform for Buying and Selling Cars",
  description: "Join Car24 today to buy or sell your car hassle-free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Default Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* OpenGraph Metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://example.com/path/to/og-image.jpg"
        />
        <meta property="og:url" content="https://www.car24.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://example.com/path/to/og-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
