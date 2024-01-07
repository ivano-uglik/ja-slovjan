"use client";
import { useState } from "react";
import { dela } from "../@lib/Fonts";

export default function HowMuchTimeToSpend() {
  const time = [
    { name: "5 min" },
    { name: "10 min" },
    { name: "15 min" },
    { name: "30+ min" },
  ];
  const [timeLength, setTimeLength] = useState("");
  return (
    <div className="content-wrap mx-auto">
      <h1 className="text-center py-8 text-3xl font-bold">
        Koliko vremena želiš provesti na Ja, Slovjan na dan?
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 justify-center flex-wrap px-4 lg:px-0">
        {time.map((text, index) => {
          return (
            <button
              key={index}
              className={`${
                dela.className
              } btn btn-lg btn-secondary rounded-full transition-all ${
                timeLength === text.name && "btn-active"
              }`}
              onClick={() => {
                setTimeLength(text.name);
              }}
            >
              {text.name}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center py-16">
        <button
          className={`${dela.className} btn btn-secondary btn-lg btn-wide text-center`}
        >
          Nastavi
        </button>
      </div>
    </div>
  );
}
