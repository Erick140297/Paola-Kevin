const History = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1716301820/Invitame%20ya/white_ts7nre.jpg)] bg-cover bg-center md:mx-24 lg:mx-32 flex flex-col justify-center items-center min-h-screen">
      <div className="text-black text-center flex flex-col items-center m-4">
        <h2 className="text-olive lg:text-6xl text-4xl font-satisfy drop-shadow-md">
          Hoy empieza
        </h2>
        <h2 className="text-olive lg:text-6xl text-4xl font-satisfy drop-shadow-md">
          la mejor historia:
        </h2>
        <h2 className="text-olive lg:text-6xl text-4xl font-satisfy drop-shadow-md">
          la nuestra.
        </h2>
        <img
          src="https://res.cloudinary.com/dnrcmjyu1/image/upload/v1719262220/kevin/logo_2_ecujvp.png"
          alt="logo"
          className="h-40 w-40 rounded-full mt-8 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default History;
