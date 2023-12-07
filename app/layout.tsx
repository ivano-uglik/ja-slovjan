import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "./sections/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Я",
    default: "Ja, Slovjan | Я, Словян",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={montserrat.className}>
          <Sidebar element={children} />
        </body>
      </UserProvider>
    </html>
  );
}
