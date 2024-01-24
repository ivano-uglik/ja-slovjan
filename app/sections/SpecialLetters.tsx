export default function SpecialLetters({
  className,
  isCaps,
}: {
  className?: string;
  isCaps: boolean;
}) {
  //   const isCaps: boolean = e.getModifierState("CapsLock");
  return (
    <div className={`${className} flex justify-center gap-8`}>
      <button className="btn btn-primary btn-outline text-2xl">
        {isCaps ? "Ě" : "ě"}
      </button>
      <button className="btn btn-primary btn-outline text-2xl">
        {isCaps ? "Č" : "č"}
      </button>
      <button className="btn btn-primary btn-outline text-2xl">
        {isCaps ? "Š" : "š"}
      </button>
      <button className="btn btn-primary btn-outline text-2xl">
        {isCaps ? "Ž" : "ž"}
      </button>
    </div>
  );
}
