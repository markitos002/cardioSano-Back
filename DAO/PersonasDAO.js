const conexion = require('../DB/conexionDB.js'); //importar el modelo

const personaSchema = conexion.Schema({
    nombres: String,
    apellidos: String,
    documento: String,
    fechaNacimiento: String,
    usuario: String,
    clave: String,
    rol: String
}, { collection: 'Persona', versionKey: false });

const PersonaDAO = conexion.model('Persona', personaSchema);
module.exports = { PersonaDAO, personaSchema };