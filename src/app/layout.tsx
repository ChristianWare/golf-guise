import type { Metadata } from "next";
import localFont from "next/font/local";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    default: "Golf Guise: Your Ultimate Golf Guidebook",
    template: "%s - Golf Guise",
  },
  description:
    "Elevate your golfing experience with Golf Guise! Discover in-depth reviews of the latest golf products, expert guides to enhance your game, and exclusive tips to perfect your swing. Unleash your potential on the course with our comprehensive insights. Your journey to golfing excellence starts here!",
  twitter: {
    card: "summary_large_image",
  },
};

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--barlowCondensed",
});

const tuskerGrotesk = localFont({
  src: "../../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

const sharpGrotesk = localFont({
  src: "../../public/fonts/SharpGroteskBook20.otf",
  variable: "--sharpGrotesk",
  display: "swap",
});

const sharpGroteskSemiBold = localFont({
  src: "../../public/fonts/SharpGroteskSemiBold20.otf",
  variable: "--sharpGroteskSemiBold",
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
        className={` ${barlowCondensed.variable} ${styles.bgColor} ${tuskerGrotesk.variable} ${sharpGrotesk.variable} ${sharpGroteskSemiBold.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
