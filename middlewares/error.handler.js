//un MID que se encarga de capturar cualquier error y mostrat , deben tener los 4 parametros
function logErrors(err,req,res,next){
  console.log('logErrors');// para indicar que está capturando errores.
  console.error(err);// para imprimir los detalles del error en la consola
  next(err);
}


function errorHandler(err,req,res,next){r
  console.log('errorHandler');


  res.status(500).json({
    message:err.message,
    stack:err.stack,
  });
}

//para identificar que el error es de tipo boom
function boomErrorHandler(err,req,res,next){
  if(err.isBoom){
    //existe la propiedad isboom , q boom lo agrega al encontrar un error
    const{output}=err;

    //repondemos la peticion
    //expreso el "status" y "json" de forma dinami con los metodos que viene del "err"
    res.status(output.statusCode).json(output.payload);
  }else{
    //si no es de tipo boom, que valla por los siguiente MID de error
    next(err);
  }

}
module.exports={logErrors,errorHandler,boomErrorHandler}
