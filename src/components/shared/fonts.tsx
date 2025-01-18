import { Inter, Mulish, Public_Sans } from "next/font/google";

export const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
