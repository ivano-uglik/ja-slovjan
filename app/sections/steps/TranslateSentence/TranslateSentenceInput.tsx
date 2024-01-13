"use client";

import { useState } from "react";
import ContinueButton from "../../ContinueLevelBuilderButton";
import { useLevelBuilder } from "@/context/LevelBuilderContext";

export default function TranslateSentenceInput({ order }: { order: number }) {
  const [correctOption, setCorrectOption] = useState<string>("");
  const [incorrectOptions, setIncorrectOptions] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");

  const { stepsCompleted, setSteps } = useLevelBuilder();

  // update context state after clicking on the "next button"
  const onNext = () => {
    const incorrect = incorrectOptions.map((text) => {
      return { text: text, isCorrect: false };
    });

    const options = [...incorrect, { text: correctOption, isCorrect: true }];
    setSteps((current) => [
      ...current,
      {
        order: order,
        component: "TranslateSentence",
        params: { title, options },
      },
    ]);
  };

  // pushing into array, neccessarily complicated because of useState
  const handleAddIncorrectOption = () => {
    setIncorrectOptions([...incorrectOptions, ""]);
  };

  // edit incorrect option
  const handleIncorrectOptionChange = (index: number, value: string) => {
    const updatedOptions = [...incorrectOptions];
    updatedOptions[index] = value;
    setIncorrectOptions(updatedOptions);
  };

  const handleRemoveIncorrectOption = (index: number) => {
    const updatedOptions = [...incorrectOptions];
    updatedOptions.splice(index, 1);
    setIncorrectOptions(updatedOptions);
  };

  return (
    <div className="text-primary flex flex-col gap-8">
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title placeholder"
          className="text-center input input-bordered w-full max-w-lg"
        />
      </div>
      <div>
        <div className="flex flex-col mx-auto text-center min-w-[24rem] w-min gap-8">
          <input
            type="text"
            placeholder="Correct Option placeholder"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            className="text-center input outline-none placeholder:text-green-500 input-bordered !text-green-500 border-green-500"
          />
          {incorrectOptions.map((option, index) => (
            <div key={index} className="flex gap-4">
              <button
                className="btn btn-square rounded-full"
                onClick={() => {
                  handleRemoveIncorrectOption(index);
                }}
              >
                -
              </button>
              <input
                type="text"
                placeholder="Incorrect Option placeholder"
                value={option}
                onChange={(e) =>
                  handleIncorrectOptionChange(index, e.target.value)
                }
                className="w-full text-center outline-none placeholder:text-red-500 input input-bordered !text-red-500 border-red-500"
              />
            </div>
          ))}
          <div
            className="btn w-full btn-primary text-xl"
            onClick={handleAddIncorrectOption}
          >
            +
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ContinueButton onNext={onNext} />
      </div>
    </div>
  );
}
