import "./App.css";
import DefinicionRutas from "../src/rutas/DefinicionRutas"
import { CuadrosCrudProvider } from "./context/CuadrosCrudContext";
import {CuadrosCarritoProvider} from "./context/CuadrosCarritoContext";
import {AutenticacionProvider} from "./context/CuadrosAutenticacion";

 

function App() {
 
  return (
    <>
   
    <AutenticacionProvider>
    <CuadrosCarritoProvider>
     <CuadrosCrudProvider>
      <DefinicionRutas></DefinicionRutas>
      </CuadrosCrudProvider>
      </CuadrosCarritoProvider>
      </AutenticacionProvider>
     
    </>
  );
}

export default App;
