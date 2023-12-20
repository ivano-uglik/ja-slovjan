"use client";
import Completed from "@/app/sections/CompletedLevel";
import TranslateSentence from "../../../sections/steps/TranslateSentence";
import { useState } from "react";
import GuessCyrillicLetterStep from "@/app/sections/steps/cyrillic/GuessCyrillicLetterStep";

export default function Page({
  params,
}: {
  params: { level: string; levelPart: string };
}) {
  const [step, setStep] = useState(0);
  const Level = [
    {
      group: "Pozdrav",
      levels: [
        {
          level: 1,
          steps: [
            {
              step: 1,
              component: (
                <TranslateSentence
                  title="“Hlapčik jedaje mrkvu.”"
                  options={[
                    { string: "Dječak jede mrkvu.", isCorrect: true },
                    { string: "Hladnjak sadrži mrkvu.", isCorrect: false },
                    { string: "Sok je od mrkve.", isCorrect: false },
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
            {
              step: 2,
              component: (
                <GuessCyrillicLetterStep
                  cyrillicLetter="A"
                  options={[
                    {
                      text: "B",
                      isCorrect: true,
                    },
                    { text: "C", isCorrect: false },
                    { text: "D", isCorrect: false },
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
            {
              step: 3,
              component: (
                <TranslateSentence
                  title="“Kako hočete, aby ljudi postupali s vami, tako i vy postupajte s njimi.”"
                  options={[
                    {
                      string:
                        "Kako želite da ljudi postopaju s vama, tako i vi postupajite s njima.",
                      isCorrect: true,
                    },
                    { string: "Hladnjak sadrži mrkvu.", isCorrect: false },
                    { string: "Sok je od mrkve.", isCorrect: false },
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
      <div className="text-center text-3xl font-bold">
        {decodeURIComponent(params.level)}{" "}
        {decodeURIComponent(params.levelPart)}
      </div>
      {/* <TranslateSentence
        title="“Hlapčik jedaje mrkvu.”"
        options={[
          { string: "Dječak jede mrkvu.", isCorrect: true },
          { string: "Hladnjak sadrži mrkvu.", isCorrect: false },
          { string: "Sok je od mrkve.", isCorrect: false },
        ]}
        Completed={
          <Completed
            onClick={() => {
              setStep(step + 1);
            }}
          />
        }
      /> */}
      {/* {Level[0].levels[0].steps.map((step, index) => {
        {
          console.log(step);
        }
        return <div key={index}>{step.component}</div>;
      })} */}
      {
        Level[0].levels[Number(decodeURIComponent(params.levelPart)) - 1]
          ?.steps[step]?.component
      }
    </div>
  );
}
