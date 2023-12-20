"use client";

import { useState } from "react";
import Completed from "../../CompletedLevel";

export default function GuessLatinLetterStep({
  latinLetter,
  options,
}: {
  latinLetter: string;
  options: { text: string; isCorrect: boolean }[];
}) {
  function handleClick(index: number) {
    options[index].isCorrect && isCorrect(true);
  }
  const [correct, isCorrect] = useState(false);
  return (
    <div>
      <div className="content-wrap mx-auto">
        <div>
          <h2 className="text-center text-5xl">
            Select the correct character for{" "}
            <span className="font-bold">{latinLetter}</span>
          </h2>
        </div>
        <div className="flex gap-4 justify-between items-center my-16">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={`p-12 rounded-3xl text-5xl border mx-auto cursor-pointer ${
                  correct && options[index].isCorrect
                    ? "bg-color-active"
                    : "hover:bg-slate-100 hover:opacity-80"
                }`}
                onClick={() => handleClick(index)}
              >
                <h2>{option.text}</h2>
              </div>
            );
          })}
        </div>
      </div>
      {correct && <Completed />}
    </div>
  );
}
