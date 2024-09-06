import type { Metadata } from "next";
import { robotoMono } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emotion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>{children}</body>
    </html>
  );
}
