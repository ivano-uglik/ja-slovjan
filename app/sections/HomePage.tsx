import Link from "next/link";
import { Groups } from "../@lib/Levels";

export default function HomePage({}: {}) {
  return (
    <div className="flex flex-col gap-8 content-wrap mx-auto pb-48">
      {Groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h1 className="text-xl font-bold text-center">{group.group}</h1>
          <div className="flex justify-center gap-4 pt-8 p-4">
            {group.levels.map((level, levelIndex) => (
              <Link
                key={levelIndex}
                href={`dashboard/learn/${group.id}/${levelIndex + 1}`}
              >
                <div
                  className={`btn btn-square btn-lg ${
                    level.isCompleted ? "btn-secondary" : "btn-outline"
                  }`}
                >
                  {levelIndex + 1}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
