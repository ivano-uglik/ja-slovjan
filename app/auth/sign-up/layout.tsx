import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register to Ja, Slovjan",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
