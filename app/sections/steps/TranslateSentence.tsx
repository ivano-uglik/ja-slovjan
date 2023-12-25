"use client";

import { useState } from "react";
import Completed from "../CompletedLevel";

export default function TranslateSentence({
  title,
  options,
}: {
  title: string;
  options: { text: string; isCorrect: boolean }[];
}) {
  const [correct, isCorrect] = useState(false);
  return (
    <div className="text-color-not-active">
      <div className="text-center text-3xl py-8 font-bold text-color-not-active">
        {title}
      </div>
      <div>
        <ul className="flex flex-col mx-auto text-center min-w-[24rem] w-min gap-8">
          {options.map((option, index) => {
            return (
              <li
                key={index}
                className={`p-2 rounded-3xl border font-semibold cursor-pointer ${
                  correct &&
                  options[index].isCorrect &&
                  "bg-color-active text-white"
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
