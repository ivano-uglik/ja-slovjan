"use client";
import { ReactNode, useState, useEffect, createContext, useContext } from "react";
import supabase from "@/supabase/supabase-client"
import { Session } from "@supabase/supabase-js";

const SessionContext = createContext<any>(null);

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        if (process.env.NEXT_PUBLIC_DEV) console.log("user signed in", session?.user)
        setSession(session)
      }
      else {
        if (process.env.NEXT_PUBLIC_DEV) console.log("user is null");
        setSession({});
      }

      setIsLoading(false);
    })

    return () => {
      subscription.data.subscription.unsubscribe();
    }
  }, []);

  return (
    <SessionContext.Provider value={{ session, isLoading, error }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = (): { session: Session, isLoading: boolean, error: string } => useContext(SessionContext);
export default SessionProvider;
