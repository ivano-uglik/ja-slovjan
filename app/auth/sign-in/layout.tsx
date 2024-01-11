import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Ja, Slovjan",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
