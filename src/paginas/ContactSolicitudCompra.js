import React from "react";
import Mesage from '../componentes/mesage';
import Loader from '../componentes/loader';
import "../pagesCss/Contact.css"
import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import CuadrosCarritoContext from "../context/CuadrosCarritoContext";
import Button from "react-bootstrap/Button";

//Esta funcion se ejecuta en el blur. Recibe los datos de la variable de estado form creada en el hook personaizado ,  hace las validaciones y si existen errores lo guarda en un objeto que luego este objeto llamado errors, sera insertado en la variable de estado errors mediante seterrors ¿como pasa esto? va a pasar al ejecutarse handleblur del hook personalizado
const validationsForm = (form) => {
  let errors = {}; //Ete objeto lo que hace es crear una propiedad por cada error que haya exisiido en el formulario
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;//solamente se aceptan letras mayus y minus y algunos caracteres ajenos al ingles y el espacio en blaco
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; //valida que el correo electronico sea valido
  let regexComments = /^.{1,255}$/; // cuenta que los caracteres de la caja de comentarios vaya de 1 a 255

  // de esta forma se muestran tdos los mensajes juntos, si quiero que se muestren de 1 en 1 tengo que concatenar todas las validacioes en un solo if
  if (!form.name.trim()) {
    // si el input name no tiene info...
    errors.name = "El campo 'Nombre' es requerido"; //por cada mensaje de error, lo confuro al mismo inut que esta dando el rror, por eso le pongo el mismo name
  } else if (!regexName.test(form.name.trim())){ //cuando la expresion regular regexname no coincida con lo qe viene en el nombre del formulario , entonces....
    errors.name = "El campo nombre solo acepta letras y espacios en blanco"
  }

  if (!form.email.trim()) {
    // si el input name no tiene info...
    errors.email = "El campo 'email' es requerido"; //por cada mensaje de error, lo confuro al mismo inut que esta dando el rror, por eso le pongo el mismo name
  }else if (!regexEmail.test(form.email.trim())){ //cuando la expresion regular regex no coincida con lo qe viene en el nombre del formulario , entonces....
    errors.email = "El campo email es incorrecto"
  }
  if (!form.comments.trim()) {
    // si el input name no tiene info...
    errors.comments = "El campo 'comments' es requerido"; //por cada mensaje de error, lo confuro al mismo inut que esta dando el rror, por eso le pongo el mismo name
  }else if (!regexComments.test(form.comments.trim())){ //cuando la expresion regular regexname no coincida con lo qe viene en el nombre del formulario , entonces....
    errors.comments = "El campo nombre solo acepta hasta 255 caracteres"
  }


  
  return errors;
};


// de use form voy a desestructurar los valores iniciales
const ContactSolicitudCompra = () => {
  const { carrito, setCarrito } = useContext(CuadrosCarritoContext);
  const initialForm = {
    // para evitar los warnings inicio el formulario con cadenas vacias
    // el hook personaliaddo recibe este valor inicial y desp lo reemplaza con lo que venga del form
    name: "",
    email: "",
    telefono: "",
    carrito: JSON.stringify(carrito),
    comments: "",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

 
//   el hook personalizado inicia con los valores de initial form y a su vez recibe a la funcion que va a ejecutar las validaciones del formulario
  return (
    <div id="containerForm" >
      <form onSubmit={handleSubmit}>
         <Button type="submit" variant="success" >Enviar Consulta</Button> 
        {/* utlizo un condicional render entre cada input para enviar el mensaje de error, en caso de corresponder... ¿como? */}
        
        {/* si la variable errors.name (la cual la desestructure del hook personalizado) tiene contenido, pongo un parrafo que imprima la variable   */}
        {errors.name && <Mesage msg={errors.name} bgcolor="red" ></Mesage>}
        <input
          required
          type="text"
          name="name"
          placeholder="Escribe tu  nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
        />

         {errors.email && <Mesage msg={errors.email} bgcolor="red" ></Mesage>}
        <input
          required
          type="email"
          name="email"
          placeholder="Escribe tu  email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
        />

        {errors.telefono && <Mesage msg={errors.telefono} bgcolor="red" ></Mesage>}
        <input
          required
          type="text"
          name="telefono"
          placeholder="Escribe tu telefono de contacto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.telefono}
        />

        <input
          hidden
          required
          type="text"
          name="carrito"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.carrito}
        />

        {errors.comments && <Mesage msg={errors.comments} bgcolor="red" ></Mesage>}
        <textarea
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
        ></textarea>
           
      </form>
      {/* CUANDO LOADING SEA TRUE.......... MOSTRA EL LOADER */}
      {loading && <Loader></Loader>} 
      {/* CUANDO RESPONSE  SEA TRUE... ¿CUANDO VA A SER TRUE? cuando se ejecuta el then de la promesa de hanndle submit que lo vuelve true y sigunifaa que se mando todo bien....... MOSTRA  MOSTRA EL SIGUIENTE MENSAJE */}
      {response && <Mesage msg="Los datos han sido enviados. Pronto el artista se contactara contigo" bgcolor="green" ></Mesage> }
    </div>
  );
};

export default ContactSolicitudCompra;
