"use client";
import React from "react";
import { useSession } from "@/context/SessionContext";
import supabase from "@/supabase/supabase-client";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { session } = useSession() || {};

  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* prevent a small UI error where the user for a slight moment before being redirected can see the logout button even if they logged out */}
      {session?.user && (
        <button
          onClick={handleSignOut}
          className="btn btn-primary rounded-full">
          Logout
        </button>
      )}
    </div>
  );
};

export default Profile;
