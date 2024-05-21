import useCountDown from "../Hooks/useCountDown";
import "../index.css";

const CountDown = () => {
  const targetDate = "Augost 31, 2024 14:00:00";

  const [days, hours, minutes, seconds, countDown] = useCountDown(targetDate);
  return countDown <= 0 ? (
    <div>
      <h2>¡Felicidades, la espera termino!</h2>
    </div>
  ) : (
    <div className="flex flex-row justify-center items-center">
      <div className="md:mx-4 mx-2">
        <h2 className="lg:text-8xl md:text-6xl text-4xl font-playfair text-shadow">
          {days}
        </h2>
        <h2 className="font-satisfy lg:text-4xl text-2xl text-shadow">Días</h2>
      </div>
      <h2 className="lg:text-6xl md:text-4xl text-2xl font-playfair text-shadow">
        :
      </h2>
      <div className="md:mx-4 mx-2">
        <h2 className="lg:text-8xl md:text-6xl text-4xl font-playfair text-shadow">
          {hours}
        </h2>
        <h2 className="font-satisfy lg:text-4xl text-2xl text-shadow">Horas</h2>
      </div>
      <h2 className="lg:text-6xl md:text-4xl text-2xl font-playfair text-shadow">
        :
      </h2>
      <div className="md:mx-4 mx-2">
        <h2 className="lg:text-8xl md:text-6xl text-4xl font-playfair text-shadow">
          {minutes}
        </h2>
        <h2 className="font-satisfy lg:text-4xl text-2xl text-shadow">
          Minutos
        </h2>
      </div>
      <h2 className="lg:text-6xl md:text-4xl text-2xl font-playfair text-shadow">
        :
      </h2>
      <div className="md:mx-4 mx-2">
        <h2 className="lg:text-8xl md:text-6xl text-4xl font-playfair text-shadow">
          {seconds}
        </h2>
        <h2 className="font-satisfy lg:text-4xl text-2xl text-shadow">
          Segundos
        </h2>
      </div>
    </div>
  );
};

export default CountDown;
