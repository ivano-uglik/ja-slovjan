// get level and steps for each level

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
    </div>
  );
}
