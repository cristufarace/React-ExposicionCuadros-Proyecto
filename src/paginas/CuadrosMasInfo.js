import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../pagesCss/CuadrosMasInfo.css";
import Loader from "../componentes/loader";
import styles from "../pagesCss/Productos.module.css"

const CuadrosMasInfo = () => {
    const [producto, setProducto] = useState()
    let {id} = useParams();
    let url = `url/${id}`
  
    
    async function getData() {
      try {
        let res = await fetch(url);
        let json = await res.json();
 
        setProducto(json)
     
        // console.log(json);
      } catch (err) {
        console.log(err);
      }
    }

    useEffect(() => {
      getData();
    }, []);

  return (
    <div >
      {producto === undefined ? 
      <div className={styles.todaLaPantalla}  >
        <Loader></Loader>
      </div>
      :
      <div id="container" >
      <div id="container__imagen" >
        <img src={producto.image.url} alt="imagen del cuadro" />
      </div>
      <div id="container__info" >
        <ul>
        <li>Precio: {producto.precio}</li>
          <li>Motivo: {producto.motivo}</li>
          <li>Stock: {producto.stock}</li>
          <li>Medidas: {producto.medidas}</li>
          <li>Descripcion: {producto.descripcion}</li>
        </ul>
        <Button style={{ margin: "2px" }} variant="success">
          <NavLink to="/cuadros/productos">Volver</NavLink>
        </Button>
      </div>
    </div>
    }
    </div>

  );
};

export default CuadrosMasInfo;
