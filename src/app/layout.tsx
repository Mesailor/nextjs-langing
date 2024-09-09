import type { Metadata } from "next";
import { radiotechnika, robotoMono } from "./_fonts/fonts";
import "./globals.css";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Emotion Landing Copy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth scroll-mt-80" lang="en">
      <body
        className={`${robotoMono.className} ${radiotechnika.variable} flex flex-col justify-between`}
      >
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
