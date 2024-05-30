import React from "react";
import CardPerson from "./CardPerson";

const Nosotros = () => {
  const data = [
    {
      link: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717041778/Invitame%20ya/Ella_x1cdpq.gif",
      name: "Paola Daniela",
      lastName: "López Martínez",
    },
    {
      link: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717041773/Invitame%20ya/El_paudai.gif",
      name: "Kevin",
      lastName: "Mendoza Carrillo",
    },
  ];

  return (
    <div className="bg-yellow-100 md:mx-24 lg:mx-32 flex flex-col items-center pb-2">
      <h2 className="text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
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
