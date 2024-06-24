import React from "react";
import CardLiverpool from "./CardLiverpool";

const Regalos = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719177032/kevin/images-7_sfw11o.jpg)] bg-cover bg-center text-olive md:mx-24 lg:mx-32 flex flex-col items-center pb-2">
      {/* <h2 className="text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Mesa de regalos
      </h2> */}
      <p className="font-satisfy text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        Tu presencia es nuestro mejor regalo, pero si quieres tener un detalle
        con nosotros, te damos algunas sugerencias:
      </p>
      <CardLiverpool />
    </div>
  );
};

export default Regalos;
