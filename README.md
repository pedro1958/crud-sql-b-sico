# Backend CRUD (Create, Read, Update, Delete) con MySql Básico

## Dependencias de Producción

1. dotenv
2. express
3. express-myconnection
4. morgan
5. mysql

## Dependencias de Desarrollo

1. nodemon

Para usar este proyecto, descargarlo y ejecutar
'npm i'

Crear en la raíz del proyecto el archivo .env con las siguientes variables
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=agenda

En la aplicación de su preferencia importar el archivo db.sql, que encotrara en la carpeta sql, el que contiena la estructura de la tabla agenda que se utizará en el desarrollo de este proyecto.

Para ejecutar el servidor utilizar:
'npm run dev'

Para probar los endpoints en postman o en la extensión de VC denominada Thunder Client
Traer todos: http://localhost:5000/api/v1/agendad | verbo http GET
Traer uno por id: http://localhost:5000/api/v1/agenda/id | reemplazar id por el valor indicado en la tabla agenda en su columna id | verbo http GET
Crear nuevo: http://localhost:5000/api/v1/agendad | verbo http POST
Modificar uno por id: http://localhost:5000/api/v1/agenda/id | reemplazar id por el valor indicado en la tabla agenda en su columna id | verbo http PUT
Eliminar uno por id: http://localhost:5000/api/v1/agenda/id | reemplazar id por el valor indicado en la tabla agenda en su columna id | verbo http DELETE

Est es una pequeña sintesis mque espero que les sirva.

Saludos
