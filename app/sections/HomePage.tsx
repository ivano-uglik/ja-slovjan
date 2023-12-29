export default function HomePage({
  levels,
}: {
  levels: { name: string; stages: number; completedStages: number }[];
}) {
  return (
    <div className="flex flex-col gap-16 content-wrap mx-auto pb-48">
      {levels.map((level, index) => (
        <div
          key={index}
          className={`flex flex-col gap-8 items-center ${
            level.completedStages === 0 ? "opacity-50" : ""
          }`}>
          <h1 className="text-3xl font-bold text-center">{level.name}</h1>
          <div className="p-4 border rounded-3xl flex justify-center gap-4 md:mx-24 xl:mx-48 flex-wrap">
            {Array.from({ length: level.stages }).map((_, stageIndex) => (
              <a
                href={`/dashboard/learn/${level.name}/${stageIndex + 1}`}
                key={stageIndex}
                className={`p-4 w-16 text-center ${
                  stageIndex < level.completedStages
                    ? "bg-secondary text-white hover:bg-neutral "
                    : "border border-secondary text-secondary"
                } rounded-xl text-xl cursor-pointer`}>
                {stageIndex + 1}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
