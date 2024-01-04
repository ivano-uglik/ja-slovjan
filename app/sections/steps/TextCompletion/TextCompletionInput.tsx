"use client";
import { useState } from "react";
import ContinueButton from "../../ContinueLevelBuilderButton";
import { useLevelBuilder } from "@/context/LevelBuilderContext";

export default function TextCompletionInput({ order }: { order: number }) {
  const [title, setTitle] = useState<string>("");
  const [titleTranslated, setTitleTranslated] = useState<string>("");

  const { setSteps, stepsCompleted } = useLevelBuilder();

  const onNext = () => {
    setSteps((current) => [
      ...current,
      {
        order: order,
        component: "TextCompletion",
        params: { title, titleTranslated },
      },
    ]);
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Title placeholder"
          className="text-center input input-bordered outline-none w-full max-w-lg"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
        />
      </div>
      <div className="divider w-full mb-4"></div>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Title translated"
          onChange={(e) => {
            setTitleTranslated(e.target.value);
          }}
          className="text-center input input-bordered w-full max-w-lg"
        />
        <ContinueButton onNext={onNext} />
      </div>
    </div>
  );
}
