export default function CyrillicLatin4Chars({
  latinLetter,
  options,
}: {
  latinLetter: string;
  options: { text: string; isCorrect: boolean }[];
}) {
  return (
    <div className="content-wrap mx-auto ">
      <div>
        <h2 className="text-center text-5xl">
          Select the correct character for{" "}
          <span className="font-bold">{latinLetter}</span>
        </h2>
      </div>
      <div className="flex gap-4 justify-between items-center my-16">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className="p-12 rounded-3xl text-5xl border mx-auto hover:bg-slate-100 hover:opacity-80 cursor-pointer"
            >
              {/* <div className="border rounded-md w-min py-1 px-2">
                {index + 1}
              </div> */}
              <h2>{option.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
