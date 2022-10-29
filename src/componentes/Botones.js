import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useContext } from "react";
import CuadrosCrudContext from "../context/CuadrosCrudContext";
import "../pagesCss/CuadrosProductos.css";

export default function Botones() {
  const [open, setOpen] = useState(false);
  const { todos, filtrarPorStock, filtrarPorCodigo } =
    useContext(CuadrosCrudContext);

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        style={{ margin: "2px" }}
        onClick={() => {
          setOpen(!open);
          
        }}
        aria-controls="botones-collapse"
        aria-expanded={open}
      >
        Mostrar filtros
      </Button>
      <Collapse in={open}>
        <div id="botones-collapse">
          <Button
            style={{ margin: "5px" }}
            onClick={() => {
              filtrarPorStock(1);
              setOpen(!open);
            }}
            aria-controls="botones-collapse"
            aria-expanded={open}
            variant="primary"
          >
            Disponibles
          </Button>
          
  
          <Button style={{ margin: "5px" }} 
          onClick={() => {
            todos();
            setOpen(!open);
          }}
          variant="primary">
            Todos
          </Button>

          <Button
            style={{ margin: "5px" }}
            onClick={() => {filtrarPorCodigo(1)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Animales
            </Button>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {filtrarPorCodigo(2)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Flores
            </Button>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {filtrarPorCodigo(3)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Infantil
            </Button>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {filtrarPorCodigo(4)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Paisajes/Mar
            </Button>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {filtrarPorCodigo(9)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Espiritual
            </Button>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {filtrarPorCodigo(7)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Fantasia
            </Button>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {filtrarPorCodigo(8)
              setOpen(!open)}}
              aria-controls="botones-collapse"
              aria-expanded={open}
              variant="primary"
            >
              Figura Humana
            </Button>
          </div>
        </Collapse>
      </div>
    );
  }