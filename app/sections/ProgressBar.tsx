export default function ProgressBar({ size }: { size: string }) {
  return (
    <div className="my-8 mx-auto rounded-full h-7 w-[40rem] bg-[#E0E0E0]">
      <div
        className={`rounded-l-full h-full bg-gradient-to-r from-primary to-secondary ${size}`}
      ></div>
    </div>
  );
}
