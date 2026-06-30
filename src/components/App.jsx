import { Link, UNSAFE_DataRouterStateContext } from "react-router";
import { Routes, Route } from "react-router";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import Inicio from "../pages/Inicio";
import LaraCroft from "../pages/LaraCroft";
import ElJuego from "../pages/ElJuego";
import Galeria from "../pages/Galeria";
import SobreMi from "../pages/SobreMi";
import GaleriaDetail from "../pages/GaleriaDetalle";

import "../styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="franja-bajo-header"></div>
      <NavBar />
      <div>
        <main className="main">
          {/* imagen de fondo no funciona, revisar */}
          <div className="bg-image"></div>
        </main>
      </div>
      
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/lara-croft" element={<LaraCroft/>}/>
        <Route path="/el-juego" element={<ElJuego />}/>
        <Route path="/galeria" element={<Galeria />}/>
        <Route path="/sobre-mi" element={<SobreMi />}/>
        <Route path="/galeria/:id" element={<GaleriaDetail />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
