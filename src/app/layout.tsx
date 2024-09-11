import type { Metadata } from "next";
import type { Viewport } from "next";
import { radiotechnika, robotoMono } from "./_fonts/fonts";
import "./globals.css";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  title: "Emotion Tech",
  description: "We are Dubai based marketing company",
  generator: "Next.js",
  metadataBase: new URL("https://emotiontech.ae"),
  alternates: {
    canonical: "/",
  },
  robots: { "max-image-preview": "large" },
  openGraph: {
    title: "Emotion Tech",
    url: "https://emotiontech.ae",
    siteName: "Emotion Tech",
  },
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
