// /level-builder/builder, this component is the first step in building a level, after the introduction in /level-builder.

"use client";
import { dela } from "@/app/@lib/Fonts";
import { Templates } from "@/app/@lib/Templates";
import { useState } from "react";
import image from "@/public/level-builder-placeholder.svg";
import Image from "next/image";

export default function Builder() {
  const [language, setLanguage] = useState("");
  const [levelGroup, setLevelGroup] = useState("");
  const [title, setTitle] = useState("My title");
  const [description, setDescription] = useState("Lorem ipsum...");
  const [steps, setSteps]: any = useState([]);

  // remove step that is added from the marketplace (minus button)
  const removeStep = (indexToRemove: number) => {
    setSteps((prevSteps: any) =>
      prevSteps.filter((_, index: number) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <div className="mx-auto px-4 lg:px-0">
        <div className="text-center">
          <h1 className={`${dela.className} pt-16 pb-4 text-3xl`}>
            Welcome to the LevelBuilder!
          </h1>
          <h2 className="mx-auto">{"Let's start."}</h2>
        </div>
        <form
          className="lg:w-96 mx-auto py-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-4">
            <select
              className="select w-full max-w-sm focus:outline-none"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option disabled selected>
                Pick your language
              </option>
              <option>Interslavic</option>
              <option>Rusyn</option>
            </select>
          </div>

          <div className="mb-4">
            <select
              className="select w-full max-w-sm focus:outline-none"
              onChange={(e) => setLevelGroup(e.target.value)}
              disabled={language === "" && true}
            >
              <option disabled selected>
                Pick your level group
              </option>
              <option>Pozdravi</option>
              <option>Osnovna rěčenja</option>
              <option>Putovanje</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-control w-full max-w-sm focus:outline-none">
              <div className="label">
                <span
                  // locked effect if level group not selected
                  className={`label-text ${levelGroup === "" && "opacity-25"}`}
                >
                  Title:
                </span>
              </div>
              <input
                type="text"
                placeholder={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full max-w-sm focus:outline-none"
                // locked effect if level group not selected
                disabled={levelGroup === "" && true}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-control w-full max-w-sm focus:outline-none">
              <div className="label">
                <span
                  // locked effect if level group not selected
                  className={`label-text ${levelGroup === "" && "opacity-25"}`}
                >
                  Description:
                </span>
              </div>
              <textarea
                placeholder={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered"
                // locked effect if level group not selected
                disabled={levelGroup === "" && true}
              />
            </label>
          </div>
          {steps.length === 0 ? (
            <div className="flex flex-col items-center gap-4 pt-4">
              <span
                // locked effect if level group not selected
                className={`text-center ${levelGroup === "" && "opacity-25"}`}
              >
                Add the first step using a template:
              </span>
              <button
                className={`${dela.className} btn btn-lg btn-secondary mt-2 transition-all`}
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                // locked effect if level group not selected
                disabled={levelGroup === "" && true}
              >
                {/* // locked effect if level group not selected */}
                {language === ""
                  ? "Please select a title to continue."
                  : levelGroup === ""
                  ? "Please select a level to continue."
                  : "Marketplace"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {steps.map((step: string, index: number) => (
                <div
                  key={index}
                  className="border rounded-xl flex items-center p-4"
                >
                  <button
                    className="btn btn-square bg-gray-100 rounded-l-xl"
                    onClick={() =>
                      // show modal to add step, per daisyUI docs
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-square bg-gray-100 ml-1"
                    onClick={() => {
                      // call function to remove step this button is with
                      removeStep(index);
                    }}
                  >
                    -
                  </button>
                  <div className="pl-4 text-xl">{step}</div>
                </div>
              ))}
              <button
                className={`${dela.className} btn btn-lg btn-secondary mt-2`}
                disabled={steps.length < 3 && true}
              >
                {steps.length < 3
                  ? "Please select 3 or more steps to continue..."
                  : "Continue"}
              </button>
            </div>
          )}
        </form>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-[80%] h-[75%]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-3xl text-center">Marketplace</h3>
          <p className="py-4 text-center">
            Welcome to the Marketplace, please pick a template:{" "}
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            {Templates.map((template, index) => {
              return (
                <div
                  key={index}
                  className="w-96 p-8 border rounded-lg relative"
                >
                  <Image src={image} alt="" />
                  <h1 className="text-center py-2 font-bold">
                    {template.title}
                  </h1>
                  <h2 className="text-sm">{template.description}</h2>
                  <div className="h-12">
                    <div
                      className="h-8 absolute bottom-2 right-2 btn btn-outline btn-secondary"
                      // steps.push(), but neccessarily complicated because we are using state
                      onClick={() => {
                        setSteps((prevSteps: any) => [
                          ...prevSteps,
                          `${template.title}`,
                        ]);
                        // close modal, as per daisyUI docs
                        document.getElementById("my_modal_3").close();
                      }}
                    >
                      Choose
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default">close</button>
        </form>
      </dialog>
    </div>
  );
}
