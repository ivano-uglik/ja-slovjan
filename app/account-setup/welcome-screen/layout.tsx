import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korisnički podatci",
  description: "Unesi korisničke podatke",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
