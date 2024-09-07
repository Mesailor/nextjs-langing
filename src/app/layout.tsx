import type { Metadata } from "next";
import { radiotechnika, robotoMono } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emotion Landing Copy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} ${radiotechnika.variable}`}>
        {children}
      </body>
    </html>
  );
}
