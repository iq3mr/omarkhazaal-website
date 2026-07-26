import type { Metadata } from "next";
import localFont from "next/font/local";
import Background from "../components/ui/Background";
import "./globals.css";

const thmanyahSans = localFont({
  src: [
    {
      path: "./fonts/ThmanyahSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const thmanyahSerif = localFont({
  src: [
    {
      path: "./fonts/ThmanyahSerifDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSerifDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSerifDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSerifDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ThmanyahSerifDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أكاديمية عمر خزعل",
  description: "الفن ليس مادة تُدرّس... بل تجربة تُعاش.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${thmanyahSans.variable} ${thmanyahSerif.variable}`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}