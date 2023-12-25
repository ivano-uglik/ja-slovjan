"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ClosedBeta = () => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-base-100">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-[42px] font-bold text-base-content">
          Closed Beta!
        </h2>
        <p className="mb-2 text-lg text-zinc-500">
          Why were you redirected to this page? The feature you were trying to
          access is currently unavailable because this version of the app is a{" "}
          <span className="font-medium text-indigo-500">
            <Link href="https://en.wikipedia.org/wiki/Software_release_life_cycle#Open_and_closed_beta">
              {" "}
              closed beta.
            </Link>
          </span>
        </p>
        <button
          onClick={() => router.back()}
          className="mt-3 w-96 btn btn-secondary text-lg"
        >
          Return →
        </button>
      </div>
    </div>
  );
};

export default ClosedBeta;
