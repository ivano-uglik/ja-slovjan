"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ContinueButton from "../../ContinueLevelBuilderButton";
import { useLevelBuilder } from "@/context/LevelBuilderContext";

export default function ImageSelectInput({ order }: { order: number }) {
  const [word, setWord] = useState<string>("");
  const [incorrectImages, setIncorrectImages] = useState<string[]>([]);
  const [correctImage, setCorrectImage] = useState<string>("");

  const { setSteps } = useLevelBuilder();

  const handleAddImage = () => {
    setIncorrectImages((current) => [...current, ""]);
  };

  // update context state after clicking on the "next button"
  const onNext = () => {
    const incorrect = incorrectImages.map((url) => {
      return { imageURL: url, is_correct: false };
    });

    const options = [
      ...incorrect,
      { imageURL: correctImage, is_correct: true },
    ];

    setSteps((current) => [
      ...current,
      {
        order: order,
        component: "ImageSelect",
        params: { word, options },
      },
    ]);
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...incorrectImages];
    updatedImages[index] = value;
    setIncorrectImages(updatedImages);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...incorrectImages];
    updatedImages.splice(index, 1);
    setIncorrectImages(updatedImages);
  };

  return (
    <div className="text-primary">
      <div className="content-wrap overflow-x-hidden flex items-center flex-col mx-auto">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Izbiraj popravny obraz
          </h2>
        </div>
        <input
          className="text-center input input-bordered w-full max-w-lg my-8"
          onChange={(e) => {
            setWord(e.target.value);
          }}
          placeholder="Word"
        />
        <div className="flex justify-center items-center flex-wrap gap-8">
          <div className="relative">
            {correctImage ? (
              <img
                src={correctImage}
                alt=""
                className="w-64 h-64 object-cover object-center rounded-xl border cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_correct").showModal()
                }
              />
            ) : (
              <div
                className="w-64 h-64 grid place-items-center rounded-xl border cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_correct").showModal()
                }>
                <h1 className="px-2 text-center">
                  Add a source for the correct image
                </h1>
              </div>
            )}
            <div className="absolute -top-4 -right-4 rounded-full h-[3rem] w-[3rem] inline-flex justify-center items-center cursor-default text-3xl border border-green-500 bg-white text-green-500">
              <FaCheck size={15} />
            </div>
            <dialog id={"my_modal_correct"} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() =>
                      document.getElementById("my_modal_correct").close()
                    }>
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-xl text-center pb-8">
                  Add Image URL
                </h3>
                <div className="flex flex-wrap gap-8 justify-center">
                  <input
                    type="url"
                    placeholder="https://"
                    value={correctImage}
                    onChange={(e) => setCorrectImage(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button
                  className="cursor-default"
                  onClick={() =>
                    document.getElementById("my_modal_correct").close()
                  }>
                  Close
                </button>
              </form>
            </dialog>
          </div>
          {incorrectImages.map((image, index: number) => {
            return (
              <div key={index} className="relative">
                {image ? (
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-64 h-64 object-cover object-center rounded-xl border cursor-pointer"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  />
                ) : (
                  <div
                    className="w-64 h-64 grid place-items-center rounded-xl border cursor-pointer"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }>
                    <h1 className="px-2 text-center">
                      Add an incorrect image source
                    </h1>
                  </div>
                )}
                <div
                  className="absolute -top-4 -right-4 rounded-full btn btn-circle text-3xl border border-red-500 bg-white text-red-500"
                  onClick={() => {
                    handleRemoveImage(index);
                  }}>
                  -
                </div>
                <dialog id={`my_modal_${index}`} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() =>
                          document.getElementById(`my_modal_${index}`).close()
                        }>
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-xl text-center pb-8">
                      Add Image URL
                    </h3>
                    <div className="flex flex-wrap gap-8 justify-center">
                      <input
                        type="url"
                        placeholder="https://"
                        value={image}
                        onChange={(e) =>
                          handleImageChange(index, e.target.value)
                        }
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button
                      className="cursor-default"
                      onClick={() =>
                        document.getElementById(`my_modal_${index}`).close()
                      }>
                      Close
                    </button>
                  </form>
                </dialog>
              </div>
            );
          })}
        </div>
        <button
          className="btn w-full md:w-1/2 btn-primary text-xl my-8"
          onClick={handleAddImage}>
          +
        </button>
        <div className="flex justify-center">
          <ContinueButton onNext={onNext} />
        </div>
      </div>
    </div>
  );
}
