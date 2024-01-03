// /level-builder/builder, this component is the first step in building a level, after the introduction in /level-builder.

// when we click continue, hide everything, replace the "Welcome to the Level Builder" and "Let's go" signs
// with the title and description the user put in
// go to the first step submitted in the steps array
//  use matcher() to find the component
// continue to next step, saving the props in state/context, go to the second step in the steps array
// use matcher() to find the component...

// code would probably look a lot cleaner if the components shown after clicking "Continue" were in another file
// but that would require messing around with state and props and stuff
// which i dont want to spend a lot of time doing,
// especially for an MVP

"use client";
import { dela } from "@/app/@lib/Fonts";
import { Templates } from "@/app/@lib/Templates";
import image from "@/public/level-builder-placeholder.svg";
import Image from "next/image";
import Matcher from "@/app/@lib/Matcher";
import { useLevelBuilder } from "@/context/LevelBuilderContext";
import { useEffect } from "react";

export default function Builder() {
  const context = useLevelBuilder();

  useEffect(() => {
    console.log(context);
  }, [context]);

  // remove step that is added from the marketplace (minus button)
  const removeStep = (indexToRemove: number) => {
    context.setStepTemplates((prevSteps: any) =>
      prevSteps.filter((_, index: number) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <div className="mx-auto px-4 lg:px-0">
        <div className="text-center">
          <h1 className={`${dela.className} pt-16 pb-4 text-3xl`}>
            {context.stepsCompleted === 0
              ? "Welcome to the LevelBuilder!"
              : context.title}
          </h1>
          <h2 className="mx-auto">
            {context.stepsCompleted === 0
              ? "Let's start."
              : context.description}
          </h2>
          {/* adding breadcrumbs functionality, per daisyUI docs*/}
          {context.stepsCompleted !== 0 && (
            <ul className="steps py-16">
              {/* adding completed step "Setup" */}
              <li className="step step-secondary text-sm">Setup</li>
              {context.steps.map((step: any, index: number) => {
                return (
                  // adding each step we added in the levelbuilder
                  // the ternary is if we are on the current step, make it coloured
                  <li
                    className={`step text-sm ${
                      context.stepsCompleted === index + 1 && "step-secondary"
                    } ${context.stepsCompleted > index && "step-secondary"}`}
                    key={index}>
                    {step.title}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {/* when continue is clicked, display the components in order  */}
        {context.stepsCompleted === 0 ? (
          <form
            className="lg:w-96 mx-auto py-8"
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <div className="mb-4">
              <select
                className="select w-full max-w-sm focus:outline-none"
                onChange={(e) => context.setLanguage(e.target.value)}>
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
                onChange={(e) => context.setLevelGroup(e.target.value)}
                disabled={context.language === "" && true}>
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
                    className={`label-text ${
                      context.levelGroup === "" && "opacity-25"
                    }`}>
                    Title:
                  </span>
                </div>
                <input
                  type="text"
                  placeholder={context.title}
                  onChange={(e) => context.setTitle(e.target.value)}
                  className="input input-bordered w-full max-w-sm focus:outline-none"
                  // locked effect if level group not selected
                  disabled={context.levelGroup === "" && true}
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="form-control w-full max-w-sm focus:outline-none">
                <div className="label">
                  <span
                    // locked effect if level group not selected
                    className={`label-text ${
                      context.levelGroup === "" && "opacity-25"
                    }`}>
                    Description:
                  </span>
                </div>
                <textarea
                  placeholder={context.description}
                  onChange={(e) => context.setDescription(e.target.value)}
                  className="textarea textarea-bordered"
                  // locked effect if level group not selected
                  disabled={context.levelGroup === "" && true}
                />
              </label>
            </div>
            {context.stepTemplates.length === 0 ? (
              <div className="flex flex-col items-center gap-4 pt-4">
                <span
                  // locked effect if level group not selected
                  className={`text-center ${
                    context.levelGroup === "" && "opacity-25"
                  }`}>
                  Add the first step using a template:
                </span>
                <button
                  className={`${dela.className} btn btn-lg btn-secondary mt-2 transition-all`}
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  // locked effect if level group not selected
                  disabled={context.levelGroup === "" && true}>
                  {/* // locked effect if level group not selected */}
                  {context.language === ""
                    ? "Please select a title to continue."
                    : context.levelGroup === ""
                    ? "Please select a level to continue."
                    : "Marketplace"}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {context.stepTemplates.map((step: any, index: number) => (
                  <div
                    key={index}
                    className="border rounded-xl flex items-center p-4">
                    <button
                      className="btn btn-square bg-gray-100 ml-1"
                      onClick={() => {
                        // call function to remove step this button is with
                        removeStep(index);
                      }}>
                      -
                    </button>
                    <div className="pl-4 text-xl">{step.component}</div>
                  </div>
                ))}
                <button
                  className="rounded-xl text-3xl font-bold p-2 bg-color-active text-white"
                  onClick={() =>
                    // show modal to add step, per daisyUI docs
                    document.getElementById("my_modal_3").showModal()
                  }>
                  +
                </button>
                <button
                  className={`${dela.className} btn btn-lg btn-secondary mt-2`}
                  disabled={context.stepTemplates.length < 3 && true}
                  onClick={() => context.setStepsCompleted(1)}>
                  {context.stepTemplates.length < 3
                    ? "Please select 3 or more steps to continue..."
                    : "Continue"}
                </button>
              </div>
            )}
          </form>
        ) : (
          <Matcher
            component={
              context.stepTemplates[context.stepsCompleted - 1].component
            }
            isInput={true}
          />
        )}
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
                  className="w-96 p-8 border rounded-lg relative">
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
                        context.setStepTemplates((prevSteps: any) => [
                          ...prevSteps,
                          template.template,
                        ]);
                        // close modal, as per daisyUI docs
                        document.getElementById("my_modal_3").close();
                      }}>
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
