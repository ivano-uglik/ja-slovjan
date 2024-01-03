"use client";
import { useLevelBuilder } from "@/context/LevelBuilderContext";

export default function ContinueButton({
  className,
  isDisabled,
  onNext,
}: {
  className?: string;
  isDisabled?: boolean;
  onNext?: () => void;
}) {
  const { steps, stepsCompleted, setStepsCompleted } = useLevelBuilder();

  return (
    <button
      type="submit"
      value="Continue"
      className={`fixed btn btn-secondary mb-8 mr-8 bottom-0 right-0 ${
        isDisabled && "btn-disabled"
      }`}
      onClick={() => setStepsCompleted((current) => current + 1)}>
      {stepsCompleted === steps.length ? "complete" : "next"}
    </button>
  );
}
