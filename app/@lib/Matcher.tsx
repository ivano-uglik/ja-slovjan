"use client";

import React, { ReactNode, lazy, Suspense, useContext } from "react";
import { useLevelState } from "@/context/LevelStateContext";
import ProgressBar from "../sections/ProgressBar";
import CompletedLevelSkeleton from "../sections/Skeletons/CompletedLevelSkeleton";
import { correctContext } from "../learn/[level]/[levelPart]/page";
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
  const context = useLevelState();
  {
    !isInput && context.setSteps(order.length);
  }

  const [correct, isCorrect]: any = useContext(correctContext);

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
          size={context.progressFormula.toString()}
          className="my-8"
        />
      )}
      <Component {...params} {...(isInput && { order })} />
      {correct && <Completed />}
    </Suspense>
  );
};

export default Matcher;
