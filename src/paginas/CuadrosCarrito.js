import React from "react";
import { useContext } from "react";
import CuadrosCarritoContext from "../context/CuadrosCarritoContext";
import CuadrosCadaElementoCarrito from "../componentes/CuadrosCadaElementoCarrito";
import "../pagesCss/CuadrosTabla.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import ContactSolicitudCompra from "./ContactSolicitudCompra";
// import module css
import styles from "../pagesCss/Productos.module.css"

const CuadrosCarrito = () => {
  const { carrito } = useContext(CuadrosCarritoContext);
  return (
    <div className={styles.todaLaPantallaSinFlex} id="tablaFondo">
      {/* encabezao tabla */}
      <table>
        <thead>
          <tr key={1}>
            <th>Imagen</th>
            <th>Medidas</th>
            <th>Motivo</th>
            <th>Precio</th>
            <th colSpan={2}>Accion</th>
          </tr>
        </thead>
        {/* cada elemento de la tabla */}
        <tbody>
          {carrito.length > 0 ? (
            carrito.map((elemento, index) => (
              <tr key={elemento.id}>
                <CuadrosCadaElementoCarrito
                  el={elemento}
                  key={index}
                ></CuadrosCadaElementoCarrito>
              </tr>
            ))
          ) : (
            // si el carrito esta vacio, estonces muestra mensaje
            <tr>
              <td colSpan={5}>No hay obras de arte para consultar</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* evalua si hay algo en el carrito, sino te muestra las obtars e arte */}
      {carrito.length > 0 ? (
        ""
      ) : (
        <div>
        <br/>
        <Button variant="success">
          <NavLink to="/cuadros/productos">Ver obras de arte</NavLink>
        </Button>

        </div>
      )}
      
      {/* si hay cuadros para consultar, se muestra el formulario  */}
      {carrito.length > 0 ? (
        <div>
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            variant="success"
          >
            <NavLink to="/cuadros/productos">Ver mas cuadros</NavLink>
          </Button>

          <div id="solicitud">
            <p style={{ textAlign: "center" }}>¿Para que sirve la consulta?</p>
            <div>
              <p>
                Este boton enviara un email al Artista con el/los cuadros de su
                interes,a fin de que se puedan comunicar, establecer un metodo
                de pago (en caso de querer comprarlo) y coordinar la entrega.
              </p>
              <p>
                Las entregas suelen realizarse en el termino de 24/48hs
                dependiendo la ubicacion.{" "}
              </p>
              <p>Se ofrecen todos los medios de pago</p>
            </div>
          </div>
          <div>
            <ContactSolicitudCompra></ContactSolicitudCompra>
          </div>
        </div>
      ) : (
        // sino no se muestra nada
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
      <br /> <br />
    </div>
  );
};

export default CuadrosCarrito;
