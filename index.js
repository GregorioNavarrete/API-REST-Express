const express = require('express');
const app = express();// creamos la aplicacion
const { logErrors,errorHandler } = require('./middlewares/error.handler');

const routerApi = require('./routes/index');

app.use(express.json());//para que pueda resibir info en JSON

const puerto = 3000;

//configuro la vista en la ruta principal
app.get('/', (req, res) =>{
  res.send('Hola mundo !!');
} );



app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});


// usamos el moduli definido como gestor de las rutas,
// y le pasamos la aplicacion (lo mas inpotante )
routerApi(app);

// los MID de error, es necesario despues del routing
app.use(logErrors);//tiene que ir antes xq tiene el next(), para ir al siguiente MID
app.use(errorHandler);








//para que la plicacion salgapor el puerto
app.listen(puerto, ()=>{
  console.log('mi puerto' + puerto);
});

console.log('My App');
