import React, { Suspense } from "react";
import CuadrosCadaProducto from "../componentes/CuadrosCadaProducto";
import { useContext } from "react";
import CuadrosCrudContext from "../context/CuadrosCrudContext";
import "../pagesCss/CuadrosProductos.css";
import Loader from "../componentes/loader";
import Botones from "../componentes/Botones";
// import module css
import styles from "../pagesCss/Productos.module.css"
//reactBootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



const CuadrosProductos = () => {
  const { productos } = useContext(CuadrosCrudContext);
  return (
    <Suspense fallback={<Loader></Loader>} >
      <div>
        {productos === undefined? 
         <div className={styles.todaLaPantalla}  >
         <Loader></Loader>
       </div>  :
        <div id="contenedorDeBotonesYProductos">
        <div id="contenedorDeBotonesYProductos__botones">
          <Botones></Botones>
        </div>
        <div id="contenedorDeBotonesYProductos__contenedorProductos">
          <Container style={{marginTop:"10px"}} >
            <Row>
              {productos.length > 0 ? (
                productos.map((el, index) => (
                  // data es la varaible db,que almacena la info que viene del get a la api y que comparti en el contexto
                  <CuadrosCadaProducto key={el._id} el={el} />
                ))
              ) : (
                <div id="loader">
                  <Loader></Loader>
                </div>
              )}
            </Row>
          </Container>
        </div>
      </div>
      }
      </div>

    </Suspense>
  );
};

export default CuadrosProductos;
