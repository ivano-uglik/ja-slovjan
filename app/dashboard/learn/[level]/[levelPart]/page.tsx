"use client";
import Matcher from "@/app/@lib/Matcher";
import { createContext, useState } from "react";
import { Groups } from "@/app/@lib/Levels";

export const Context: any = createContext(0);

const findGroup = (groupName: string) => {
  return Groups.find((group) => group.group === groupName);
};

export default function Page({
  params,
}: {
  params: { level: string; levelPart: string };
}) {
  const [step, setStep] = useState(0);
  const selectedGroup = findGroup(params.level);

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
      <div className="text-center text-3xl font-bold text-color-not-active">
        {decodeURIComponent(params.level)}{" "}
        {decodeURIComponent(params.levelPart)}
      </div>
      <Context.Provider value={[step, setStep]}>
        <Matcher
          component={
            selectedGroup.levels[Number(params.levelPart) - 1].steps[step]
              .component
          }
          params={
            selectedGroup.levels[Number(params.levelPart) - 1].steps[step]
              .params
          }
        />
      </Context.Provider>
    </div>
  );
}
