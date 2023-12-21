"use client";

import { useRouter } from "next/navigation";
import { letters } from "@/app/@lib/letters";
export default function Cyrillic() {
  const uniqueLevels = Array.from(
    new Set(letters.map((letter) => letter.level))
  ).sort((a, b) => a - b);

  const router = useRouter();
  return (
    <div>
      <div className="text-center content-wrap mx-auto">
        <h2 className="font-bold text-5xl pb-4 uppercase">Kiяilica</h2>
        <h3 className="pb-4">
          O 250 miliona ljudi koristajut kirilsko pismo. Spoznaj se so Kirilovom
          azbukoju tutdenj!
        </h3>
        <button className="btn btn-lg btn-secondary btn-wide mt-8">
          Започни!
        </button>
        <div className="py-16 flex flex-col gap-8">
          {uniqueLevels.map((level) => (
            <div key={level}>
              <h3 className="pb-8 text-3xl font-black">Level {level}</h3>
              <div className="flex gap-8 justify-center flex-wrap">
                {letters.map((letter, index: number) => {
                  if (letter.level === level) {
                    return (
                      <div
                        key={index}
                        className={`flex flex-col px-10 py-4 rounded-2xl border gap-2 cursor-pointer ${
                          letter.isLearned
                            ? "bg-slate-50 opacity-75 hover:opacity-50"
                            : "hover:opacity-75 shadow-md hover:shadow-lg transition-shadow duration-100 ease-out"
                        }`}
                        onClick={() => {
                          router.push(`cyrillic/task/${letter.id}`);
                        }}
                      >
                        <p className="text-3xl font-semibold">
                          {letter.cyrillic}
                        </p>
                        <p>{letter.latin}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
