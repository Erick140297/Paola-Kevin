import React from "react";
import PhotoGridConfig from "./PhotoGridConfig";

const PhotoGrid = () => {
  const images = [
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717029222/kevin/01_z9td7g.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717029223/kevin/04_tp4cv5.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717029223/kevin/06_ckgwqj.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717029226/kevin/09_l0adtv.jpg",
  ];

  return (
    <div className="bg-white md:mx-24 lg:mx-32 flex flex-col items-center justify-center">
      <p className="text-olive font-satisfy text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        Todos los días juntos son días maravillosos y queremos que nos acompañen
        en el más importante de todos.
      </p>
      <PhotoGridConfig images={images} />
    </div>
  );
};

export default PhotoGrid;
