"use client";
import Matcher from "@/app/@lib/Matcher";
import { createContext, useState } from "react";
import { Groups } from "@/app/@lib/Levels";

export const Context: any = createContext(0);
export const correctContext: any = createContext(false);

const findGroup = (groupName: string) => {
  return Groups.find((group) => group.id === groupName);
};

export default function Page({
  params,
}: {
  params: { level: string; levelPart: string };
}) {
  const [step, setStep] = useState(0);
  const [correct, isCorrect] = useState(false);
  const selectedGroup = findGroup(decodeURIComponent(params.level));

  if (!selectedGroup) {
    return <div>Error: Group not found</div>;
  }

  const selectedLevel = selectedGroup.levels[Number(params.levelPart) - 1];
  if (
    !selectedLevel ||
    !selectedLevel.steps[step] ||
    !selectedLevel.steps[step].component
  ) {
    return <div>Error: Component not found</div>;
  }

  return (
    <div className="h-full">
      <div className="hidden text-center text-3xl font-bold text-color-not-active">
        {selectedGroup.group}
      </div>
      <div className="hidden text-center text-3xl font-bold text-color-not-active pt-2">
        Uravenj {decodeURIComponent(params.levelPart)}
      </div>
      <Context.Provider value={[step, setStep]}>
        <correctContext.Provider value={[correct, isCorrect]}>
          <Matcher
            component={
              selectedGroup.levels[Number(params.levelPart) - 1].steps[step]
                .component
            }
            params={
              selectedGroup.levels[Number(params.levelPart) - 1].steps[step]
                .params
            }
            isInput={false}
          />
        </correctContext.Provider>
      </Context.Provider>
    </div>
  );
}
