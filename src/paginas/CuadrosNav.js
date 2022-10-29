// import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaRegBell,
} from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ModalContactForm from "../componentes/ModalContactForm"
// contexto
import { useContext } from "react";
// contexto carrito
import CuadrosCarritoContext from "../context/CuadrosCarritoContext";


function CuadrosNav() {
  //carrito
  const { carrito } = useContext(CuadrosCarritoContext);
 


  return (
    <Navbar
      style={{ position: "fixed", width:"100%", zIndex: "2", top: "0px" }}
      variant="dark"
      bg="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              style={{ width: "50px" }}
              src={require("../imagenes/logo.png")}
              alt=""
            />
          </NavLink>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/viviacrilicocuadros"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/vivisalatino_cuadros/?theme=dark"
          >
            <FaInstagramSquare />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href=" https://api.whatsapp.com/send?phone=541157481228&text=Hola+te+contacto+a+travez+de+tu+pagina+web+Vivi+Salatino+Cuadros&oq=Hola+te+contacto+a+travez+de+tu+pagina+web+Vivi+Salatino+Cuadros"
          >
            <FaWhatsappSquare />
          </a>
                     {/* condicional para ver si el carrito tiene o no contenido */}
                     {carrito.length > 0 ? (
              <NavLink
                style={{
                  border:"solid 2px ",
                 padding:"2px",
                  background:"black",
                  marginLeft: "8px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  transition: "all 2000ms ease",
                }}
                to="/cuadros/carrito"
                activeclassname="active"
              >
                 <FaRegBell />{carrito.length}
              </NavLink>
            ) : ""}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", display:"flex", alignItems:"center" }}
            navbarScroll
          >
            <NavLink to="/cuadros/productos" activeclassname="active">
              Mis Obras
            </NavLink>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
            <NavLink
             to="/cuadros/carrito"
              activeclassname="active"
                >
             Consultas
            </NavLink> 
           
            <ModalContactForm></ModalContactForm>
         
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CuadrosNav;
