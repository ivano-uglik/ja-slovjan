"use client";
import { useState } from "react";
import ContinueButton from "../../ContinueLevelBuilderButton";
import { useLevelBuilder } from "@/context/LevelBuilderContext";
import { FaInfoCircle } from "react-icons/fa";

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
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Ja igraju _bejsbol_"
          className="input input-bordered focus:outline-none w-full max-w-3xl rounded-b-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="flex justify-center items-center py-8 bg-info w-full max-w-3xl rounded-b-lg">
          <div className="w-[20%] flex justify-center">
            <FaInfoCircle size={30} />
          </div>
          <p className="w-[80%] pr-4">
            Write the sentence in Interslavic, and put the selected input
            between two _underlines_ .
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-8">
        <input
          type="text"
          placeholder="Ja igram bejzbol."
          className="input input-bordered focus:outline-none w-full max-w-md rounded-b-none"
          value={titleTranslated}
          onChange={(e) => {
            setTitleTranslated(e.target.value);
          }}
        />
        <div className="flex justify-around items-center py-8 bg-info w-full max-w-md rounded-b-lg">
          <div className="w-[20%] flex justify-center">
            <FaInfoCircle size={30} />
          </div>
          <p className="w-[80%] pr-4">
            Write the sentence in the original language here.
          </p>
        </div>
      </div>
      <ContinueButton onNext={onNext} />
    </div>
  );
}
