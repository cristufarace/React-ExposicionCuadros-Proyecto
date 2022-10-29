// hook personalizado para mejorar la ui. Los hooks personalizados contienen logica, no codigo JSX. "regresan" la logica  que contactForm va a utilizar
// React se importa cuando voy a generar contenido JSX
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
 ;
//a useForm le paso una funcion {validateForm} que es la que hara las validaciones
//{validateForm} es una validaicon que va a recibir el hook personalizado con todas las validac del form
export const useForm = (initialForm, validateForm) => {
 
  // VARIABLES DE ESTADO QUE CONTRALAN EL FORMULARIO
//   el form contiene los values del form
const [form, setForm] = useState(initialForm);
//si el objeto errors, se mantiene vacio signica que no hubo errorres, y puedo enviar el formulario
const [errors, setErrors] = useState({});
// como voy a tner un evento que enviara el formulario, debo contemplar el tiempo que tarda el envio del form
const [loading, setLoading] = useState(false);
//como es un formulario de envio voy a recibir una resputa tras el envio,la misma la guarda aca
const [response, setResponse] = useState(null);

  // FUNCIONES QUE SE EJECUTARAN EN LOS --eventos-- DE LOS --elementos JSX-- DEL FORM
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  //crea una copia del objeto del formulario y luego actualiza lo que cambio, detecta cuando estoy escribiendo y haya un cambio en los valores dle input

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
    //se lanzan las validaciones cuando se pierde el foco en el elemento del formulario
  //cuando los elementos del form pierdan el foco de la pagina 1) se actualiza el estado nuevamente con el handlechange , 2)la variable de los errores, a cada elemento del form que tenga un error, tendria que irle asignando un mensaje que luego lanzare en la ui 3) error va a recibir como parametro la funcion validateform, que es lo que va a validar esta funcion? cada una de las variables del form q corres a c/u de los input

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form)); //valido que no existan errores

    if (Object.keys(errors).length === 0) {
      //valido que las llaves de mi objeto errores venga vacio, por eso uso el metodo keys, y luego le paso el objeto que quiero evaluar... si eso se cumple, se procesa el formulario
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/179db8b5ed92bc0cae01ed7429d4fedd", {
          body: form,
          headers: {
            "Content-Type": "application/json",
          Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          // cuando me devuelve la respuesta , set loading lo vuelvo falso para que deje cargar el loader
          setResponse(true);
          // cuando me devuelve la respuesta , set response lo vuevlo true para enviar un mensaje
          setForm(initialForm);
          // cuando me devuelve la respuesta , vacio el formulario
          // setTimeout(() => setResponse(false), 5000);
          //response lo vuelvo falso para que desp de 5 segundos para borrar el mensaje de la pantalla
        });
    } else { //caso contrario, es decir, si hay errores, le digo que no haga nada
      return;
    }
  };
  //hace el envio de los datos

  //un hook personalizado puede retornar cualquier tipo estructura de dato, objeto, array, etc etc. Aca voy a retornar un objeto con las 4 variables de estado que cree antes.
  //No necesito las funciones actualizadoras porque eso va a suceder en los eventos handle,que los van a desencadenar loe eventos del form
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
