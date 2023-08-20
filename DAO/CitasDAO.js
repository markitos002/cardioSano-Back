const conexion = require('../DB/conexionDB.js'); //importar el modelo
const { personaSchema } = require('./PersonasDAO'); //importar el modelo

const citaSchema = conexion.Schema({
    horaInicio: String,
    horaFin: String,
    fecha: String,
    cancelacion: Boolean,
    medico: personaSchema,
    paciente: personaSchema,
}, { collection: 'Cita', versionKey: false });

const DAOCitas = conexion.model('Cita', citaSchema);
module.exports = DAOCitas;