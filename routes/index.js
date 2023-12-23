//el archivo que va a configurar estas rutas o gestionarlas, a las rutas espesificas


const express = require('express');
const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');

function routerApi(app) {
    const router = express.Router();//inportar el router
  //seria un path, global para lo todos los InPoint´s de abajo
    app.use('/api/v1', router);

    router.use('/products', productsRouter);   //ahora entra con /api/v1/products
    //router.use('/categories', categoriesRouter);
    //router.use('/users', usersRouter);

  }

module.exports = routerApi;
