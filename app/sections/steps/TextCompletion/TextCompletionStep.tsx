"use client";

import { useContext, useState } from "react";
import Completed from "../../CompletedLevel";
import { dela } from "@/app/@lib/Fonts";
import { useLevelState } from "@/context/LevelStateContext";
export default function TextCompletionStep({
  title,
  titleTranslated,
}: {
  title: string;
  titleTranslated: string;
}) {
  const { correct, isCorrect } = useLevelState();
  const [inputValues, setInputValues] = useState<string[]>(
    title.split(" ").map(() => "")
  );
  const [capsLock, isCapsLock] = useState<boolean>(false);
  const [lastSelectedInput, setLastSelectedInput] = useState<any>();
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
            value={inputValues[index]}
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
            onFocus={(e) => {
              setLastSelectedInput(index);
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

  function updateInputValuesWithSpecialLetter(specialLetter: string) {
    setInputValues((prevInputValues) => {
      return prevInputValues.map((value, index) => {
        if (index === lastSelectedInput) {
          return value + specialLetter;
        }
        return value;
      });
    });
  }

  return (
    <div className="">
      <div className="text-center mx-auto">
        {filter()}
        <h2 className="pt-8">{titleTranslated}</h2>
        <div className="flex justify-center gap-8 pt-8">
          <button
            className="btn btn-primary btn-outline text-2xl"
            onClick={() =>
              updateInputValuesWithSpecialLetter(capsLock ? "Ě" : "ě")
            }
          >
            {capsLock ? "Ě" : "ě"}
          </button>
          <button
            className="btn btn-primary btn-outline text-2xl"
            onClick={() =>
              updateInputValuesWithSpecialLetter(capsLock ? "Č" : "č")
            }
          >
            {capsLock ? "Č" : "č"}
          </button>
          <button
            className="btn btn-primary btn-outline text-2xl"
            onClick={() =>
              updateInputValuesWithSpecialLetter(capsLock ? "Š" : "š")
            }
          >
            {capsLock ? "Š" : "š"}
          </button>
          <button
            className="btn btn-primary btn-outline text-2xl"
            onClick={() =>
              updateInputValuesWithSpecialLetter(capsLock ? "Ž" : "ž")
            }
          >
            {capsLock ? "Ž" : "ž"}
          </button>
        </div>
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
