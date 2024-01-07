import AccountSetupProvider from "@/context/AccountSetupContext";
import { ReactNode } from "react";

export default function BuilderLayout({ children }: { children: ReactNode }) {
  return <AccountSetupProvider>{children}</AccountSetupProvider>;
}
