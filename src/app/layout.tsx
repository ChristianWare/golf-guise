import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${aeonik.variable} ${aeonikBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
