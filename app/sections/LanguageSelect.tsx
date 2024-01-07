"use client";
import Image from "next/image";
import Croatia from "@/public/flags/croatia.svg";
import England from "@/public/flags/england.svg";
import Rusyn from "@/public/flags/rusyn.svg";
import { useState } from "react";

export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languageOptions = [
    { name: "Hrvatski", flag: Croatia },
    { name: "English", flag: England },
    { name: "Русиньскый", flag: Rusyn },
  ];

  return (
    <div className="content-wrap mx-auto">
      <h1 className={"text-center text-3xl font-bold pt-8"}>
        What is your native language?
      </h1>
      <h1 className={"text-center text-xl"}>Ktory jest tvoj rodny jezyk?</h1>
      <h1 className={"text-center text-xl"}>кторы јест твој родны језык?</h1>
      <div className="flex justify-center gap-8 pt-24 pb-16 flex-wrap">
        {languageOptions.map((language, index) => (
          <button
            key={index}
            className="py-4 px-16 border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:scale-105 transition-all rounded-xl"
            onClick={() => {
              setSelectedLanguage(language.name);
            }}
          >
            <Image
              src={language.flag}
              alt={language.name}
              className="aspect-square rounded-full w-32 object-cover object-center mx-auto"
            />
            <h2 className="text-center pt-4">{language.name}</h2>
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-wide btn-secondary btn-lg">Continue</button>
      </div>
      {selectedLanguage && (
        <div className="text-center pt-4">
          Selected Language: {selectedLanguage}
        </div>
      )}
    </div>
  );
}
