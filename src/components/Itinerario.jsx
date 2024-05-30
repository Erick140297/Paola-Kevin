import React from "react";
import CardItinerario from "./CardItinerario";

const Itinerario = () => {
  const data = [
    {
      img: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717024021/Invitame%20ya/ceremonia_religiosa_vz0asf.png",
      Title: "Ceremonia Religiosa",
      Hour: "13:30",
    },
    {
      img: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717024021/Invitame%20ya/recepcion_ar7rdo.png",
      Title: "Recepción",
      Hour: "18:00",
    },
    {
      img: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717024021/Invitame%20ya/boda_civil_yrn0kd.png",
      Title: "Boda Civil",
      Hour: "18:30",
    },
    {
      img: "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717024021/Invitame%20ya/evento_h0kji5.png",
      Title: "Inicio de evento",
      Hour: "19:00",
    },
  ];

  return (
    <div className="bg-yellow-100 md:mx-24 lg:mx-32 flex flex-col items-center pb-2">
      <h2 className="text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Itinerario
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((e, i) => (
          <CardItinerario key={i} img={e.img} Title={e.Title} Hour={e.Hour} />
        ))}
      </div>
    </div>
  );
};

export default Itinerario;
