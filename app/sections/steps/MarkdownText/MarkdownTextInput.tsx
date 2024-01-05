"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
export default function MarkdownTextInput() {
  const [text, setText] = useState("");
  const [sideView, isSideView] = useState(true);
  return (
    <div
      className={`w-screen pt-8 flex ${
        sideView ? "" : "flex-col items-center"
      } justify-center gap-8`}
    >
      <div className={`${sideView ? "w-1/3" : "w-full h-[25rem]"} relative`}>
        <textarea
          className="textarea textarea-bordered w-full h-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Lorem ipsum..."
        />
        <button
          className="btn btn-sm btn-circle absolute right-4 top-4"
          onClick={() => {
            sideView ? isSideView(false) : isSideView(true);
          }}
        >
          !
        </button>
      </div>
      <ReactMarkdown className="prose prose-slate p-4 bg-gray-100 w-2/3">
        {text}
      </ReactMarkdown>
    </div>
  );
}
