"use client";

import { useState } from "react";
import Completed from "../CompletedLevel";

export default function TranslateSentence({
  title,
  options,
  Completed,
}: {
  title: string;
  options: { string: string; isCorrect: boolean }[];
  Completed: any;
}) {
  const [correct, isCorrect] = useState(false);
  return (
    <div>
      <div className="text-center text-3xl py-8 font-bold">{title}</div>
      <div>
        <ul className="flex flex-col mx-auto text-center min-w-[24rem] w-min gap-8">
          {options.map((option, index) => {
            return (
              <li
                key={index}
                className={`p-2 rounded-3xl border font-semibold cursor-pointer ${
                  correct && options[index].isCorrect && "bg-color-active"
                }`}
                onClick={() => {
                  options[index].isCorrect && isCorrect(true);
                }}
              >
                {option.string}
              </li>
            );
          })}
        </ul>
      </div>
      {correct && Completed}
    </div>
  );
}
