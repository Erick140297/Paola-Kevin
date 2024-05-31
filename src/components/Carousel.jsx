import React from "react";
import CarouselConfig from "./CarouselConfig";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717130316/kevin/10_bftxfg.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717029224/kevin/07_vfy0jl.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717029224/kevin/08_gxpbju.jpg",
  ];

  return (
    <div className="bg-yellow-100 md:mx-24 lg:mx-32 flex flex-col items-center justify-center">
      <p className="font-satisfy text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        El cielo y ustedes serán los testigos perfectos para sellar nuestra
        promesa de amor.
      </p>
      <CarouselConfig images={images} />
    </div>
  );
};

export default Carousel;
