"use client";
import Markdown from "react-markdown";
import { decodeMarkdownFromJSON, encodeMarkdownForJSON } from "@/utils";
import { dela } from "@/app/@lib/Fonts";
import { useLevelState } from "@/context/LevelStateContext";

const MarkdownStep = ({ markdown }: { markdown: string }) => {
  const { correct, isCorrect } = useLevelState();
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
