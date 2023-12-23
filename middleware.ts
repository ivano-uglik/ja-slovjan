import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function Middleware(request: NextRequest) {

  // middleware client, different from server, clietnComponent, or routeHandler client
  const supabase = createMiddlewareClient(
    { req: request, res: NextResponse.next() },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  );

  const { data, error } = await supabase.auth.getSession();
  const session = data?.session;

  if (error) {
    console.error(`Middleware.ts: Error fetching session: ${error.message}`);
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {

    if (!session || !session?.user) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/auth/sign-in`);
    }
  }

  return NextResponse.next();
}
