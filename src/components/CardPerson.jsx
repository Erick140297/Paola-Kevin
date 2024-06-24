import React from "react";

const CardPerson = ({ link, name, lastName }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg mx-auto max-w-sm">
      <img
        src={link}
        alt={name}
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="p-6 bg-white text-olive">
        <h2 className="text-2xl text-center font-satisfy">{name}</h2>
        <h2 className="text-2xl text-center font-satisfy">{lastName}</h2>
      </div>
    </div>
  );
};

export default CardPerson;
