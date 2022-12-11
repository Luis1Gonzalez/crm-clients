# NOTAS

# CRM - REACT

 1.- El objetivo principal de este curso es incorporar la libreria react-router-dom como medio de enrutado.

2.- Se eliminaron los archivos app.jsx y app.css y se han hecho cambios importantes en el archivo main.jsx.

3.- No se trabajará en App.jsx como veniamos acostumbrado porq ya no existe, ahora mucho de ese trabajo se hara en main.jsx.

## JSON Server

Otra herramienta que usaremos sera JSON Server para construir una Rest API que nos ayude a manejar nuestros clientes en un CRUD.

### Para instalar JSON Server y arrancarlo debemos:

1.-En una consola de powershell abierta con derechos de administrador se debe ingresar el siguente codigo npm:

`npm install -g json-server`

2.-Luego en nuestro proyecto debemos crear un archivo llamado db.json (a nivel del index.html, es decir afuera de src).

3.- Invocaremos el servidor escribiendo en una consola:

`json-server --watch db.json`

4.-Hay que recordar que un json siempre va entre dos { corchetes } y que no se usa signo de = sino :, y que solo se usan comillas simples ("") tanto en la clave como en el valor.

Referencia en: https://www.npmjs.com/package/json-server


### JSON original
    {
      "nombre": "Juan Actualizado",
      "empresa": "Codigo Con Juan",
      "email": "juan@juan.com",
      "telefono": "102013313",
      "notas": "Cliente actualizado",
      "id": 1
    },
    {
      "id": 2,
      "nombre": "Karen",
      "telefono": 138198313,
      "email": "karen@juan.com",
      "empresa": "Codigo Con Juan"
    },
    {
      "id": 4,
      "nombre": "Miguel",
      "telefono": 319381983,
      "email": "miguel@juan.com",
      "empresa": "Codigo Con Juan"
    },
    {
      "id": 5,
      "nombre": "Pedro",
      "telefono": 1398198938,
      "email": "pedro@juan.com",
      "empresa": "Codigo Con Juan"
    }