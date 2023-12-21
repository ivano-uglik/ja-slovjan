"use client";
import { Auth } from "@supabase/auth-ui-react";
import supabase from "@/supabase/supabase-client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default async function Registration() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-full md:w-1/2 xl:w-1/3"><Auth queryParams={{ hd: "" }} redirectTo="/dashboard" appearance={{ theme: ThemeSupa }} supabaseClient={supabase} providers={["google", "facebook", "github"]} /></div>
    </div>
  )
}