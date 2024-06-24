import React from "react";
import CardPharents from "./CardPharents";

const Padres = () => {
  const data = [
    {
      Title: "Papás de la novia",
      Pather: "Fernando López Montoya +",
      Mother: "Dolores Martínez López",
    },
    {
      Title: "Papás del novio",
      Pather: "José Carmelo Mendoza Hernández",
      Mother: "Lucina Rebeca Carrillo Maca",
    },
  ];

  return (
    <div className="bg-[url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719177032/kevin/images-7_sfw11o.jpg)] bg-cover bg-center md:mx-24 lg:mx-32 flex flex-col items-center pb-2">
      <h2 className="text-olive text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Nuestros Papás y Padrinos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {data.map((e, i) => (
          <CardPharents
            key={i}
            Title={e.Title}
            Pather={e.Pather}
            Mother={e.Mother}
          />
        ))}
      </div>
      <CardPharents
        Title="Padrinos"
        Pather="Jesús González Ramírez +"
        Mother="Concepción Martínez López"
      />
    </div>
  );
};

export default Padres;
