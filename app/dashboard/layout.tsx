"use client";
import { useSession } from "@/context/SessionContext";
import Sidebar from "@/app/sections/Layout";
import { useRouter } from "next/navigation";
import Loading from "@/app/sections/Loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add loading state for when the user is loading, and redirect if there is no user
  const { session, isLoading } = useSession() || {};
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  } else if (session && session?.user) {
    return <Sidebar element={children} />;
  } else {
    router.push("/auth/sign-in");
  }
}
