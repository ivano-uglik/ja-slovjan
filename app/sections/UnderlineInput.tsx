"use client";

import { useState } from "react";
import { dela } from "../@lib/Fonts";

export default function UnderlineToInput({
  inputString,
}: {
  inputString: string;
}) {
  const [inputValues, setInputValues] = useState<string[]>([]);

  function handleInputChange(index: number, value: string) {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  }

  function filter() {
    const wordsArray = inputString.split(" ");
    return wordsArray.map((word, index) =>
      word.startsWith("_") && word.endsWith("_") ? (
        <input
          key={index}
          type="text"
          className="w-[8rem]"
          value={inputValues[index] || ""}
          onChange={(e) => {
            handleInputChange(index, e.target.value);
          }}
        />
      ) : (
        <span key={index}>{word} </span>
      )
    );
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
    <div>
      {filter()}
      <button
        className={`${dela.className} btn btn-primary btn-lg w-full max-w-xs`}
        onClick={compareValues}
      >
        Nastavi
      </button>
    </div>
  );
}
