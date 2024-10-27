import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devs for charity",
  description: "write code; help people;",
  openGraph: {
    images: [
      {
        url: "https://devsforcharity.com/devs_for_charity_ogimg.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "devs for charity",
    description: "write code; help people;",
    creator: "@ScottPlusPlus",
    images: "https://devsforcharity.com/devs_for_charity_ogimg.jpg",
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
