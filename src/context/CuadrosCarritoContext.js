import React, { useEffect } from "react";
import { createContext, useState } from "react";
// import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
const CuadrosCarritoContext = createContext();

//traigo los datos que haya en el local storage ni bien arranca la aplicacion

const CuadrosCarritoProvider = ({ children }) => {
  let carritoInicial = JSON.parse(localStorage.getItem("carritoInicial")) || [];

  //variables de estado
  const [carrito, setCarrito] = useState(carritoInicial);
 

  // evalua si el elemento esta en el carrito o no
  function elInCart(el) {
    // console.log(el.id);
    let newArray = carrito.filter((elementoCart) => elementoCart._id === el._id);
    newArray.length > 0
      ? 
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'El producto ya se encuentra en la lista de consultas!',
      })
      : setCarrito([...carrito, el]);
    
  }

  //useEffect
  useEffect(() => {
    localStorage.setItem("carritoInicial", JSON.stringify(carrito));
  }, [carrito]);

  let handleAddCarrito = (el) => {
    elInCart(el);

  };

  let handleQuitCarrito = (elementoABorrar) => {
    let newData = carrito.filter(
      (el) => el._id !== elementoABorrar._id
      //si el id coincide se queda fuera del nuevo array, porque al ser id´s iguales no cumplen la validacion
      //todos id´s distintos se quedan en el nuevo array
    );
    setCarrito(newData);
    localStorage.setItem("carritoCuadrosVivi", JSON.stringify(newData));
  };

  // console.log(carrito);
  //esta es la opcion correcta para filtrar, es mas optima porque no se hacen multiples peticiones fetch, es la que deberia usar, en donde el nombre fantasia venga del formulario

  //funcionalidades exportadas
  const data = {
    handleAddCarrito,
    carrito,
    handleQuitCarrito,
    setCarrito,
    
  };

  return (
    <CuadrosCarritoContext.Provider value={data}>
      {children}
    </CuadrosCarritoContext.Provider>
  );
};
export { CuadrosCarritoProvider };
export default CuadrosCarritoContext;
