"use client";

import { useState } from "react";
import ContinueButton from "../../ContinueLevelBuilderButton";

export default function TranslateSentenceInput({}: {}) {
  const [correctOption, setCorrectOption] = useState("");
  const [incorrectOptions, setIncorrectOptions] = useState([""]);
  const [title, setTitle] = useState("");

  // pushing into array, neccessarily complicated because of useState
  const handleAddIncorrectOption = () => {
    setIncorrectOptions([...incorrectOptions, ""]);
  };

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
    <div className="text-color-not-active flex flex-col gap-8">
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title placeholder"
          className="text-center text-3xl py-8 font-bold border input input-bordered w-full max-w-lg"
        />
      </div>
      <div>
        <div className="flex flex-col mx-auto text-center min-w-[24rem] w-min gap-8">
          <input
            type="text"
            placeholder="Correct Option placeholder"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            className="text-center p-2 rounded-3xl border bg-color-active placeholder-white font-semibold"
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
                className="w-full text-center p-2 rounded-3xl border bg-[#FF0000] placeholder-white font-semibold"
              />
            </div>
          ))}
          <div
            className="btn btn-lg btn-secondary text-5xl"
            onClick={handleAddIncorrectOption}
          >
            +
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        < ContinueButton />
      </div>
    </div>
  );
}
