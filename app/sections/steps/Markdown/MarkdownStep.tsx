"use client";
import Markdown from "react-markdown";
import { decodeMarkdownFromJSON, encodeMarkdownForJSON } from "@/utils";

const MarkdownStep = ({ markdown }: { markdown: string }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Markdown className="prose mb-12 px-4 lg:px-0">
        {decodeMarkdownFromJSON(markdown)}
      </Markdown>
    </div>
  );
};

export default MarkdownStep;
