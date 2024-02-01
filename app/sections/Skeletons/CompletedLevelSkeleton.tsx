"use client";

import Rocket from "@/public/svg/rocket-svgrepo.svg";
import Image from "next/image";
export default function CompletedLevelSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full h-[28vh] z-20 fixed bottom-0 bg-gray-300 animate-pulse flex-col lg:flex-row flex items-center justify-center ${className}`}
    >
      <div className="hidden lg:flex items-center justify-center lg:justify-start gap-8">
        <div className="bg-gray-400 w-16 h-16 rounded-full block"></div>
        <h1 className="text-xl lg:text-4xl bg-gray-400 text-gray-400 p-2 rounded-full animate-pulse">
          Ty se ulěpšaješ!
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="w-2/3 hidden lg:block text-center p-4 bg-gray-400 rounded-xl text-gray-400 animate-pulse">
          Slovo Я se pojavljuje u svakom slavenskom ćirilićnom jeziku osim
          srpskom i makedonskom.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <button className="px-12 py-4 text-xl font-semibold border rounded-lg bg-gray-400 text-gray-400 ">
            Prěgledi
          </button>
          <button className="px-12 py-4 text-xl font-semibold border rounded-lg bg-gray-400 text-gray-400">
            Slědujuči
          </button>
        </div>
      </div>
    </div>
  );
}