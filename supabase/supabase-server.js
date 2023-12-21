import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createServerComponentClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;

