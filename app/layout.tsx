import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SessionProvider from "@/context/SessionContext";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | ЯС",
    default: "Ja, Slovjan | Я, Словян",
    absolute: "Ja, Slovjan - learn slavic languages",
  },
  description:
    "Ja, slovjan is an open-source, community-maintained language-learning platform for Slavic speakers.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
