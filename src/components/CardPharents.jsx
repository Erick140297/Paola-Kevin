import React from "react";

const CardPharents = ({ Title, Pather, Mother }) => {
  return (
    <div className="flex flex-row text-olive bg-white rounded-xl shadow-lg p-4">
      <div className="ml-4 text-center lg:text-2xl text-1xl font-satisfy">
        <h2 className="font-bold">{Title}</h2>
        <h2>{Pather}</h2>
        <h2>{Mother}</h2>
      </div>
    </div>
  );
};

export default CardPharents;
