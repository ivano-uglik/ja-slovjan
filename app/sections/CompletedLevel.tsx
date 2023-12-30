"use client";

import Rocket from "@/public/svg/rocket-svgrepo.svg";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../dashboard/learn/[level]/[levelPart]/page";

export default function Completed({ className }: { className?: string }) {
  const [step, setStep]: any = useContext(Context);
  return (
    <div
      className={`w-full h-[28vh] fixed bottom-0 bg-[#F4F4F4] flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-8">
        <div>
          <Image src={Rocket} alt="" className="w-16" />
        </div>
        <h1 className="text-4xl">Ty se ulěpšaješ!</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="w-2/3 text-center p-4 bg-slate-200 rounded-xl">
          Slovo Я se pojavljuje u svakom slavenskom ćirilićnom jeziku osim
          srpskom i makedonskom.
        </p>
        <div className="flex gap-8">
          <button className="px-12 py-4 text-xl font-semibold border rounded-lg">
            Prěgledi
          </button>
          <button
            className="px-12 py-4 text-xl font-semibold border rounded-lg bg-color-active"
            onClick={() => setStep(step + 1)}>
            Slědujuči
          </button>
        </div>
      </div>
    </div>
  );
}
