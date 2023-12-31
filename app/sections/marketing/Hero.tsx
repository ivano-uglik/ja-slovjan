import Image from "next/image";
import bear from "@/public/svg/bear.svg";
import Link from "next/link";
import { dela } from "@/app/@lib/Fonts";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center gap-16 min-h-[100vh] bg-mountain pt-[15vh] md:pt-[10vh]">
      <div className="flex flex-col gap-8 xl:gap-12 md:text-center padding-mobile-x md:padding-tablet-x lg:px-0">
        <div>
          <h1 className={`${dela.className} text-5xl`}>Я, Словян</h1>
          <h2 className="font-bold opacity-50">- од Словјана, до Словјана -</h2>
        </div>
        <div className="flex flex-col items-center md:text-center">
          <h2 className={`${dela.className} text-xl pb-4`}>
            A Slavic language, without starting from scratch.
          </h2>
          <h3 className="mt-4 md:0 lg:w-[30rem] opacity-75 md:opacity-50">
            Ja, slovjan is an open-source, community-maintained
            language-learning platform for Slavic speakers.
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-48 lg:h-64"></div>
        <Link
          tabIndex={0}
          href="/auth/sign-in"
          className={`${dela.className} btn btn-primary btn-wide uppercase !font-extrabold px-12 box-content btn-circle hover:scale-110 focus:scale-100 
          hover:bg-[#ff0000] transition-all ease-in-out relative`}>
          <Image
            src={bear}
            alt="Bear"
            className="mx-auto w-48 lg:w-60 absolute bottom-[95%] left-0 right-0"
          />
          Get Started
        </Link>
      </div>
    </div>
  );
}
