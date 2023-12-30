import { useState } from "react";
import Completed from "@/app/sections/CompletedLevel";

interface params {
  title: string;
  options: { text: string; isCorrect: boolean }[];
}

const CyrillicDragNDrop = ({ title, options }: params) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <div className="w-full h-full text-2xl flex flex-col !px-16 padding-mobile-x md:padding-tablet-x lg:padding-large-x">
      <div className="flex justify-between w-full h-1/5">
        <p>{options[0].text}</p>
        <p>{options[1].text}</p>
      </div>
      <div className="h-3/5 flex justify-center items-center">
        <p className="text-5xl font-bold">{title}</p>
      </div>
      <div className="flex justify-between w-full h-1/5">
        <p>{options[2].text}</p>
        <p>{options[3].text}</p>
      </div>
    </div>
  );
};

export default CyrillicDragNDrop;
