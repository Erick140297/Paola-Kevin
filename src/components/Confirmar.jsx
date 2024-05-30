import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const Confirmar = () => {
  return (
    <div className="bg-yellow-100 md:mx-24 lg:mx-32 flex flex-col items-center pb-2">
      <h2 className="text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        Confirmanos tu asistencia
      </h2>
      <p className="font-playfair text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        Puedes hacerlo por WhatsApp
      </p>
      <WhatsAppButton
        text={"Confirma con la Novia"}
        phoneNumber={5215513539953}
      />
      <WhatsAppButton
        text={"Confirma con el Novio"}
        phoneNumber={5215513539953}
      />
      <p className="font-satisfy text-center md:text-4xl sm:text-3xl ss:text-2xl text-1xl  p-6">
        Una boda es para celebrar que el amor existe. ¡gracias por acompañarnos!
      </p>
    </div>
  );
};

export default Confirmar;
