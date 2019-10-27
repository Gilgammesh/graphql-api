/*****************************************************************************************/
// Añadimos los Imports //
/*****************************************************************************************/
import mongoose from "mongoose";
import { config } from "dotenv";
import "colors";

/*****************************************************************************************/
// Obtenemos la ruta de la Base de Datos desde el entorno y almacenamos //
/*****************************************************************************************/
config();
const URI = process.env.MongoDB_URI || 'mongodb://localhost:27017/test';

/*****************************************************************************************/
// Activamos las promesas para las funciones de Mongoose //
/*****************************************************************************************/
mongoose.Promise = global.Promise;

/*****************************************************************************************/
// Creamos la conexión a la Base de Datos MongoDB y exportamos //
/*****************************************************************************************/
export const connect = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a MongoDB'.black.bgBrightWhite.bold);
    }
    catch (err) {
        console.log('Error en la conexión: '.bgBrightWhite);
        console.log((err + '').red).bgBrightWhite;
    }
}