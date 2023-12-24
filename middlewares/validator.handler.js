//MID ´s normales

const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //vamos a configurar un MID de forma dinamica en la funcion

  //retorna un Middleware
  return (req, res, next) => {
    const data = req[property]; // propety , decimeos si es params,body o query
    const { error } = schema.validate(data);
    if (error) {
      //si hay un error al validar, le mando un error de tipo boom
      next(boom.badRequest(error));
      //el metodo badrequest es q hay info incorrecta
    }
    next();
  }
}

module.exports = validatorHandler;
