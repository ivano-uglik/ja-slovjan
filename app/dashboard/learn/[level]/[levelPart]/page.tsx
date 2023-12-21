// get level and steps for each level

import Latin1 from "../../steps/Latin1";

export default function Page({
  params,
}: {
  params: { level: string; levelPart: string };
}) {
  return (
    <div>
      <div className="text-center text-3xl font-bold">
        {decodeURIComponent(params.level)}{" "}
        {decodeURIComponent(params.levelPart)}
      </div>
      <Latin1
        title="“Hlapčik jedaje mrkvu.”"
        options={[
          { string: "Dječak jede mrkvu.", isCorrect: true },
          { string: "Hladnjak sadrži mrkvu.", isCorrect: false },
          { string: "Sok je od mrkve.", isCorrect: false },
        ]}
      />
    </div>
  );
}
