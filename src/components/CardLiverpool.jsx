import React from "react";

const CardLiverpool = () => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={() =>
        handleButtonClick(
          "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51451598"
        )
      }
      className="cursor-pointer flex flex-row bg-white rounded-xl shadow-lg p-4 hover:bg-gray-100 transition-colors duration-300"
    >
      <img
        className="w-28"
        src="https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717034827/Invitame%20ya/liverpool-logo_xtdczs.jpg"
        alt="Liverpool"
      />
      <div className="ml-4 text-center lg:text-2xl text-1xl font-satisfy">
        <h2>51451598</h2>
      </div>
    </div>
  );
};

export default CardLiverpool;
