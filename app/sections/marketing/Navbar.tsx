import { dela } from "@/app/@lib/Fonts";
import logo from "@/public/logo-variants/transparent-coloured-white.svg";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between xl:justify-around items-center fixed top-0 w-full px-4 md:px-8 xl:px-64 py-4 text-white">
      <Image src={logo} alt="Ja, Slovjan" className="w-24" />
      <ul className={`${dela.className} hidden xl:flex justify-around w-2/3 `}>
        <li>
          <Link href="#the-idea">the idea</Link>
        </li>
        <li>
          <Link href="#features">features</Link>
        </li>
        <li>
          <Link href="#how-it-works">contribute</Link>
        </li>
        <li>
          <Link href="#faq">faq</Link>
        </li>
        <li>
          <Link href="#blog">blog</Link>
        </li>
        <li>
          <Link href="#contact-us">contact us</Link>
        </li>
      </ul>
      <div
        className={`${dela.className} btn bg-white text-primary px-4 py-2 rounded-full cursor-pointer`}
      >
        <Link href="/dashboard">Get Started</Link>
      </div>
    </div>
  );
}
