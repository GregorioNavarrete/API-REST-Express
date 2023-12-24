# las unicas modificaciones se hicieron en los archivos : 

dependecias nuevas : npm i cors 



index.js : llamaos como middleware , para habilitar a cualquier domimio para conectarse con el servidor o API 



# Vi el video varias veces y no pude conectar un fontRandom a la API

* posibles razones, algunos errores de posicion o comandos

* solo llegue a ejecutar el comando simple de "app.use(cors());" 

* desde una cualquir pagina no pude llamar a la API 
 la pagina es  :

 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        (async()=> {
            const response = await fetch('http://localhost:3000/api/v1/products');
            const data = await response.json();
            console.log(data);
        })
        
        //await se utiliza para esperar a que la solicitud se complete y devuelva una respuesta.
        // fetch() devuelve una promesa que resuelve en un objeto Response.

        /*
        sin CORS, por estar en puertos diferentes 
        outPut: 
        Failed to load resource: the server responded with a status of 404 (Not Found)

        significa que el servidor no pudo encontrar el recurso que estabas intentando acceder.
         Esto puede deberse a varias razones, como que el recurso no exista, que el servidor esté 
         caído o que no tengas permiso para acceder a él.
        */


    </script>
</body>
</html>

