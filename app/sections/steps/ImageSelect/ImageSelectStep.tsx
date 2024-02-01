"use client";

import { useContext, useState } from "react";
import { correctContext } from "@/app/learn/[level]/[levelPart]/page";

export default function ImageSelectStep({
  word,
  options,
}: {
  word: string;
  options: { imageURL: string; isCorrect: boolean }[];
}) {
  const [correct, isCorrect]: any = useContext(correctContext);
  function handleClick(index: number) {
    options[index].isCorrect ? isCorrect(true) : null;
  }
  return (
    <div className="text-primary">
      <div className="content-wrap mx-auto ">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Izbiraj popravny obraz
          </h2>
        </div>
        <div className="font-bold text-5xl py-8">
          <h1>{word}</h1>
        </div>
        <div className="flex justify-around items-center flex-wrap">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={` rounded-xl ${
                  correct && options[index].isCorrect
                    ? "bg-success"
                    : "hover:bg-slate-100 hover:opacity-80"
                }`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={option.imageURL}
                  alt=""
                  className={`w-64 h-64 object-cover object-center rounded-xl border cursor-pointer ${
                    correct && options[index].isCorrect && "opacity-50"
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
