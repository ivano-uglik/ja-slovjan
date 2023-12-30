"use client";

import { useState } from "react";

export default function TextCompletionInput({}: {}) {
  const [correct, isCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Title placeholder"
          className="text-center text-3xl py-8 font-bold border input input-bordered w-full max-w-lg"
        />
      </div>
      <div>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            isCorrect(true);
          }}
        >
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
          <input
            type="submit"
            value="Submit"
            className="btn btn-lg btn-secondary btn-wide mt-8"
          />
        </form>
      </div>
    </div>
  );
}
