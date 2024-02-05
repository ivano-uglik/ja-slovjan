"use client";

import React, { ReactNode, lazy, Suspense, useContext } from "react";
import { useLevelState } from "@/context/LevelStateContext";
import ProgressBar from "../sections/ProgressBar";
import CompletedLevelSkeleton from "../sections/Skeletons/CompletedLevelSkeleton";
import Completed from "../sections/CompletedLevel";
interface MatcherProps {
  component: string;
  params?: Record<string, any>;
  isInput: boolean;
  order?: any;
}

const Matcher: React.FC<MatcherProps> = ({
  component,
  params,
  isInput,
  order,
}) => {
  const levelContext = useLevelState();
  {
    !isInput && levelContext.setSteps(order.length);
  }

  const Component = lazy(
    () =>
      import(
        `../sections/steps/${component}/${component}${
          isInput ? "Input.tsx" : "Step.tsx"
        }`
      )
  );

  return (
    <Suspense fallback={<CompletedLevelSkeleton />}>
      {!isInput && (
        <ProgressBar
          size={levelContext.progressFormula.toString()}
          className="my-8"
        />
      )}
      <Component {...params} {...(isInput && { order })} />
      {levelContext.correct && <Completed />}
    </Suspense>
  );
};

export default Matcher;
