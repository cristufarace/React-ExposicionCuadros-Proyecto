import React from "react";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CuadrosCarritoContext from "../context/CuadrosCarritoContext";

const CuadrosCadaElementoCarrito = ({ el }) => {
  const { handleQuitCarrito } = useContext(CuadrosCarritoContext);
  const { motivo, medidas, precio, image } = el;
  return (
    <>
      <td>
        <img
          style={{ height: "50px", width: "50px" }}
          src={image.url}
          alt="imagen"
        />
      </td>
      <td>{motivo}</td>
      <td>{medidas}</td>
      <td>{precio}</td>
      <td><Button onClick={()=>{handleQuitCarrito(el)}} variant="danger">Quitar</Button></td>
    </>
  );
};

export default CuadrosCadaElementoCarrito;
