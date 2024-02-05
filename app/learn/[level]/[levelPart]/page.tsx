"use client";
import Matcher from "@/app/@lib/Matcher";
import { createContext, useState } from "react";
import { Groups } from "@/app/@lib/Levels";
import Navbar from "@/app/sections/levels/LevelNavbar";
import LevelStateContextProvider, {
  useLevelState,
} from "@/context/LevelStateContext";

export const Context: any = createContext(0);

const findGroup = (groupName: string) => {
  return Groups.find((group) => group.id === groupName);
};

export default function Page({
  params,
}: {
  params: { level: string; levelPart: string };
}) {
  const [step, setStep] = useState(0);
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
    <div>
      <Navbar explainer="Choose the correct image." />
      <LevelStateContextProvider>
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
            isInput={false}
            order={selectedGroup.levels[Number(params.levelPart) - 1].steps}
          />
        </Context.Provider>
      </LevelStateContextProvider>
    </div>
  );
}
