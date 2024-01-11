import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koliko vremena želiš provesti učeći (jezik)?",
  description: "Unesi korisničke podatke",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
