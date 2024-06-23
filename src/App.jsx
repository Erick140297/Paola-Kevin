import Portada from "./components/Portada";
import History from "./components/History";
import Datos from "./components/Datos";
import Itinerario from "./components/Itinerario";
import Nosotros from "./components/Nosotros";
import Carousel from "./components/Carousel";
import PhotoGrid from "./components/PhotoGrid";
import Padres from "./components/Padres";
import Regalos from "./components/Regalos";
import Confirmar from "./components/Confirmar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-olive">
      <Portada />
      <History />
      <Nosotros />
      <Padres />
      <Datos />
      <Itinerario />
      <Carousel />
      {/* <PhotoGrid /> */}
      <Regalos />
      <Confirmar />
      <Footer />
    </div>
  );
};

export default App;
