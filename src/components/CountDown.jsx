import useCountDown from "../Hooks/useCountDown";
import "../index.css";

const CountDown = () => {
  const targetDate = "August 31, 2024 14:00:00";

  const [days, hours, minutes, seconds, countDown] = useCountDown(targetDate);
  const timeValues = [days, hours, minutes, seconds];
  let format = ["Días", "Horas", "Minutos", "Segundos"];

  return countDown <= 0 ? (
    <div>
      <h2>¡Felicidades, la espera termino!</h2>
    </div>
  ) : (
    <div className="flex flex-row justify-center items-center">
      {format.map((e, i) => (
        <div key={i} className="flex flex-row">
          <div className="md:mx-4 sm:mx-2 mx-1">
            <h2 className="lg:text-8xl md:text-6xl ms:text-4xl ss:text-3xl text-2xl font-playfair text-shadow">
              {timeValues[i]}
            </h2>
            <h2 className="font-satisfy lg:text-6xl md:text-4xl sm:text-3xl ss:text-2xl  text-shadow">
              {e}
            </h2>
          </div>
          {i < 3 ? (
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-playfair text-shadow">
              :
            </h2>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default CountDown;
