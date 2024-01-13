"use client";

import { letters } from "@/app/@lib/letters";
import Link from "next/link";
import { dela } from "@/app/@lib/Fonts";
export default function Cyrillic() {
  const uniqueLevels = Array.from(
    new Set(letters.map((letter) => letter.level))
  ).sort((a, b) => a - b);

  // we'll get this from a database, fetching from the same object with the steps and everything
  const Levels = [
    {
      group: 1,
      levels: [
        {
          level: 1,
          steps: [{ step: 1, component: "placeholder!" }],
        },
        {
          level: 2,
          steps: [{ step: 1, component: "placeholder!" }],
        },
        {
          level: 3,
          steps: [{ step: 1, component: "placeholder!" }],
        },
        {
          level: 4,
          steps: [{ step: 1, component: "placeholder!" }],
        },
        {
          level: 5,
          steps: [{ step: 1, component: "placeholder!" }],
        },
      ],
    },
    {
      group: 2,
      levels: [
        {
          level: 1,
          steps: [{ step: 1, component: "placeholder!" }],
        },
        {
          level: 2,
          steps: [{ step: 1, component: "placeholder!" }],
        },
        {
          level: 3,
          steps: [{ step: 1, component: "placeholder!" }],
        },
      ],
    },
  ];
  return (
    <div>
      <div className="text-center content-wrap mx-auto">
        <h2 className={`${dela.className} text-5xl pb-4`}>Kirilica</h2>
        <h3 className="pb-4">
          O 250 miliona ljudi koristajut kirilsko pismo. Spoznaj se so Kirilovom
          azbukoju tutdenj!
        </h3>
        <button className="btn btn-lg btn-primary btn-wide mt-8">
          Започни уравењ 1!
        </button>
        <div className="py-16 flex flex-col gap-8">
          {uniqueLevels.map((level) => (
            <div key={level}>
              <h3 className="pb-8 text-3xl font-black">Level {level}</h3>
              <div className="flex gap-8 justify-center flex-wrap">
                {letters.map((letter, index: number) => {
                  if (letter.level === level) {
                    return (
                      <Link
                        key={index}
                        href={`/dashboard/learn/cyrillic/${letter.id}`}
                      >
                        <div
                          className={`flex flex-col px-10 py-4 rounded-2xl border gap-2 cursor-pointer ${
                            letter.isLearned
                              ? "bg-slate-50 opacity-75 hover:opacity-50"
                              : "hover:opacity-75 shadow-md hover:shadow-lg transition-shadow duration-100 ease-out"
                          }`}
                        >
                          <p className="text-3xl font-semibold">
                            {letter.cyrillic}
                          </p>
                          <p>{letter.latin}</p>
                        </div>
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
              {Levels.map((OneLevel, levelIndex) => {
                if (level - 1 === levelIndex) {
                  return (
                    <div
                      key={levelIndex}
                      className="flex justify-center gap-4 flex-wrap mt-8"
                    >
                      {OneLevel.levels.map((_, i) => (
                        <Link
                          href={`cyrillic/${OneLevel.group}/${i + 1}`}
                          key={i}
                          className="p-4 w-16 text-center border border-primary text-primary rounded-xl text-xl cursor-pointer"
                        >
                          {i + 1}
                        </Link>
                      ))}
                    </div>
                  );
                }
                return null; // or any other fallback if needed
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
