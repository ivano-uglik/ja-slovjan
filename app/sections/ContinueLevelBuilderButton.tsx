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
  const {
    stepTemplates,
    stepsCompleted,
    setStepsCompleted,
    createLevel,
    setProgressFormula,
  } = useLevelBuilder();

  const handleNext = async () => {
    if (onNext) onNext();
    setProgressFormula((stepsCompleted / stepTemplates.length) * 100);
    if (stepsCompleted === stepTemplates.length) {
      await createLevel();
    } else {
      setStepsCompleted((current) => current + 1);
    }
  };

  return (
    <button
      type="submit"
      value="Continue"
      className={`fixed btn btn-primary mb-8 mr-8 bottom-0 right-0 ${
        isDisabled && "btn-disabled"
      }`}
      onClick={handleNext}
    >
      {stepsCompleted === stepTemplates.length ? "complete" : "next"}
    </button>
  );
}
