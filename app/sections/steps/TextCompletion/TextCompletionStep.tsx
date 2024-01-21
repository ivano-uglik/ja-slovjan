"use client";

import { useContext, useState } from "react";
import Completed from "../../CompletedLevel";
import { correctContext } from "@/app/learn/[level]/[levelPart]/page";
import ProgressBar from "../../ProgressBar";
import UnderlineToInput from "../../UnderlineInput";
import SpecialLetters from "../../SpecialLetters";
export default function TextCompletionStep({
  title,
  titleTranslated,
}: {
  title: string;
  titleTranslated: string;
}) {
  const [correct, isCorrect]: any = useContext(correctContext);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <ProgressBar size={"w-[45%]"} />
      <div className="flex justify-center">
        <UnderlineToInput
          inputString="Mudri ljudi _znajut_ , že ne _znajut_ . Drugi ljudi ne _znajut_ , že ne _znajut_ ."
          nativeLanguage="Mudri ljudi znaju da ne znaju. Drugi ljudi ne znaju da ne znaju."
        />
      </div>
      <SpecialLetters />
      {correct && <Completed />}
    </div>
  );
}
