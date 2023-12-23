import { Dela_Gothic_One } from "next/font/google";
import logo from "@/public/logo-variants/transparent-coloured-white.svg";
import Image from "next/image";
import Link from "next/link";
const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });
export default function Navbar() {
  return (
    <div className="flex justify-around items-center fixed top-0 w-full px-64 py-4 text-white">
      <div>
        <Image src={logo} alt="Ja, Slovjan" className="w-24" />
      </div>
      <ul className={`${dela.className} hidden lg:flex justify-around w-2/3 `}>
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
        className={`${dela.className} hidden lg:block bg-white text-color-not-active px-4 py-2 rounded-full cursor-pointer`}
      >
        <Link href="/dashboard">Get Started</Link>
      </div>
    </div>
  );
}
