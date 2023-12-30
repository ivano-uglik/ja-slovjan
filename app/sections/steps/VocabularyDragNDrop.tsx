"use client";
import { useState } from "react";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Completed from "@/app/sections/CompletedLevel";

interface Params {
  imageURL: string;
  options: { text: string; isCorrect: boolean }[];
}

const VocabularyDragNDrop = ({ imageURL, options }: Params) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const handleDrop = (item: any) => {
    setIsDragOver(false);
    setIsCorrect(item.isCorrect);
    setIsWrong(!item.isCorrect);
  };

  const handleDragOver = () => {
    setIsDragOver(true);
  };

  return (
    <DndProvider
      backend={window.innerWidth < 768 ? TouchBackend : HTML5Backend}>
      <div className="w-full h-full text-2xl flex flex-col padding-mobile-x md:padding-tablet-x lg:padding-large-x">
        <div className="flex justify-between w-full h-1/5">
          <DraggableOption
            text={options[0].text}
            isCorrect={options[0].isCorrect}
          />
          <DraggableOption
            text={options[1].text}
            isCorrect={options[1].isCorrect}
          />
        </div>
        <div className="h-3/5 flex justify-center items-center">
          <DropZone
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            isDragOver={isDragOver}
            isWrong={isWrong}
            isCorrect={isCorrect}
            imageURL={imageURL}
          />
        </div>
        <div className="flex justify-between w-full h-1/5">
          <DraggableOption
            text={options[2].text}
            isCorrect={options[2].isCorrect}
          />
          <DraggableOption
            text={options[3].text}
            isCorrect={options[3].isCorrect}
          />
        </div>
      </div>
      {isCorrect && <Completed />}
    </DndProvider>
  );
};

const DraggableOption = ({
  text,
  isCorrect,
}: {
  text: string;
  isCorrect: boolean;
}) => {
  const [, ref] = useDrag({
    type: "OPTION",
    item: { isCorrect },
  });

  return (
    <p ref={ref} className="transition-all draggable-text">
      {text}
    </p>
  );
};

const DropZone = ({
  handleDrop,
  handleDragOver,
  isDragOver,
  isWrong,
  isCorrect,
  imageURL,
}: any) => {
  const [, drop] = useDrop({
    accept: "OPTION",
    drop: (item: any) => handleDrop(item),
  });

  return (
    <img
      src={imageURL}
      ref={drop}
      onDragOver={handleDragOver}
      className={`transition-all ${isDragOver && "scale-125"} aspect-auto w-60`}
    />
  );
};

export default VocabularyDragNDrop;
