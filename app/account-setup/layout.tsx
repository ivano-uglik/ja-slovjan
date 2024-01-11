import AccountSetupProvider from "@/context/AccountSetupContext";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Profile | ЯС",
    default: "Account Setup",
  },
  description: "Set up your account on Ja, Slovjan",
};

export default function BuilderLayout({ children }: { children: ReactNode }) {
  return <AccountSetupProvider>{children}</AccountSetupProvider>;
}
