import type { Metadata } from "next";
import { radiotechnika, robotoMono } from "./_fonts/fonts";
import "./globals.css";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { DebounceScrollSmooth } from "./_components/DebounceScrollSmooth";

export const metadata: Metadata = {
  title: "Emotion Landing Copy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body
        className={`${robotoMono.className} ${radiotechnika.variable} flex flex-col justify-between`}
      >
        <Header />
        <div className="grow">{children}</div>
        <Footer />
        <DebounceScrollSmooth />
      </body>
    </html>
  );
}
