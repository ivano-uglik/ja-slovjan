"use client";

import Rocket from "@/public/svg/rocket-svgrepo.svg";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../learn/[level]/[levelPart]/page";
import { correctContext } from "../learn/[level]/[levelPart]/page";
import { useLevelState } from "@/context/LevelStateContext";
export default function Completed({ className }: { className?: string }) {
  const [step, setStep]: any = useContext(Context);
  const [correct, isCorrect]: any = useContext(correctContext);
  const { progressFormula, setProgressFormula, steps, setSteps } =
    useLevelState();
  return (
    <div
      className={`w-full h-[28vh] z-20 fixed bottom-0 bg-[#F4F4F4] flex-col lg:flex-row flex items-center justify-center ${className}`}
    >
      <div className="hidden lg:flex items-center justify-center lg:justify-start gap-8">
        <div>
          <Image src={Rocket} alt="" className="w-16" />
        </div>
        <h1 className="text-xl lg:text-4xl">Ty se ulěpšaješ!</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="w-2/3 hidden lg:block text-center p-4 bg-slate-200 rounded-xl">
          Slovo Я se pojavljuje u svakom slavenskom ćirilićnom jeziku osim
          srpskom i makedonskom.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <button className="px-12 py-4 text-xl font-semibold border rounded-lg">
            Prěgledi
          </button>
          <button
            className="px-12 py-4 text-xl font-semibold border rounded-lg bg-success text-white"
            onClick={() => (
              setStep(step + 1),
              isCorrect(false),
              setProgressFormula(Math.ceil(((step + 1) / steps) * 100))
            )}
          >
            Slědujuči
          </button>
        </div>
      </div>
    </div>
  );
}
