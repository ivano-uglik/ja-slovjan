"use client";

import { useState } from "react";
import { dela } from "../@lib/Fonts";

export default function UnderlineToInput({
  inputString,
  nativeLanguage,
}: {
  inputString: string;
  nativeLanguage: string;
}) {
  const [inputValues, setInputValues] = useState<string[]>([]);

  function handleInputChange(index: number, value: string) {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  }

  function filter() {
    const wordsArray = inputString.split(" ");
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
              handleInputChange(index, e.target.value),
                console.log(inputValues[index]);
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

  function compareValues() {
    const originalWords = inputString.split(" ");
    const isMatched = originalWords.every(
      (word, index) =>
        !word.startsWith("_") ||
        (inputValues[index] &&
          inputValues[index] === word.substring(1, word.length - 1))
    );

    console.log("Are values matched?", isMatched);
  }

  return (
    <div className="mx-auto text-center pt-8">
      {filter()}
      <h2 className="pt-8">{nativeLanguage}</h2>
      <button
        className={`${dela.className} btn btn-primary btn-lg w-full max-w-xs mt-16`}
        onClick={compareValues}
      >
        Nastavi
      </button>
    </div>
  );
}
