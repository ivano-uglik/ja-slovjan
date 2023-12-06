export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold text-center">Pozdravi</h1>
        <div className="p-4 border rounded-3xl flex w-min justify-between gap-4 mx-auto">
          <span className="p-4 bg-secondary text-white rounded-xl text-xl">
            1
          </span>
          <span className="p-4 bg-secondary text-white rounded-xl text-xl">
            2
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold text-center">
          Osnovne rečenice / osnovna rěčenja
        </h1>
        <div className="p-4 border rounded-3xl flex w-min justify-between gap-4 mx-auto">
          <span className="p-4 bg-secondary text-white rounded-xl text-xl">
            1
          </span>
          <span className="p-4 border border-secondary text-secondary rounded-xl text-xl">
            2
          </span>
          <span className="p-4 border border-secondary text-secondary rounded-xl text-xl">
            3
          </span>
          <span className="p-4 border border-secondary text-secondary rounded-xl text-xl">
            4
          </span>
          <span className="p-4 border border-secondary text-secondary rounded-xl text-xl">
            5
          </span>
        </div>
      </div>
    </div>
  );
}
