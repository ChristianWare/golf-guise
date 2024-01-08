import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Golf Guise: Your Ultimate Golf Guidebook",
  description:
    "Elevate your golfing experience with Golf Guise! Discover in-depth reviews of the latest golf products, expert guides to enhance your game, and exclusive tips to perfect your swing. Unleash your potential on the course with our comprehensive insights. Your journey to golfing excellence starts here!",
};

const inter = Inter({ subsets: ["latin"] });

const ppMoriRegualr = localFont({
  src: "../../public/fonts/PPMoriRegular.otf",
  variable: "--ppMoriRegualr",
  display: "swap",
});

const ppMoriSemiBold = localFont({
  src: "../../public/fonts/PPMoriSemiBold.otf",
  variable: "--ppMoriSemiBold",
  display: "swap",
});

const tuskerGrotesk = localFont({
  src: "../../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${ppMoriRegualr.variable} ${ppMoriSemiBold.variable} ${styles.bgColor} ${tuskerGrotesk.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
