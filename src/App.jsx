import Datos from "./components/Datos";
import History from "./components/History";
import Itinerario from "./components/Itinerario";
import Nosotros from "./components/Nosotros";
import Padres from "./components/Padres";
import Padrinos from "./components/Padrinos";
import Portada from "./components/Portada";
import Regalos from "./components/Regalos";
import Confirmar from "./components/Confirmar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Portada />
      <History />
      <Datos />
      <Itinerario />
      <Nosotros />
      {/* 
      <Padres />
      <Padrinos />
      <Regalos />
      <Confirmar />
      <Footer /> */}
    </div>
  );
};

export default App;
