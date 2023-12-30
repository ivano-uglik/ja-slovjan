import React, { ReactNode, lazy, Suspense } from "react";
interface MatcherProps {
  component: string;
  params?: Record<string, any>;
}

const Matcher: React.FC<MatcherProps> = ({ component, params }) => {
  const Component = lazy(
    () => import(`../sections/steps/${component}/${component}Step.tsx`)
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...params} />
    </Suspense>
  );
};

export default Matcher;
