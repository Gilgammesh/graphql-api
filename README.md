# graphql-api
_______________________________________________________________________________
El Proyecto es un modelo base de una GraphQL API.
Que puede ser consumida en cualquier FrontEnd como: React, Angular o Vue.
Esta diseñada en un servidor NodeJs y framework Express.
Libreria de GraphQl, con modularizacion de schemas y resolvers.
Conexion a una base de datos MongoDb con Mongoose, con modelos de Colecciones. 
Libreria Babel para usar las ultimas funcionalidades de ES6 y ES7 .

_______________________________________________________________________________
Autor           :   Carlos Santander
Correo          :   carlos.santander@gmail.com
Repositorio Git :   https://github.com/Gilgammesh/graphql-api
Licencia        :   MIT

_______________________________________________________________________________
Una vez descargado o clonado el proyecto.

Primero instalamos las dependencias, ejecutamos en consola:
$ npm install graphql-api

Segundo instalamos las dependencias de desarrollo, ejecutamos en consola:
$ npm install graphql-api --save-dev
o
$ npm install graphql-api -D

_______________________________________________________________________________
Para correr el proyecto en la etapa de desarrollo, ejecutamos en consola:
$ npm run start:dev

Esto arrancara el proyecto en:    http://localhost:4000/graphql

_______________________________________________________________________________
Para construir el proyecto para etapa de produccion, ejecutamos en consola:
$ npm run build
Esto creara una carpeta "dist" en el proyecto que usaremos para produccion.

_______________________________________________________________________________
Para borrar la carpeta dist, ejecutamos en consola:
$ npm run clean

_______________________________________________________________________________
Para correr el proyecto en produccion, ejecutamos en consola:
$ npm start

Esto arrancara el proyecto en:    http://localhost:4000/graphql

-------------------------------------------------------------------------------