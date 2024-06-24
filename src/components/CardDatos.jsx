const CardDatos = ({ Title, image, where, when, addres, link }) => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="text-olive bg-white rounded-xl shadow-lg mx-5 relative flex flex-col justify-between pb-16 z-10 w-full max-w-md mb-6">
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-satisfy font-bold">
          {Title}
        </h2>
        <div className="rounded-xl overflow-hidden my-3 h-60">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt={where}
          />
        </div>
        <p className="font-playfair text-center mt-2 md:text-1xl font-bold">
          {where}
        </p>
        <p className="font-playfair text-center mt-2 md:text-1xl font-bold">
          {when}
        </p>
        <p className="font-playfair text-center mt-2 md:text-1xl font-bold">
          {addres}
        </p>
      </div>
      <button
        className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-full absolute bottom-2.5 left-1/2 transform -translate-x-1/2"
        onClick={() => handleButtonClick(link)}
      >
        Ver mapa
      </button>
    </div>
  );
};

export default CardDatos;
