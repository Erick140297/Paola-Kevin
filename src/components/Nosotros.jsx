import React from "react";
import CardPerson from "./CardPerson";

const Nosotros = () => {
  const data = [
    { link: "", name: "Paola Daniela López Martínez" },
    { link: "", name: "Kevin Mendoza Carrillo" },
  ];
  return (
    <div className="bg-yellow-200 md:mx-24 lg:mx-32 flex flex-col items-center pb-2">
      <h2 className="text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Nosotros
      </h2>
      <div>
        <CardPerson link={data[0].link} name={data[0].name} />
      </div>
    </div>
  );
};

export default Nosotros;
