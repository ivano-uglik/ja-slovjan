"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Bear from "@/public/failure-bear.png";
import React from "react";
import Image from "next/image";

const Failure = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col typography">
      <Image
        className="w-96 aspect-square"
        src={Bear}
        alt="sad bear holding his thumbs down"
      />
      <h1 className="mb-2 text-4xl font-bold text-base-content">Failure!</h1>
      <p className="mb-8 text-left md:text-center text-zinc-500">
        An error ocurred somewhere! Please{" "}
        <Link
          className="text-error font-bold hover:underline"
          href="mailto:jaslovjan@gmail.com">
          contact the admin
        </Link>{" "}
        or open an issue on{" "}
        <Link
          className="text-error font-bold hover:underline"
          href="https://github.com/ivano-uglik/ja-slovjan">
          the github page
        </Link>
      </p>
      <button onClick={handleClick} className="btn btn-error">
        Return to Dashboard →
      </button>
    </div>
  );
};

export default Failure;
