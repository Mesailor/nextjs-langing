import type { Metadata } from "next";
import { radiotechnika, robotoMono } from "./_fonts/fonts";
import "./globals.css";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Emotion Landing Copy",
  description: "We are Dubai based marketing company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="sm:scroll-pt-16 scroll-pt-12 scroll-smooth" lang="en">
      <body className={`${robotoMono.className} ${radiotechnika.variable}`}>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
