"use client";
import Completed from "@/app/sections/CompletedLevel";
import GuessCyrillicLetterStep from "@/app/sections/steps/cyrillic/GuessCyrillicLetterStep";
import { useState } from "react";

export default function Page({
  params,
}: {
  params: { letter: string; levelPart: string };
}) {
  const [step, setStep] = useState(0);
  const LevelCyrillic = [
    {
      group: 1,
      levels: [
        {
          level: 1,
          steps: [
            {
              step: 1,
              component: (
                <GuessCyrillicLetterStep
                  cyrillicLetter="Я"
                  options={[
                    { text: "Ye", isCorrect: false },
                    { text: "Ya", isCorrect: true },
                    { text: "Yi", isCorrect: false },
                  ]}
                  Completed={
                    <Completed
                      onClick={() => {
                        setStep(step + 1);
                      }}
                    />
                  }
                />
              ),
            },
          ],
        },
      ],
    },
    // { group: "Osnovna rěčenja", levels: [{ id: 1 }] },
  ];
  return (
    <div>
      <div className="text-center text-3xl font-bold text-primary">
        {decodeURIComponent(params.letter)}{" "}
        {decodeURIComponent(params.levelPart)}
      </div>
      col
      {
        LevelCyrillic[Number(params.letter) - 1].levels[
          Number(decodeURIComponent(params.levelPart)) - 1
        ]?.steps[step]?.component
      }
    </div>
  );
}
