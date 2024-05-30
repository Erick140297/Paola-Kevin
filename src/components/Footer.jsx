import React from "react";

const Footer = () => {
  const handleClick = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=5215542569309`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-slate-700 md:mx-24 lg:mx-32 flex flex-col items-center pb-4 pt-4">
      <p className="text-white font-playfair text-center md:text-2xl text-1xl mb-4">
        ¿Quieres una invitación para tu evento?
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white font-playfair text-center md:text-2xl text-1xl px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        <i>Contáctame aquí</i>
      </button>
    </div>
  );
};

export default Footer;
