"use client";

import { useState } from "react";

export default function ImageSelectInput({}: {}) {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([""]);

  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="text-color-not-active">
      <div className="content-wrap mx-auto">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Izbiraj popravny obraz
          </h2>
        </div>
        <input
          className="text-center text-3xl py-8 font-bold border input input-bordered w-full max-w-lg my-8"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <div className="flex justify-around items-center flex-wrap">
          {images.map((image, index: number) => {
            return (
              <div key={index}>
                {image ? (
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-64 h-64 object-cover object-center rounded-xl border cursor-pointer"
                  />
                ) : (
                  <div
                    className="w-64 h-64 grid place-items-center rounded-xl border cursor-pointer"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  >
                    <h1>Add image source</h1>
                  </div>
                )}
                <dialog id={`my_modal_${index}`} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() =>
                          document.getElementById(`my_modal_${index}`).close()
                        }
                      >
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-xl text-center pb-8">
                      Add Image URL
                    </h3>
                    <div className="flex flex-wrap gap-8 justify-center">
                      <input
                        type="url"
                        placeholder="https://"
                        value={image}
                        onChange={(e) =>
                          handleImageChange(index, e.target.value)
                        }
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button
                      className="cursor-default"
                      onClick={() =>
                        document.getElementById(`my_modal_${index}`).close()
                      }
                    >
                      Close
                    </button>
                  </form>
                </dialog>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-lg bg-color-active text-white text-3xl w-full my-8"
          onClick={handleAddImage}
        >
          +
        </button>
      </div>
    </div>
  );
}
