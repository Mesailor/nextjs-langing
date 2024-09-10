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
    <html className="sm:scroll-pt-16 scroll-pt-12 scroll-smooth" lang="en">
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
