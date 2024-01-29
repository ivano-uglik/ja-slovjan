"use client";

import { useContext, useState } from "react";
import Completed from "../../CompletedLevel";
import { correctContext } from "@/app/learn/[level]/[levelPart]/page";
import SpecialLetters from "../../SpecialLetters";
import { dela } from "@/app/@lib/Fonts";
export default function TextCompletionStep({
  title,
  titleTranslated,
}: {
  title: string;
  titleTranslated: string;
}) {
  const [correct, isCorrect]: any = useContext(correctContext);
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [capsLock, isCapsLock] = useState<boolean>(false);
  function filter() {
    const wordsArray = title.split(" ");
    let smallestIndex = Infinity;

    return wordsArray.map((word, index) => {
      if (word.startsWith("_") && word.endsWith("_")) {
        smallestIndex = Math.min(smallestIndex, index);

        return (
          <input
            key={index}
            type="text"
            className="input input-bordered w-32"
            value={inputValues[index] || ""}
            autoFocus={index === smallestIndex}
            onChange={(e) => {
              const newValues = [...inputValues];
              newValues[index] = e.target.value;
              setInputValues(newValues);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && compareValues() === true && isCorrect(true);
              isCapsLock(e.getModifierState("CapsLock"));
            }}
          />
        );
      } else {
        return (
          <span key={index} className="font-bold text-2xl">
            {word}{" "}
          </span>
        );
      }
    });
  }

  function compareValues(): boolean {
    const originalWords = title.split(" ");
    const isMatched = originalWords.every(
      (word, index) =>
        !word.startsWith("_") ||
        (inputValues[index] &&
          inputValues[index] === word.substring(1, word.length - 1))
    );
    return isMatched;
  }

  return (
    <div className="">
      <div className="text-center mx-auto">
        {filter()}
        <h2 className="pt-8">{titleTranslated}</h2>
        <SpecialLetters className="pt-8" isCaps={capsLock} />
        <button
          className={`${dela.className} btn btn-primary btn-lg w-full max-w-xs mt-16`}
          onClick={() => {
            if (compareValues() === true) {
              isCorrect(true);
            }
          }}
        >
          Nastavi
        </button>
      </div>
      {correct && <Completed />}
    </div>
  );
}
