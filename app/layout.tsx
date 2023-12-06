import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./sections/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

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
        <body className={josefin_sans.className}>
          <Sidebar element={children} />
        </body>
      </UserProvider>
    </html>
  );
}
