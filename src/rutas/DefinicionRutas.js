import React from "react";
//rutas del dom
import { Route, HashRouter, NavLink, Routes } from "react-router-dom";
// icono campana
import { FaRegBell } from "react-icons/fa";
// use context
import { useContext } from "react";
import CuadrosCarritoContext from "../context/CuadrosCarritoContext";
// paginas y componentes
import CuadrosProductos from "../paginas/CuadrosProductos";
import CuadrosNav from "../paginas/CuadrosNav";
import CuadrosHome from "../paginas/CuadrosHome";
import CuadrosCarrito from "../paginas/CuadrosCarrito";
import Error from "../componentes/error";
import CuadrosMasInfo from "../paginas/CuadrosMasInfo";
 


const DefinicionRutas = () => {
  const { carrito } = useContext(CuadrosCarritoContext);
  return (
    <>
      <HashRouter>
        <CuadrosNav></CuadrosNav>
        <Routes>
          <Route path="/" element={<CuadrosHome></CuadrosHome>}></Route>
          <Route
            path="/cuadros/productos"
            element={<CuadrosProductos></CuadrosProductos>}
          ></Route>

          <Route
            path="/cuadros/carrito"
            element={<CuadrosCarrito></CuadrosCarrito>}
          ></Route>
          <Route
            // path="/cuadros/:imagen/:descripcion/:medidas/:stock/:motivo/:precio"
            path="/cuadros/:id"
            element={<CuadrosMasInfo></CuadrosMasInfo>}
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
  
        </Routes>
        {/* Gif whatsapp */}
        <a
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: "16px",
            bottom: "20px",
            width: "50px",
          }}
          href="https://api.whatsapp.com/send?phone=541157481228&text=Hola+te+contacto+a+travez+de+tu+pagina+web+Vivi+Salatino+Cuadros&oq=Hola+te+contacto+a+travez+de+tu+pagina+web+Vivi+Salatino+Cuadros"
        >
          <img src={require("../imagenes/wp.gif")} alt="" />
        </a>
        {/* Muestra la campana de notificacion */}
        {carrito.length > 0 ? (
          <NavLink
            style={{
              zIndex:"999",
              padding: "2px",
              borderRadius: "10px",
              transition: "all 1000ms ease",
              position: "fixed",
              right: "16px",
              bottom: "80px",
              width: "40px",
              textAlign: "center",
              border:"solid 2px ",
               background:"black",
               marginLeft: "8px",
        
              
            }}
            to="/cuadros/carrito"
            activeclassname="active"
            className="animated"
          >
           <FaRegBell />{carrito.length}
          </NavLink>
        ) : (
          ""
        )}

      </HashRouter>
    </>
  );
};

export default DefinicionRutas;
