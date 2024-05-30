import CountDown from "./CountDown";
import "../index.css";

const Portada = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1716253250/Invitame%20ya/boda_qkd3ce.jpg)] bg-cover bg-center md:mx-24 lg:mx-32 min-h-screen flex flex-col justify-between items-center">
      <div className="text-stone-50 text-center flex flex-col justify-center flex-grow">
        <h2 className="font-satisfy lg:text-8xl md:text-6xl sm:text-4xl ss:text-4xl text-3xl text-shadow">
          Paola & Kevin
        </h2>
        <h1 className="lg:text-9xl md:text-8xl text-6xl font-playfair text-shadow">
          Nuestra Boda
        </h1>
        <CountDown />
      </div>
      <audio
        src="https://res.cloudinary.com/dnrcmjyu1/video/upload/v1716300256/Invitame%20ya/PERFECT-Ed-Sheeran-_Saxophone-Version__nvpgtn.mp3"
        className="m-8"
        controls
        loop
      ></audio>
    </div>
  );
};

export default Portada;
