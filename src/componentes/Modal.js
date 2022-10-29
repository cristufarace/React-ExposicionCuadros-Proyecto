import "./Modal.css";
//aca importo el css

const Modal = ({ children, isOpen, closeModal }) => {
  // -isOpen(para saber si esta abierto o cerrado), openModal(lo abre), closeModal(lo cierra)-
  // fueron creadas en el hook use modal
  const handleModalContainerClick = (e) => e.stopPropagation();
  // hace que al hacer clic dentro de la ventana modal esta no se cierre
  // se cerraria pq la misma esta dentro del article( es la capa de transparecnia de fondo)
  // el article tiene la funcion onclic que cierra el modal
  // esta funcion hace que la progagacion del evento on click que cierra el modal, no tenga efecto
  // dentro de la tarjeta modal, es decir que se detenga la propagacion del evento que lo cierra
  // de que propagacion hablo?
  // como el container(contenido de la ventana modal) esta dentro del articile,ese clic afectaria
  //  al container
  //  cuando se hace clic en cualquier parte de la 
  // pantalla, ese clic dedencadena el efecto del closeModal
  // pero al poner stopprapagation , el efecto de cierre no afectara a la ventana modal se tiene 
  //el efecto en la frontera de la ventana, no la afecta, no puede penetrarla

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      {/* el article vendria a ser la parte negra con opacidad 0.075 */}
      {/* el isOpen lle agrega la clase is-open y esa clase cambia el display none por el flex */}
      {/* ahhh, la clase .modal tiene display :none */}
      {/* la clase .modal.is-open tiene display: flex */}
      {/* el condicional quiere decir: si isOpen es true, el clasname se llama .modal.is-open  */}
      {/* si isOpen es false, el classname se llamara solo .modal */}
      {/* isOpen arranca en falso siempre */}
      {/* el boton que hace aparecer el modal, hace que isOpen se vuelva true */}
      {/* el metodo closeModal creado en el hook useModal vuelve a false isOpen */}

      <div className="modal-container" onClick={handleModalContainerClick}>
        {/* el container vendria a ser la tarjeta del modal */}
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
        {/* todo componente tiene la posibilidad de tener la propiedad children */}
        {/* children es el contenido del modal */}
      </div>
    </article>
  );
};

export default Modal;
