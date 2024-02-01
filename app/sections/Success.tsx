"use client";
import { useRouter } from "next/navigation";
import Bear from "@/public/success-bear.svg";
import React from "react";
import Image from "next/image";

const Success = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col typography">
      <Image
        src={Bear}
        className="w-96 aspect-square"
        alt="Happy bear holding his thumbs up"
      />
      <h1 className="mb-2 text-4xl font-bold text-base-content">Success!</h1>
      <p className="mb-8 text-left md:text-center text-zinc-500">
        successfully created new level!
      </p>
      <button onClick={handleClick} className="btn btn-primary">
        Return to Dashboard →
      </button>
    </div>
  );
};

export default Success;
