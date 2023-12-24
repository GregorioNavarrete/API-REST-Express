const express = require('express');
const app = express();// creamos la aplicacion
const { logErrors,errorHandler,boomErrorHandler } = require('./middlewares/error.handler');
//const { validatorHandler } = require('./middlewares/validator.handler');

const cors = require('cors');

const routerApi = require('./routes/index');




app.use(express.json());//para que pueda resibir info en JSON
app.use(cors()); // lo usamos como un MID


const puerto = 3000;

//configuro la vista en la ruta principal
app.get('/', (req, res) =>{
  res.send('Hola mundo !!');
} );



app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});


// usamos el moduli definido como gestor de las rutas,

routerApi(app);

// los MID de error, es necesario despues del routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//app.use(validatorHandler); es de forma local








//para que la plicacion salgapor el puerto
app.listen(puerto, ()=>{
  console.log('mi puerto' + puerto);
});

console.log('My App');
