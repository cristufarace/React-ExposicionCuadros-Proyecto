import { useState } from "react";

export const useModal = (initialValue = false) => {
  // inicialemnte el modal arranca cerrado/oculto
  const [isOpen, setIsOpen] = useState(initialValue);
  // sirve para indicar si el modal esta abierto o no....

  const openModal = () => setIsOpen(true);
  // me permite abrir el modal

  const closeModal = () => setIsOpen(false);
  // me permite cerrar el modal

  return [isOpen, openModal, closeModal];
  // retorno las variables a manera de array, tambien se puede hacer a manera de objeto
};


// estas funciones las uso en donde mando a llamar al modal, no la estructura del modal a secas