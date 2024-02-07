"use client";

import { useLevelState } from "@/context/LevelStateContext";
import { useState } from "react";

export default function ImageSelectStep({
  word,
  options,
}: {
  word: string;
  options: { imageURL: string; isCorrect: boolean }[];
}) {
  const { correct, isCorrect } = useLevelState();
  const [wrong, isWrong] = useState(false);
  function handleClick(index: number) {
    !wrong && options[index].isCorrect ? isCorrect(true) : isWrong(true);
  }
  return (
    <div className="text-primary">
      <div className="content-wrap mx-auto ">
        <div className="font-bold text-4xl pb-8 text-center">
          <h1>{word}</h1>
        </div>
        <div className="flex justify-around items-center flex-wrap">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={` rounded-xl ${
                  !wrong && correct && options[index].isCorrect
                    ? "bg-success"
                    : !wrong && "hover:bg-slate-100 hover:opacity-80"
                } ${wrong && "bg-error"}`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={option.imageURL}
                  alt=""
                  className={`w-64 h-64 object-cover object-center rounded-xl border cursor-pointer ${
                    correct || (wrong && "opacity-75")
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
