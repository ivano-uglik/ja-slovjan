"use client";

import React, { useState } from "react";
import { Templates } from "@/app/@lib/Templates";
import GuessCyrillicLetterStep from "@/app/sections/steps/cyrillic/GuessCyrillicLetterStep";

const Template = ({ params }: { params: { template: any } }) => {
  const findTemplate = (templateName: string) => {
    return Templates.find((t) => t.template === templateName);
  };

  const selectedTemplate = findTemplate(params.template);
  const [formData, setFormData] = useState({});

  if (!selectedTemplate) {
    return <div className="text-center">Template not found</div>;
  }

  function IdentifyTemplate() {
    if (params.template === "TranslateSentence.tsx") {
      return "todo";
    } else if (params.template === "TextCompletionStep.tsx") {
      return "todo";
    } else if (params.template === "ImageSelectStep.tsx") {
      return "todo";
    } else if (params.template === "GuessCyrillicLetterStep.tsx") {
      return "todo";
    } else if (params.template === "GuessLatinLetterStep.tsx") {
      return "todo";
    } else {
      return <div className="text-center">Template not recognized</div>;
    }
  }

  return (
    <div className="content-wrap mx-auto">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl text-center py-8 font-bold">
          {selectedTemplate.title}
        </h1>
        <p className="text-center">{selectedTemplate.description}</p>
        {IdentifyTemplate()}
      </div>
    </div>
  );
};

export default Template;
