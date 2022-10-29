// un contexto internamente tiene 2 objetos
// Primero, un proveedor : un wrapper (envoltorio) que va proveer a todos los elementos internos que tenga, todos los valores que van a ser globales. Envuelve a todos lso componentes de mi app que necesiten acceder a det valores, en este ejemplo cabecera, main . Es decir provee valores a todos los hijos que tenga internamente.
// Segundo, un consumer: mecanismo que me permite consumir los valores que me da el proveedor. El componente useContext vino a reemplazar al consumer

import { createContext, useState } from "react";

// CREATE CONTEXT---------------------------
const AutenticacionContext = createContext();
// creo un contexto con el nombre que quiero darle al mismo, lo hago en una variable

// VALORES INICIALES van fuera del componente proveedor
const initialautenticacion = true;

//COMPONENTE PROVEEDOR---------------------------
const AutenticacionProvider = ({ children }) => {
  // VARIABLES DE ESTADO van dentro del componente proveedor
  const [autenticacion, setautenticacion] = useState(true);
  

  //FUNCIONES que manipulan los estados van dentro del componente proveedor
  const handleautenticacion = (e) => {
    if (autenticacion) {
      // si es verdadera signifca que la sesion esta activa y la queres cerrar
      setautenticacion(null);
    } else {
      // caso contrario signifiac que no tienes sesion y la qures inciar
      setautenticacion(true);
    }
  };
  const data = {
    autenticacion,
    handleautenticacion}

  return (
    <AutenticacionContext.Provider value={data}>
      {children}
    </AutenticacionContext.Provider>
  );
  //Este contexto envuelve a los hijos (children) a los que les va a compatir data. Data son los datos que va a recibir el proveedor de este contexto para poder compartirlos
};

// COMPONENTE CONSUMER---------------------------
// a partir de la version 1.8 ahora se usa el useContext

export { AutenticacionProvider };
// RELACIONADO CON "LOS DATOS QUE PROVEE"
// exporto el componente proveedor, quien retorna al contexto
//este componetne proveedor envuelve a los componentes que van a usar sus propiedaes, envuevel componetnes hijos
export default AutenticacionContext;
// RELACIONADO A LA FORMA EN LA QUE VAN A HACER USO DE LOS DATOS PROVEIDOS POR EL COMPONENTE PROVEEDOR
// exporto por defecto el contexto, retornado por el componente proveedor
// este contxto a su vez, lo importo y desestructuro en cada uno de los componentes hijos envueltos dentro del provider padre,ya que son estos hijos quienes haran uso de la data que el padre contiene
