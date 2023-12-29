"use client";
import Link from "next/link";
import { useState } from "react";
import supabase from "@/supabase/supabase-client";
import { useRouter } from "next/navigation";

// TO-DO, add "confirm email" page or step UI ( also enable confirm by email in supabase)

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSignInWithGoogle = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
      },
    });

    if (error) {
      setIsLoading(false);
      setError(error?.message);
    }
  };

  const handleSignUp = async (event: any) => {
    event.preventDefault();

    if (email && password) {
      setIsLoading(true);

      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error?.message);
        setIsLoading(false);
      } else {
        router.push(`/auth/sign-up/confirm-email?email=${email}`);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-full text-gray-500 px-4 md:w-1/2 xl:w-1/3">
        <div className="flex-col flex gap-2">
          <button
            onClick={handleSignInWithGoogle}
            className="w-full input input-bordered items-center text-gray-500 flex justify-center gap-2">
            <svg
              className="c-eSSyNk"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="21px"
              height="21px">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Sign up With Google
          </button>
        </div>
        <div className="divider"></div>
        <form>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="email">Email adress</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="w-full input input-bordered"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="password">Your Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="w-full input input-bordered"
              type="password"
              name="password"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {isLoading ? (
            <div className="flex justify-center mt-4">
              <div className="loading-spinner loading-md loading"></div>
            </div>
          ) : (
            <button
              onClick={handleSignUp}
              className="mt-8 btn w-full btn-secondary">
              Sign up
            </button>
          )}
          {/* TO-DO add password recovery */}
          <div className="text-sm flex flex-col gap-2 mt-4">
            <Link href="/auth/sign-in" className="underline text-center">
              {" "}
              Already have an account? Sign in...
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
