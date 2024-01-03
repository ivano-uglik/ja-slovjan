"use client";

import { useState } from "react";
import ContinueButton from "../../ContinueLevelBuilderButton";

export default function TextCompletionInput({}: {}) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Title placeholder"
          className="text-center text-3xl py-8 font-bold border input input-bordered outline-none w-full max-w-lg"
        />
      </div>
      <div>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            setIsCorrect(true);
          }}>
          <input
            type="text"
            placeholder="Title translated"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="text-center text-3xl py-8 font-bold border input input-bordered w-full max-w-lg"
            autoFocus
          />
          <ContinueButton />
        </form>
      </div>
    </div>
  );
}
