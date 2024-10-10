import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["system-ui", "Roboto"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
  fallback: ["system-ui", "Roboto"],
});

export const metadata: Metadata = {
  title: "Boldo",
  description: "Save time by building  fast with Boldo Template ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope} ${openSans} antialiased`}>{children}</body>
    </html>
  );
}
