const mongoose = require("mongoose");
let uri = "mongodb+srv://MarcosCM-DB:aHNDJQgpRXmuDpdv@cluster0.ojams.mongodb.net/Test?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    console.log("conectado a MongoDB"); //conectado a MongoDB
}).catch((e) => {
    console.log("Error de conexion" + e); //Error de conexion
});

//fin de la conexion

module.exports = mongoose;