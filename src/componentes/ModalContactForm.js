import { useModal } from "../hooks/useModal";
// estas funcionalidades me permiten controlar el modal 
// tiene las funcionalidades que me abren y cierran el modal  
import ContactForm from "../paginas/ContactForm";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
const Modals = () => {
  
  //variable de estado, metodo q abre, metodo que cierra
  // aaaaaaaaaaahhhhh, aca estoy desestructurando las variables del modal
  // como son 3 variables, por eso tiene 3 lugares
  // le puedo dar el nombre que yo quiera a cada variable
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  // [isOpen, openModal, closeModal];
  // -isOpen(para saber si esta abierto o cerrado), openModal(lo abre), closeModal(lo cierra)-


  return (
    <div>
      {/* <h2>Modales</h2> */}
      {/* <button onClick={openModal1}>Modal 1</button> */}
      {/* boton que abre el modal */}

      {/* <Modal isOpen={isOpenModal1} closeModal={closeModal1}> */}
        {/* el componente modal ya trae dentro un boton que lo cierra */}
        {/* lo que hago arriba es pasarle propiedades al componente modal */}
        {/* <h3>Modal 1</h3> */}
        {/* <p>Hola ese es el contenido de mi modal 1</p> */}
        {/* <img src="https://placeimg.com/400/400/animals" alt="Animals" /> */}
        {/* el h3,p y la img serian propiedades del children que tiene el modaL a secas */}
      {/* </Modal> */}
      {/* ventana modal */}

      <NavLink onClick={openModalContact}>Contacto</NavLink>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>




   
    </div>
  );
};

export default Modals;
