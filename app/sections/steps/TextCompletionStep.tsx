"use client";

import { useState } from "react";
import Completed from "../CompletedLevel";

export default function TextCompletionStep({
  title,
  titleTranslated,
  Completed,
}: {
  title: string;
  titleTranslated: string;
  Completed: any;
}) {
  const [correct, isCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div
        className={`text-center text-3xl py-8 font-bold ${
          correct ? "text-color-active" : "text-color-not-active"
        }`}
      >
        {title}
      </div>
      <div>
        {/* <ul className="flex flex-col mx-auto text-center min-w-[24rem] w-min gap-8">
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
        </ul> */}
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            inputValue == titleTranslated && isCorrect(true);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className={`w-[50vw] text-center text-3xl py-8 font-bold focus:outline-none  ${
              correct ? "text-color-active" : "text-color-not-active"
            }`}
            autoFocus
          />
          <input
            type="submit"
            value="Submit"
            className={`btn btn-lg btn-wide mt-8 ${
              correct ? "btn-accent" : "btn-secondary"
            }`}
          />
        </form>
      </div>
      {correct && Completed}
    </div>
  );
}
