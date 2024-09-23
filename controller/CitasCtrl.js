const express = require("express"); //importar express
const DaoCitas = require("../DAO/CitasDAO"); //importar el modelo

const CitasCtrl = {}; //exportar el controlador

CitasCtrl.insertar = async(cita) => {
    try {
        delete cita._id; //eliminar el id
        return await DaoCitas.create(cita);
    } catch (error) {
        console.log("Citasctrl.insertarCitas Error: " + error);
    }
}; //fin insertar

CitasCtrl.actualizar = async(cita) => {
    try {
        return await DaoCitas.findByIdAndUpdate(cita._id, cita);
    } catch (error) {
        console.log("Citasctrl.ActualizarCitasError: " + error);
    }
}; //fin actualizar

CitasCtrl.listar = async() => {
    let citas = DaoCitas.find(); //buscar todos los registros (const Citas = await DaoCitas.find();)
    return citas;
}; //fin listar


CitasCtrl.eliminar = async(id) => {
    await DaoCitas.deleteOne({ _id: id }); //eliminar un registro

}; //fin eliminar

module.exports = CitasCtrl;