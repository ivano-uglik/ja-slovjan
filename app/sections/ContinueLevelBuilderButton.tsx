"use client";

import { useContext } from "react";
import { Context } from "../level-builder/builder/page";

export default function ContinueButton() {
  const [stepsCompleted, setStepsCompleted] = useContext(Context);
  return (
    <input
      type="submit"
      value="Continue"
      className="btn btn-lg btn-secondary btn-wide mt-8"
      onClick={() => setStepsCompleted(stepsCompleted + 1)}
    />
  );
}
