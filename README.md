# las unicas modificaciones se hicieron en los archivos : 

dependecias nuevas : npm i @hapi/boom , documentacion  https://hapi.dev/module/boom/


services/product.service.js : usamos los metodos de "boom" para indicar que errores puede tener, q la libreria nos dira el codigo

middlewares/error.handler.js : definimos el MID de "boomErrorHandler", para identificar que un error es de tipo boom


index.js : llamamos a al MID de aplicacion en la posicion correcta  "boomErrorHandler"


Ejemplo : 
  * si el cliente pide una producto que no esta registrado, nos aparecera
  {
	"statusCode": 404, 
	"error": "Not Found",
	"message": "product not found"
  }

  * si el cliente pide una producto que esta bloquedo 
  {
	"statusCode": 409,
	"error": "Conflict",
	"message": "product is block"
  }
