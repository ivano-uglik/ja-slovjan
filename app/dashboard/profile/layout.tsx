import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your profile on Ja, Slovjan",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
