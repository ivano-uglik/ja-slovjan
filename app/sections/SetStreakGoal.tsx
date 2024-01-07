"use client";
import { useState } from "react";
import { dela } from "../@lib/Fonts";
import { HiFire } from "react-icons/hi";

export default function SetStreakGoal() {
  const days = [
    { name: "Ne dodaj streak", color: "hidden" },
    { name: "3 dana", color: "" },
    { name: "7 dana", color: "text-red-300" },
    { name: "14 dana", color: "text-red-500 text-xl" },
    { name: "30 dana", color: "text-yellow-300 text-3xl" },
  ];
  const [streak, setStreak] = useState("");
  return (
    <div className="content-wrap mx-auto">
      <h1 className="text-center pt-8 text-3xl font-bold">
        Dodaj streak cilj:
      </h1>
      <h2 className="text-center pb-8 text-xl font-medium">
        Streak se dobiva rješavajem levela na Ja, Slovjanu svaki dan.
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 justify-center flex-wrap px-4 lg:px-0">
        {days.map((day, index) => {
          return (
            <button
              key={index}
              className={`${
                dela.className
              } btn btn-lg btn-secondary rounded-full transition-all ${
                streak === day.name && "btn-active"
              }`}
              onClick={() => {
                setStreak(day.name);
              }}
            >
              <div className={day.color}>
                <HiFire />
              </div>
              {day.name}
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
