import React, { ReactNode, lazy, Suspense } from "react";
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
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...params} />
    </Suspense>
  );
};

export default Matcher;
