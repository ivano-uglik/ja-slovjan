export default function ProgressBar({
  size,
  className,
}: {
  size: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} mx-auto rounded-full h-9 w-[40rem] bg-[#E0E0E0] my-8`}
    >
      <div
        className={`rounded-l-full h-full bg-gradient-to-r from-primary to-secondary`}
        style={{ width: `${size}%` }}
      ></div>
    </div>
  );
}
