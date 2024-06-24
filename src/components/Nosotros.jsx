import React from "react";
import CardPerson from "./CardPerson";

const Nosotros = () => {
  const data = [
    {
      link: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717130198/kevin/Ella_od8dhv.jpg",
      name: "Paola Daniela",
      lastName: "López Martínez",
    },
    {
      link: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717130198/kevin/El_zpt5uo.jpg",
      name: "Kevin",
      lastName: "Mendoza Carrillo",
    },
  ];

  return (
    <div
      className="bg-cover bg-center md:mx-24 lg:mx-32 flex flex-col items-center pb-2"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719177032/kevin/images-7_sfw11o.jpg)",
      }}
    >
      <p className="text-olive font-satisfy text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        Vamos a escribir juntos la página 1 del libro de nuestros sueños.
      </p>
      <h2 className="text-olive text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Nosotros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((person, index) => (
          <div key={index} className="flex justify-center m-4">
            <CardPerson
              link={person.link}
              name={person.name}
              lastName={person.lastName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;
