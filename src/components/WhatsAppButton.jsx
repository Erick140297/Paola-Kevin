import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = ({ text, phoneNumber }) => {
  const handleClick = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center text-center font-playfair w-3/4 mb-4"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
      <span>{text}</span>
    </button>
  );
};

export default WhatsAppButton;

