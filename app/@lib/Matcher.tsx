import React, { ReactNode, lazy, Suspense } from "react";
import Loading from "../sections/Loading";
interface MatcherProps {
  component: string;
  params?: Record<string, any>;
  isInput: boolean;
}

const Matcher: React.FC<MatcherProps> = ({ component, params, isInput }) => {
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
      <Component {...params} />
    </Suspense>
  );
};

export default Matcher;
