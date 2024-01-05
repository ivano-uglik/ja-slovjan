import React, { ReactNode, lazy, Suspense } from "react";
import Loading from "../sections/Loading";
import Loading from "../sections/Loading";
interface MatcherProps {
  component: string;
  params?: Record<string, any>;
  isInput: boolean;
  order?: number;
}

const Matcher: React.FC<MatcherProps> = ({
  component,
  params,
  isInput,
  order,
}) => {
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
      <Component {...params} {...(isInput && { order })} />
    </Suspense>
  );
};

export default Matcher;
