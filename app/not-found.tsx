import Medvjed from "@/public/medvjed-confused.svg";
import Image from "next/image";
import { dela } from "./@lib/Fonts";

export default function NotFound() {
  return (
    <div className="bg-gradient h-screen w-screen overflow-hidden flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-64 px-4">
      <div className={`${dela.className} text-white`}>
        <h1 className="text-6xl md:text-9xl text-center xl:text-[16rem]">
          404
        </h1>
        <h2 className="text-2xl md:text-5xl text-center">Medvěd is lost.</h2>
        <button className="bg-secondary py-5 px-8 md:px-24 rounded-full text-center mx-auto flex justify-self-center self-center my-8 text-2xl">
          Go Home
        </button>
      </div>
      <Image
        src={Medvjed}
        alt="Medvěd is lost."
        className="w-64 xl:w-[25rem]"
      />
    </div>
  );
}
