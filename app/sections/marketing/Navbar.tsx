import { dela } from "@/app/@lib/Fonts";
import logo from "@/public/logo-variants/transparent-coloured-white.svg";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-around items-center fixed top-0 w-full lg:px-64 py-4 text-white">
      <Image src={logo} alt="Ja, Slovjan" className="w-24" />
      <ul className={`${dela.className} hidden xl:flex justify-around w-2/3 `}>
        <li>
          <Link href="#the-idea">the idea</Link>
        </li>
        <li>
          <Link href="#features">features</Link>
        </li>
        <li>
          <Link href="#how-it-works">how it works</Link>
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
        className={`${dela.className} bg-white text-color-not-active px-4 py-2 rounded-full cursor-pointer`}
      >
        <Link href="/dashboard">Get Started</Link>
      </div>
    </div>
  );
}
