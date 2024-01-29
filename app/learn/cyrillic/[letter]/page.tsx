"use client";
import { useState } from "react";
import GuessCyrillicLetterStep from "@/app/sections/steps/cyrillic/GuessCyrillicLetterStep";
import GuessLatinLetterStep from "@/app/sections/steps/cyrillic/GuessLatinLetterStep";
export default function Page({ params }: { params: { letter: any } }) {
  const Level = {
    cyrillicLetter: "Я",
    options: [
      { text: "Ya", isCorrect: true },
      { text: "Ye", isCorrect: false },
      { text: "Yi", isCorrect: false },
      { text: "Yo", isCorrect: false },
    ],
  };
  const [active, setActive] = useState(0);
  return (
    <>
      <div
        className={`flex justify-center gap-16 mx-auto content-wrap ${
          active == 0 ? "" : "hidden"
        }`}
      >
        <button
          className="p-12 border rounded-xl text-5xl"
          onClick={() => setActive(1)}
        >
          1
        </button>
        <button
          className="p-12 border rounded-xl text-5xl"
          onClick={() => setActive(2)}
        >
          2
        </button>
      </div>
      <div>
        <div className={`${active == 1 ? "" : "hidden"}`}>
          <GuessCyrillicLetterStep
            cyrillicLetter={Level.cyrillicLetter}
            options={Level.options}
          />
        </div>
        <div className={`${active == 2 ? "" : "hidden"}`}>
          <GuessLatinLetterStep
            latinLetter={Level.cyrillicLetter}
            options={Level.options}
          />
        </div>
      </div>
    </>
  );
}
