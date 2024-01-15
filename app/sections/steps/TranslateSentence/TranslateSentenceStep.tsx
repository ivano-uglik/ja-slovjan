"use client";

import { useContext, useState } from "react";
import Completed from "../../CompletedLevel";
import { correctContext } from "@/app/learn/[level]/[levelPart]/page";

export default function TranslateSentence({
  title,
  options,
}: {
  title: string;
  options: { text: string; isCorrect: boolean }[];
}) {
  const [correct, isCorrect]: any = useContext(correctContext);
  return (
    <div className="text-primary">
      <div className="text-center text-3xl py-8 font-bold text-primary">
        {title}
      </div>
      <div>
        <ul className="flex flex-col mx-auto text-center min-w-[24rem] w-min gap-8">
          {options.map((option, index) => {
            return (
              <li
                key={index}
                className={`p-2 rounded-3xl border font-semibold cursor-pointer ${
                  correct && options[index].isCorrect && "bg-success text-white"
                }`}
                onClick={() => {
                  options[index].isCorrect && isCorrect(true);
                }}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
      {correct && <Completed />}
    </div>
  );
}
