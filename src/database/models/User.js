/*****************************************************************************************/
// Añadimos los Imports //
/*****************************************************************************************/
import { Schema, model } from "mongoose";

/*****************************************************************************************/
// Definimos el eschema de User //
/*****************************************************************************************/
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    img: {
        type: String
    }
}, {
    timestamps: true
})

/*****************************************************************************************/
// Exporamos el model User, usando el schema creado //
/*****************************************************************************************/
export default model('User', userSchema);