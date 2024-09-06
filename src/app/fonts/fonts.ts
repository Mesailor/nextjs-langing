import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const radiotechnika = localFont({
  src: "/Radiotechnika.otf",
  display: "swap",
});
