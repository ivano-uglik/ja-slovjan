export default function CyrillicLatin({
  cyrillicLetter,
  options,
}: {
  cyrillicLetter: string;
  options: { text: string; isCorrect: boolean }[];
}) {
  return (
    <div className="content-wrap mx-auto ">
      <div>
        <h2 className="text-center text-5xl font-bold">
          What sound does this letter make?
        </h2>
      </div>
      <div className="p-16 px-20 rounded-3xl text-[5rem] border w-min mx-auto my-16">
        <span>{cyrillicLetter}</span>
      </div>
      <div className="flex justify-around">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 items-center p-4 rounded-xl border text-xl hover:bg-slate-100 hover:opacity-80 cursor-pointer"
            >
              <div className="border rounded-md py-1 px-2">{index + 1}</div>
              <span>{option.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
