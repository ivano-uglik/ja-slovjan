"use client";
import SessionProvider from "@/context/SessionContext";
import Sidebar from "../sections/Layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Sidebar element={children} />
    </SessionProvider>
  );
}
