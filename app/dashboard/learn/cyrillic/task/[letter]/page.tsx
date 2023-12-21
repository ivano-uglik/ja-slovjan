"use client";
import { useState } from "react";
import CyrillicLatin4CharsStep from "./CyrillicLatin4CharsStep";
import CyrillicLatinStep from "./CyrillicLatinStep";

export default function Page({ params }: { params: { letter: any } }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div
        className={`flex justify-center gap-16 mx-auto content-wrap ${
          active == 0 ? "" : "hidden"
        }`}
      >
        <button
          className="p-12 border rounded-xl text-5xl"
          onClick={() => setActive(1)}
        >
          1
        </button>
        <button
          className="p-12 border rounded-xl text-5xl"
          onClick={() => setActive(2)}
        >
          2
        </button>
      </div>
      <div>
        <div className={`${active == 1 ? "" : "hidden"}`}>
          <CyrillicLatinStep params={params} />
        </div>
        <div className={`${active == 2 ? "" : "hidden"}`}>
          <CyrillicLatin4CharsStep params={params} />
        </div>
      </div>
    </>
  );
}
