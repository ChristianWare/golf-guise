import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const aeonik = localFont({
  src: "../../public/fonts/Aeonik.otf",
  variable: "--aeonik",
  display: "swap",
});

const aeonikBold = localFont({
  src: "../../public/fonts/AeonikBold.otf",
  variable: "--aeonikBold",
  display: "swap",
});

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
        className={`${inter.className} ${aeonik.variable} ${aeonikBold.variable} ${ppMoriRegualr.variable} ${ppMoriSemiBold.variable} ${styles.bgColor} ${tuskerGrotesk.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
