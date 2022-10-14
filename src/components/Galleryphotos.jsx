import React from "react";
import Gallerydata from "./Gallerydata";

const Galleryphotos = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-white py-4 text-center">PHOTOS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:gap-8 lg:gap-0">
        {Gallerydata.map((data) => (
          <div className="my-4 w-80 lg:w-80 xl:w-96 " key={data.key}>
            <img
              src={data.img}
              alt={data.alt}
              className="rounded-2xl hover:scale-110 ease-in duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleryphotos;
