"use client";
import Completed from "@/app/sections/CompletedLevel";
import TranslateSentence from "@/app/sections/steps/TranslateSentence";
import GuessCyrillicLetterStep from "@/app/sections/steps/cyrillic/GuessCyrillicLetterStep";
import ImageSelectStep from "@/app/sections/steps/ImageSelectStep";
import TextCompletionStep from "@/app/sections/steps/TextCompletionStep";
import { useState } from "react";

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
              step: 0,
              component: (
                <TextCompletionStep
                  title="играју"
                  titleTranslated="igraju"
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
            {
              step: 4,
              component: (
                <ImageSelectStep
                  word="Teniska"
                  options={[
                    {
                      imageURL:
                        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      isCorrect: true,
                    },
                    {
                      imageURL:
                        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      isCorrect: false,
                    },
                    {
                      imageURL:
                        "https://images.unsplash.com/photo-1580719653258-26873fde0b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      isCorrect: false,
                    },
                    {
                      imageURL:
                        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      isCorrect: false,
                    },
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
      <div className="text-center text-3xl font-bold text-color-not-active">
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
