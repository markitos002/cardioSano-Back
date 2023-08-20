const express = require("express"); //importar express
const { PersonaDAO } = require("../DAO/PersonasDAO"); //importar el modelo

const PersonasCtrl = {};

PersonasCtrl.insertar = async(persona) => {
    try {
        delete persona._id;
        return await PersonaDAO.create(persona);
    } catch (error) {
        console.log("Personasctrl.insertarPersonas Error: " + error);
    }
}; //fin insertar

PersonasCtrl.actualizar = async(persona) => {
    try {
        return await PersonaDAO.findByIdAndUpdate(persona._id, persona);
    } catch (error) {
        console.log("Personasctrl.ActualizarPersonasError: " + error);
    }
}; //fin actualizar

PersonasCtrl.listar = async() => {
    let personas = PersonaDAO.find();
    return personas;
}; //fin listar


PersonasCtrl.eliminar = async(id) => {
    await PersonaDAO.deleteOne({ _id: id });
}; //fin eliminar


PersonasCtrl.listarPacientes = async() => {
    const Personas = await PersonaDAO.find({ rol: "PACIENTE" });
    return Personas;
};

PersonasCtrl.listarMedico = async() => {
    const Personas = await PersonaDAO.find({ rol: "MEDICO" });
    return Personas;
};

module.exports = PersonasCtrl;