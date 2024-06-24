import React from "react";
import CarouselConfig from "./CarouselConfig";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100866/kevin/carrucel/12_rnzfxs.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100859/kevin/carrucel/01_jkprpd.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100864/kevin/carrucel/02_qzmgpz.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100869/kevin/carrucel/03_dfpre6.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100868/kevin/carrucel/04_pshzzq.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100864/kevin/carrucel/05_gemezc.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100861/kevin/carrucel/06_ebgcfz.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100860/kevin/carrucel/07_tp1v7l.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100861/kevin/carrucel/08_oqfqqt.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100866/kevin/carrucel/10_gdxaru.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100866/kevin/carrucel/11_zyend5.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100866/kevin/carrucel/13_j8oayb.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100867/kevin/carrucel/14_qphmmp.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100867/kevin/carrucel/15_fql9d6.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100868/kevin/carrucel/16_kv58v8.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100868/kevin/carrucel/17_wkaqzu.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100869/kevin/carrucel/18_o80xxs.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100869/kevin/carrucel/19_rz0fin.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100869/kevin/carrucel/20_edokzl.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100870/kevin/carrucel/21_mlxq3i.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100869/kevin/carrucel/22_ygrugm.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100869/kevin/carrucel/23_w9nwrq.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100870/kevin/carrucel/24_n4l8ep.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100874/kevin/carrucel/25_ionrvs.jpg",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719100874/kevin/carrucel/26_yxfgm9.jpg",
  ];

  return (
    <div className="bg-[url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719177032/kevin/images-7_sfw11o.jpg)] bg-cover bg-center md:mx-24 lg:mx-32 flex flex-col items-center justify-center">
      <p className="text-olive font-satisfy text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        Todos los días juntos son días maravillosos y queremos que nos acompañen
        en el más importante de todos
      </p>
      <h2 className="text-olive text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Nuestra historia
      </h2>

      <CarouselConfig images={images} />
    </div>
  );
};

export default Carousel;
