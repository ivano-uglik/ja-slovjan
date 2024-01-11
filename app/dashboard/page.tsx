import { Metadata } from "next";
import HomePage from "../sections/HomePage";
import Loading from "../sections/Loading";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
