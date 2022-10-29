// export const helpHttp = () => {
//   const customFetch = (endpoint,options) => { //el custom fetch recibe opcione
//     const defaultHeader = {accept:"application/json",}
//     const controller = new AbortController() //si no hay respeusta del servidor permite abortar la peticion
//     options.signal = controller.signal //del objeto que me pasa el usuario llamada options ubicado en la peticion fetch , agrego una señal llamada signal, q me permite cancelar la peticion con un set time out
//     options.method = options.method || "get" //del objeto que me pasa el usuario llamada options ubicado en la peticion fetch , si trae metodo dejala y si no trae nada es un get
//     options.headers = options.headers? {...defaultHeader, ...options.headers} : defaultHeader //del objeto que me pasa el usuario llamada options ubicado en la peticion fetch, si usuario especifico alguna cabecera, hago una mezcla entre las cabeceras q me trae el usuario y las que declare por defecto arriba de todo, si no me indica cabecera usa las default header
//     options.body = JSON.stringify(options.body)|| false;
//     if(!options.body)delete options.body 
//     //si el body no existe lo igualo a falso pra q en la linea sguiente si es es falso, elimine el body, porque ? porque on puedo enviar un body vacio o falso
//     //convierto el OBJETO a TEXTO para enviarlo al back, es decir el back recibe TEXTO por eso cuando defino las rutas uso json.parse() porque lo transfromo de texto a objeto, es decir se envian textos al back!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! pero cuidado.......... porque en una peticion get no mando datos, solo recibo datos por eso es al pedo el stringify enn ese caso, por eso es probable que el optiones.body no figure en la peticion fetch del usuario. Por eso la logica seria, cuando exista options.body lo conviertes a texto, y cuando no, la opcion de convertilo sea falsa. 
//     console.log(options); //si desp de 5 segundos no hay repeusta de la api, aborta la peticion
//     setTimeout(() => {
//       controller.abort()
//     }, 5000);

//     return fetch (endpoint,options)
//     .then((res)=> {
//       res.ok ? res.json(): Promise.reject({}) //si la propieda ok de la respuesta viene, etonces la respuesta  la parseas a json, caso conrario rechaza la promesa
//     })
//     .catch((err)=> {console.log(err)})
//     //todo lo anterior me va a retornar la ejecucion de una peticion fetch, donde la url sera la definida ne la vriale endpoint, las options seran las q me pase el usuario, + todas las opciones q le agregue yo para q trabaje de una forma mas eficiente.
//     //el fetch me retorna promesa, por eso then y catch

//   }
//   const get = (url,options = {}) => {customFetch(url,options)};//recibe una url y opciones, y ejecutra la funcion customFetch con los paremetros recibidos. Si no trae ninguna option, queda vacio ese campo
//   const post = (url,options) => {
//     options.method = "post"
//     return customFetch (url,options)
//   };
//   const put = (url,options) => {
//     options.method = "put"
//     return customFetch (url,options)
//   };
//   const del = (url,options) => {
//     options.method = "delete"
//     return customFetch (url,options)
//   };

//   return {
//     get,
//     post,
//     put,
//     del,
//   }

// }


export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
      
    };

    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);
    setTimeout(function(){ 
      controller.abort()
    }, 10000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
            //si la promesa falla se genera este OBJETO de error
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};