
//un MID que se encarga de capturar cualquier error y mostrat , deben tener los 4 parametros
function logErrors(err,req,res,next){
  console.log('logErrors');// para indicar que está capturando errores.
  console.error(err);// para imprimir los detalles del error en la consola
  next(err);
}


function errorHandler(err,req,res,next){
  //maneja los errores capturados por el middleware anterior o
  // cualquier otro middleware de la cadena que haya producido un error
  console.log('errorHandler');

  //responder con un status HTTP 500 (Internal Server Error) y envía un JSON
  // con el mensaje y la pila de seguimiento (stack trace) del error al cliente
  res.status(500).json({
    message:err.message,
    stack:err.stack,
  });
}

module.exports={logErrors,errorHandler}
