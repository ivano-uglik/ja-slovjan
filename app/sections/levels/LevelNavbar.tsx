import Logo from "@/public/logo-variants/transparent-coloured.svg";
import MascotFinder from "@/public/mascot-finder.svg";
import Image from "next/image";
import Link from "next/link";
import { IoExit } from "react-icons/io5";
export default function Navbar({ explainer }: { explainer: string }) {
  return (
    <div className="flex justify-center items-center bg-white px-2 lg:px-8 py-4">
      <div className="w-1/3">
        <Link href="/dashboard">
          <button className="btn btn-secondary flex justify-between gap-4">
            <span>Vzad na Početkovu</span>
            <IoExit size={25} />
          </button>
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center text-center w-1/3">
        <div className="w-16">
          <Image src={MascotFinder} alt="Medvjed" />
        </div>
        <h2>{explainer}</h2>
      </div>
      <div className="w-1/3 flex justify-end">
        <Image src={Logo} alt="Logo" className="w-24" />
      </div>
    </div>
  );
}
