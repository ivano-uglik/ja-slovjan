"use client";
import { DragEvent, useState } from "react";
import Completed from "@/app/sections/CompletedLevel";

interface params {
  title: string;
  options: { text: string; isCorrect: boolean }[];
}

const CyrillicDragNDrop = ({ title, options }: params) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  // Handler for when an item is dropped onto the drop zone ( title )
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const isCorrect = e.dataTransfer.getData("isCorrect") === "true";

    // for some reason, when the onDrop event fires, the onDragLeave and onDragExit events are supressed
    setIsDragOver(false);

    setIsCorrect(isCorrect);
    setIsWrong(!isCorrect);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    // MANDATORY when using default react drag and drop events, for some reason the default dragOver event action prevents drop events from working
    e.preventDefault();

    setIsDragOver(true);
  };

  return (
    <>
      <div className="w-full h-full text-4xl flex flex-col !px-16 padding-mobile-x md:padding-tablet-x lg:padding-large-x">
        <div className="flex justify-between w-full h-1/5">
          <DraggableOption
            setIsWrong={setIsWrong}
            text={options[0].text}
            isCorrect={options[0].isCorrect}
          />
          <DraggableOption
            setIsWrong={setIsWrong}
            text={options[1].text}
            isCorrect={options[1].isCorrect}
          />
        </div>
        <div className="h-3/5 flex justify-center items-center">
          <p
            onDragOver={handleDragOver}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            className={`text-7xl font-bold transition-all ${
              isDragOver && "scale-125 text-secondary"
            } ${isWrong && "text-red-500"} ${isCorrect && "text-green-500"}`}>
            {title}
          </p>
        </div>
        <div className="flex justify-between w-full h-1/5">
          <DraggableOption
            setIsWrong={setIsWrong}
            text={options[2].text}
            isCorrect={options[2].isCorrect}
          />
          <DraggableOption
            setIsWrong={setIsWrong}
            text={options[3].text}
            isCorrect={options[3].isCorrect}
          />
        </div>
      </div>
      {isCorrect && <Completed />}
    </>
  );
};

interface DraggableOptionProps {
  text: string;
  isCorrect: boolean;
  setIsWrong: Function;
}

const DraggableOption = ({
  text,
  isCorrect,
  setIsWrong,
}: DraggableOptionProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragStart = (e: DragEvent<HTMLParagraphElement>) => {
    // attaching the isCorrect boolean to the DragEvent, this event is passed on as an argument to the onDrop event handler, hence we can read it's values
    e.dataTransfer.setData("isCorrect", isCorrect.toString());
    setIsDragging(true);

    // reset the "title" UI after a user makes a wrong guess
    setIsWrong(false);
  };

  return (
    <p
      onDragStart={handleDragStart}
      onDragEnd={() => setIsDragging(false)}
      className={`transition-all ${isDragging && "scale-110 text-secondary"}`}
      draggable>
      {text}
    </p>
  );
};

export default CyrillicDragNDrop;
