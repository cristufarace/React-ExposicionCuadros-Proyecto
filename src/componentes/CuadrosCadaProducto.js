import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../pagesCss/CuadrosCadaProducto.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CuadrosCarritoContext from "../context/CuadrosCarritoContext";
// modal
// estas funcionalidades me permiten controlar el modal
// tiene las funcionalidades que me abren y cierran el modal
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
//bootstrap
import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";

function CuadrosCadaProducto({ el }) {
  // const navigate = useNavigate()
  const { handleAddCarrito } = useContext(CuadrosCarritoContext);
  // modal
  const [isOpenImage, openModalImage, closeModalImage] = useModal(false);

  // useState
  const [textoBoton, setTextoBoton] = useState("Consultar");
  const [disable, setDisable] = useState(false);

  let link = `/cuadros/${el._id}`;
  // path="/cuadros/:image.url/:description/:medidas"

  return (
    <Col xs={6} md={4} lg={3} style={{ marginBottom: "10px" }}>
      <Card
        style={{
          background: "rgba(0,0,0,0.7)",
          width: "auto",
          color: "white",
          height: "auto",
          minHeight: "100%",
          boxShadow: "0 4px 8px 0 black, 0 6px 20px 0 black",
        }}
      >
        <Card.Text
          style={{
            textAlign: "center",
            paddingTop: "5px",
            background: "black",
          }}
        >
          {el.motivo}
        </Card.Text>

        <Card.Img
          onClick={openModalImage}
          variant="top"
          style={{ maxWidth: "100%", maxHeight: "250px", minHeight: "250px" }}
          src={el.image.url}
        />
        <Modal isOpen={isOpenImage} closeModal={closeModalImage}>
          <Card.Img
            variant="top"
            style={{ maxWidth: "100%", height: "100%" }}
            src={el.image.url}
          />
        </Modal>

        <Card.Body
          style={{ display: "flex", alignItems: "end", flexWrap: "wrap" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "auto",
              justifyContent: "center",
              alignItems: "end",
              textAlign: "center",
            }}
          >
            {el.stock > 0 ? (
              <Button
                disabled={disable}
                onClick={() => {
                  handleAddCarrito(el);
                  setTextoBoton("Agregado para consultar");
                  setDisable(true);
                  // navigate("/cuadros/carrito")
                }}
                style={{ marginBottom: "5px", width: "auto" }}
                variant="primary"
                className="style"
              >
                {textoBoton}
              </Button>
            ) : (
              <Button
                disabled
                style={{ marginBottom: "5px", width: "auto" }}
                variant="danger"
              >
                No disponible
              </Button>
            )}

            <Button
              variant="success"
              style={{ marginBottom: "5px", width: "auto" }}
            >
              <NavLink to={link} data={el}>
                +Info
              </NavLink>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CuadrosCadaProducto;
