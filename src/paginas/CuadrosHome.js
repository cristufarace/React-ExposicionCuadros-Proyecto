import React, { useEffect, useState } from "react";
import CuadrosCarousel from "../componentes/CuadrosCarousel";
import "../pagesCss/CuadrosHome.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// Loader
import Loader from "../componentes/loader";
// react bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CuadrosHome = () => {

  const [loading, setLoading] = useState(true);

  function mostrarScroll() {
    let animado = document.querySelectorAll(".animado");
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 800 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader></Loader>
        </div>
      ) : (
        <div>
          <>
            {/* Fila 1 logo*/}
            <Row>
              <Col style={{background:"black"}} id="tarjeta">
                <img
                  src={require("../imagenes/fondo.png")}
                  style={{
                    // objectFit: "cover",
                    position: "absolute",
                    maxWidth: "100%",
                    height: "100vh",
                   
                  }}
                  alt=""
                />

                <img
                  className="img-fluid"
                  src={require("../imagenes/logo.png")}
                  alt=""
                  style={{ position: "relative", borderRadius: "30px" }}
                />
              </Col>
            </Row>
            <Row className="animado texto tecnicas">
              <Col>
                <h1 className=" " >Mi Perfil</h1>
                <p className="  fs-6">
                  En este espacio encontraras todas mis obras de arte.
                </p>
                <p className="  fs-6">
                  A travez de los filtros podras buscar de forma mas sencilla
                  el/los cuadro/s que sea/n de tu agrado.
                </p>
                <p className="  fs-6">
                  En caso de tener alguna consulta o querer realizar una compra,
                  deberas completar el pequeño formulario que se encuentra en el
                  apartado "consultas" de la barra de navegacion.
                </p>
                <p className="  fs-6">
                  En caso de que se hayas enviado alguna consulta, a la brevedad
                  me pondre en contacto.{" "}
                </p>
              </Col>
            </Row>
            {/* Fila 2 about me */}
            <Row className="about-me">
              <Col className="animado texto about" lg={8}>
                <div>
                  <h1 >Acerca mio</h1>
                  <p className="  fs-6">
                    Tengo 56 años, soy empleada administrativa y si bien siempre
                    me interesó la decoración y lo estético recién a los 53 años
                    despertó en mí la pasión por la pintura. Pinto imágenes,
                    paisajes, estados de ánimo y todo lo que me llama la
                    atención. Disfruto muchísimo lo que hago y espero que sea de
                    tu agrado.
                  </p>
                </div>
              </Col>
              <Col className="animado imagen" lg={4}>
                <img
                  className="animado img-fluid"
                  src={require("../imagenes/viviana1.jpg")}
                  alt=""
                />
              </Col>
            </Row>
            {/* Fila 3 tecnicas*/}
            <Row className="tecnicas">
              <Col className="animado texto " lg={8}>
                <div>
                  <h1 >Tecnicas Utilizadas</h1>
                  <ul>
                    <li>
                      Veladuras: Pintura transparente o traslúcida que, aplicada
                      en capas finas y uniformes, sirve para suavizar el tono
                      del fondo que recubre.
                    </li>
                    <li>
                      Pincel seco: es una técnica que se ejecuta con movimientos
                      suaves, ágiles y delicados dejando en cada una de esas
                      pasadas una pequeña cantidad de color.
                    </li>
                    <li>
                      Empastes: es una técnica utilizada en pintura, donde el
                      material se coloca en un área de la superficie en capas
                      muy gruesas,​ por lo general suficientemente gruesa como
                      para que sean visibles los trazos del pincel, cuchillo de
                      paleta o los propios dedos.
                    </li>
                    <li>
                      Degradados: Un degradado es un rango de colores ordenados
                      linealmente. Su principal misión es dar visualmente una
                      transición suave y progresiva entre dos o más colores.
                    </li>
                    <li>Entre otras... </li>
                  </ul>
                </div>
              </Col>
              <Col className="animado imagen " lg={4}>
                <img
                  className="img-fluid"
                  src={require("../imagenes/tecnicas.jpg")}
                  alt=""
                />
              </Col>
            </Row>
            {/* mapa */}
            <Row>
              <Col className="iframe animado">
                <div>
                  <h1 style={{color:"white"}} >En donde me encuentro</h1>
                  <iframe
                    style={{minWidth:"100vw", height:"400px"}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.5771303836377!2d-58.41499628435222!3d-34.7662436736235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2f4b6cf6791%3A0x4a99acb2654f91ff!2sOlaz%C3%A1bal%2C%20Lomas%20de%20Zamora%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1665074330894!5m2!1sen!2sar"></iframe>
                </div>
              </Col>
            </Row>
                {/* envios y disponibilidad */}
                <Row>
              <Col  lg={6}  className="envios animado">
                <div>
                                  <h1 className=" animado" >Envios</h1>
                <p>Dentro de Lomas de Zamora los envios son gratis</p>
                </div>

                    
              </Col>
              <Col lg={6} className="envios animado">
                <div>
                          <h1 className=" animado" >Disponibilidad</h1>
                <p>La disponibilidad para la entrega es inmediata</p>
                </div>
        
              </Col>
        
            </Row>
            {/* mas info */}
            <Row>
              <Col className="medios animado">
                <h1 className=" animado" >Medios de pago</h1>
                     <img
                className="img-fluid"
                src={require("../imagenes/medios.png")}
                alt=""
              />
              </Col>
        
            </Row>
        
            {/* Fila 4  carousel*/}
            <Row className="animado carousel">
              <Col>
                <h1 style={{ textAlign: "center", color: "white" }}>
                  Algunas de mis obras mas destacadas
                </h1>
                <CuadrosCarousel></CuadrosCarousel>
                <div style={{textAlign:"center", padding:"30px"}}>
                       <Button style={{padding:"30px", fontSize:"30px"}}  variant="success">
              <NavLink to="/cuadros/productos">Ir a cuadros</NavLink>
                </Button>
                </div>
           
              </Col>
            </Row>
          </>

 
        </div>
      )}
    </div>
  );
};

export default CuadrosHome;
