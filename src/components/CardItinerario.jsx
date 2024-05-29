import React from "react";

const CardItinerario = ({ img, Title, Hour }) => {
  return (
    <div className="flex flex-row bg-white rounded-xl shadow-lg p-4">
      <img className="w-14" src={img} alt={Title} />
      <div className="ml-4 text-center lg:text-2xl text-1xl font-satisfy">
        <h2>{Title}</h2>
        <h2>{Hour} Horas</h2>
      </div>
    </div>
  );
};

export default CardItinerario;
