"use client";
import Markdown from "react-markdown";
import { decodeMarkdownFromJSON, encodeMarkdownForJSON } from "@/utils";
import { useContext } from "react";
import { correctContext } from "@/app/learn/[level]/[levelPart]/page";
import { dela } from "@/app/@lib/Fonts";

const MarkdownStep = ({ markdown }: { markdown: string }) => {
  const [correct, isCorrect]: any = useContext(correctContext);
  return (
    <div className="flex w-full flex-col items-center">
      <Markdown className="prose max-w-[] mb-12 px-4 lg:px-0">
        {decodeMarkdownFromJSON(markdown)}
      </Markdown>
      <button
        className={`${dela.className} btn btn-primary btn-lg w-full max-w-xs mt-16`}
        onClick={() => {
          isCorrect(true);
        }}
      >
        Nastavi
      </button>
    </div>
  );
};

export default MarkdownStep;
