import React from "react";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div
      className={`fixed bg-white z-10 left-0 top-0 flex justify-center items-center h-screen w-screen ${className}`}>
      <div className="loading loading-spinner"></div>
    </div>
  );
};

export default Loading;
