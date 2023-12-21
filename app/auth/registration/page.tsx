"use client";
import { Auth } from "@supabase/auth-ui-react";
import supabase from "@/supabase/supabase-client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default async function Registration() {
  return (
    <Auth appearance={{ theme: ThemeSupa }} supabaseClient={supabase} providers={["google", "facebook", "github"]} />
  )
}