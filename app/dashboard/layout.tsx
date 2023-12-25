"use client";
import { useSession } from "@/context/SessionContext";
import Sidebar from "../sections/Layout";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add loading state for when the user is loading, and redirect if there is no user
  const { session, isLoading } = useSession() || {};
  const router = useRouter();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  else if (session && session?.user) {
    return (
      <Sidebar element={children} />
    );
  }
  else {
    router.push("/auth/sign-in");
  }
}
