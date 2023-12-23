import { Dela_Gothic_One } from "next/font/google";
import Image from "next/image";
import bear from "@/public/svg/bear.svg";
import Link from "next/link";

const dela = Dela_Gothic_One({ subsets: ["latin", "cyrillic"], weight: "400" });

export default function Hero() {
  return (
    <div className="flex flex-col lg:h-screen bg-mountain pt-20 pb-32 lg:pb-0">
      <div className="basis-1/2 flex flex-col justify-around items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className={`${dela.className} text-5xl lg:text-[5rem]`}>
              Я, Словян
            </h1>
            <h2 className="lg:text-lg font-bold opacity-50">
              - од Словјана, до Словјана -
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2
            className={`${dela.className} text-xl lg:text-2xl text-center pb-4`}
          >
            A Slavic language, without starting from scratch.
          </h2>
          <h3 className="lg:w-[30vw] text-center">
            Ja, slovjan is an open-source, community-maintained
            language-learning platform for Slavic speakers.
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center basis-1/2 pb-24">
        <div className="h-[30vh]"></div>
        <Link
          href="/dashboard"
          className={`${dela.className} text-3xl px-24 py-8 text-center bg-[#dd3327] rounded-full hover:scale-110 
            hover:bg-[#ff0000] transition-all ease-in-out relative`}
        >
          <Image
            src={bear}
            alt="Bear"
            className="mx-auto w-[30vh] absolute bottom-[95%] left-0 right-0"
          />
          Get Started
        </Link>
      </div>
    </div>
  );
}
