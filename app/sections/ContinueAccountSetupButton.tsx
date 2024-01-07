import Link from "next/link";
import { dela } from "../@lib/Fonts";

export default function ContinueAccountSetupButton({
  className,
  isDisabled = false,
  link,
}: {
  className?: string;
  isDisabled?: boolean;
  link: string;
}) {
  return (
    <Link href={`${link}`} className="w-full text-center">
      <button
        className={`${dela.className} ${className} btn btn-secondary btn-lg w-full max-w-xs`}
        disabled={isDisabled}
      >
        Nastavi
      </button>
    </Link>
  );
}
