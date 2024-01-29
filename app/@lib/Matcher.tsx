import React, { ReactNode, lazy, Suspense } from "react";
import Loading from "../sections/Loading";
import { useLevelState } from "@/context/LevelStateContext";
import ProgressBar from "../sections/ProgressBar";
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
  // setSteps(order.length);
  // console.log("steps: ", steps);
  const Component = lazy(
    () =>
      import(
        `../sections/steps/${component}/${component}${
          isInput ? "Input.tsx" : "Step.tsx"
        }`
      )
  );

  return (
    <Suspense fallback={<Loading />}>
      {!isInput && (
        <ProgressBar
          size={context.progressFormula.toString()}
          className="my-8"
        />
      )}
      <Component {...params} {...(isInput && { order })} />
    </Suspense>
  );
};

export default Matcher;
