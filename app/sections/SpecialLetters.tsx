export default function SpecialLetters() {
  //   const isCaps: boolean = e.getModifierState("CapsLock");
  const isCaps = false;
  return (
    <div className="flex justify-center gap-8 py-4">
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
