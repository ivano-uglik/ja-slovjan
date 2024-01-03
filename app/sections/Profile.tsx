"use client";
import React from "react";
import { useSession } from "@/context/SessionContext";
import supabase from "@/supabase/supabase-client";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

const Profile = () => {
  const { session } = useSession() || {};
  const user: User | User = session?.user;

  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="h-full w-full flex flex-col items-center mt-12">
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg shadow-shadowLight rounded-xl mt-16">
        <div className="">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={
                    user?.photoURL ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/800px-Dwayne_Johnson_2014_%28cropped%29.jpg"
                  }
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] aspect-square"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span className="text-sm text-slate-400">Posts</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span className="text-sm text-slate-400">Followers</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span className="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {user?.displayName || user.email}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
              {user?.location || "location unspecified"}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  {user?.description || "No description added."}
                </p>
                <h1>Want to create your own levels?</h1>
                <p>
                  Contribute to Ja-Slovjan by utilizing your language speaking
                  skills to create community levels!{" "}
                  <Link href="#">Learn more</Link>
                </p>
                <Link
                  href="/app/users/me/posts/create-new"
                  className="uppercase btn btn-secondary">
                  {"→"} go to level builder
                </Link>
              </div>
            </div>
          </div>
          {session?.user && (
            <button
              onClick={handleSignOut}
              className="btn btn-ghost w-full opacity-50 hover:btn-primary hover:btn-outline hover:opacity-100">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
