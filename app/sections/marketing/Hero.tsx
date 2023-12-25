import { Dela_Gothic_One } from "next/font/google";
import Image from "next/image";
import bear from "@/public/svg/bear.svg";
import Link from "next/link";

const dela = Dela_Gothic_One({ subsets: ["latin", "cyrillic"], weight: "400" });

export default function Hero() {
  return (
    <div className="flex flex-col justify-center gap-16 min-h-[100vh] bg-mountain pt-[10vh]">
      <div className="flex flex-col gap-8 text-center px-8 lg:px-0">
        <div>
          <h1 className={`${dela.className} text-[14vw] lg:text-8xl`}>
            Я, Словян
          </h1>
          <h2 className="font-bold opacity-50">- од Словјана, до Словјана -</h2>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className={`${dela.className} text-xl lg:text-2xl pb-4`}>
            A Slavic language, without starting from scratch.
          </h2>
          <h3 className="lg:w-[30rem]">
            Ja, slovjan is an open-source, community-maintained
            language-learning platform for Slavic speakers.
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-48 lg:h-64"></div>
        <Link
          href="/auth/sign-in"
          className={`${dela.className} text-3xl px-24 py-8 text-center bg-[#dd3327] rounded-full hover:scale-110 
          href="/dashboard"
          className={`${dela.className} text-2xl lg:text-3xl px-12 py-6 lg:px-24 lg:py-8 text-center bg-[#dd3327] rounded-full hover:scale-110 focus:scale-100 
            hover:bg-[#ff0000] transition-all ease-in-out relative`}
        >
          <Image
            src={bear}
            alt="Bear"
            className="mx-auto w-48 lg:w-64 absolute bottom-[95%] left-0 right-0"
          />
          Get Started
        </Link>
      </div>
    </div>
  );
}
