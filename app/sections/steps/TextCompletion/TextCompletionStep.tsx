"use client";

import { useContext, useState } from "react";
import Completed from "../../CompletedLevel";
import { correctContext } from "@/app/dashboard/learn/[level]/[levelPart]/page";

export default function TextCompletionStep({
  title,
  titleTranslated,
}: {
  title: string;
  titleTranslated: string;
}) {
  const [correct, isCorrect]: any = useContext(correctContext);
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
              correct ? "btn-accent" : "btn-primary"
            }`}
          />
        </form>
      </div>
      {correct && <Completed />}
    </div>
  );
}
