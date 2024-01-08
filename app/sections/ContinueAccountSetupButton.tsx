import Link from "next/link";
import { dela } from "../@lib/Fonts";

export default function ContinueAccountSetupButton({
  className,
  isDisabled = false,
  link,
  onClick,
}: {
  className?: string;
  isDisabled?: boolean;
  link: string;
  onClick?: () => void;
}) {
  return (
    <Link href={`${link}`} className="w-full text-center">
      <button
        className={`${dela.className} ${className} btn btn-secondary btn-lg w-full max-w-xs`}
        disabled={isDisabled}
        onClick={onClick}
      >
        Nastavi
      </button>
    </Link>
  );
}
