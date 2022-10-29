import React from "react";
import { createContext, useState, useEffect } from "react";
const CuadrosCrudContext = createContext();

const CuadrosCrudProvider = ({ children }) => {
  async function getData() {
    try {
      let res = await fetch("url");
      let json = await res.json();
      setinitialDB(json);
      setProductos(json)
      // console.log(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  //variables de estado
  const [initialDB, setinitialDB] = useState()
  const [productos, setProductos] = useState(initialDB);

  //funciones
  let todos = () => {
    setProductos(initialDB)
  };

  let filtrarPorStock = (stock) => {
    let newData = initialDB.filter((el) => el.stock === stock);
    setProductos(newData);

  };
  let filtrarPorCodigo = (codigo) => {
    let newData = initialDB.filter((el) => el.codigo === codigo);
    setProductos(newData);
  };
 
  const data = {
    productos,
    todos,
    filtrarPorStock,
    filtrarPorCodigo,
    getData,
    initialDB
  };

  return (
    <CuadrosCrudContext.Provider value={data}>
      {children}
    </CuadrosCrudContext.Provider>
  );
};
export { CuadrosCrudProvider };
export default CuadrosCrudContext;
