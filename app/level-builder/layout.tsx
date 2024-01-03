import LevelBuilderProvider from "@/context/LevelBuilderContext";
import { ReactNode } from "react";

export default function BuilderLayout({ children }: { children: ReactNode }) {
  return <LevelBuilderProvider>{children}</LevelBuilderProvider>;
}
