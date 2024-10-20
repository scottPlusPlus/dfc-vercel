import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<💚/>",
  description: "we've got work to do",
  openGraph: {
    images: [
      {
        url: "https://sfplusplus.vercel.app/img/og_img.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "<💚/>",
    description: "we've got work to do",
    creator: "@ScottPlusPlus",
    images: "https://sfplusplus.vercel.app/img/og_img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
