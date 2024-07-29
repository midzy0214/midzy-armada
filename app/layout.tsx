import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Midzy Armada Freelance Makeup Artist",
//   description: "Midzy Armada is a freelance makeup artist, specializing in makeup, hair, eyebrows, and eyelashes",
//   keywords: "hair, makeup, midzy, armada, freelance, artist, special, beauty, aesthetic, professional, warm, inviting, "
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "Midzy Armada Freelance Makeup Artist";
  const description =
    "Midzy Armada is a freelance makeup artist, specializing in makeup, hair, eyebrows, and eyelashes";
  const keywords =
    "hair, makeup, midzy, armada, freelance, artist, special, beauty, aesthetic, professional, warm, inviting, wedding, wedding makeup artisit,";
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
