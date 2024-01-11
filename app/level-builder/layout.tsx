import LevelBuilderProvider from "@/context/LevelBuilderContext";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Level Builder",
  description:
    "Create your own levels to be used by other users on Ja, Slovjan today!",
};
export default function BuilderLayout({ children }: { children: ReactNode }) {
  return <LevelBuilderProvider>{children}</LevelBuilderProvider>;
}
