"use client";
import Markdown from "react-markdown";
import { decodeMarkdownFromJSON, encodeMarkdownForJSON } from "@/utils";

const MarkdownStep = ({ markdown }: { markdown: string }) => {
  return (
    <div className="flex justify-center w-full flex-col items-center">
      <Markdown className="prose">{decodeMarkdownFromJSON(markdown)}</Markdown>
    </div>
  );
};

export default MarkdownStep;
