const express = require("express");
const cors = require("cors");
const CtrlPersonas = require("./controller/PersonasCtrl.js");
const CtrlCitas = require("./controller/CitasCtrl.js");

const app = express();
app.use(express.json());
app.use(cors());


//// // Personas
app.get('/api/personas', async(req, res) => {
    try {
        const personas = await CtrlPersonas.listar();
        res.status(200).json(personas);
    } catch (error) {
        console.log("error get personas: " + error);
        res.status(400).send("Error get de personas" + error);
    }
});

app.post('/api/personas', async(req, res) => {

    try {
        let persona = req.body;
        await CtrlPersonas.insertar(persona);
        res.status(201).json(persona);
    } catch (error) {
        console.log("error personas post  : " + error);
        res.status(400).send("Error personas post " + error);
    }
});

app.put('/api/personas', async(req, res) => {
    try {
        let persona = req.body;
        await CtrlPersonas.actualizar(persona);
        res.status(200).json(persona);
    } catch (error) {
        console.log("error put personas : " + error);
        res.status(400).send("Error put actualizando personas " + error);
    }
});

app.delete('/api/personas/:id', async(req, res) => {
    try {
        let id = req.params.id;
        await CtrlPersonas.eliminar(id);
        res.status(204).send("Persona eliminada");
    } catch (error) {
        console.log("error delete  : " + error);
        response.status(400).send("Error delete " + error);
    }
});


app.get('/api/pacientes', async(req, res) => {
    try {
        //console.log("solicitando lista");
        const personas = await CtrlPersonas.listarPacientes();
        res.status(200).json(personas);
    } catch (error) {
        console.log("error personas get: " + error);
        res.status(400).send("error personas get: " + error);
    }
});

app.get('/api/medicos', async(req, res) => {
    try {
        //console.log("solicitando lista");
        const personas = await CtrlPersonas.listarMedico();
        res.status(200).json(personas);
    } catch (error) {
        console.log("error personas get: " + error);
        res.status(400).send("error personas get: " + error);
    }
});


/// Citas

app.get('/api/citas', async(req, res) => {
    try {
        const citas = await CtrlCitas.listar();
        res.status(200).json(citas);
    } catch (error) {
        console.log("error get  : " + error);
        res.status(400).send("Error get " + error);
    }

});

app.post('/api/citas', async(req, res) => {
    try {
        let cita = req.body;
        await CtrlCitas.insertar(cita);
        response.status(201).json(cita);
    } catch (error) {
        console.log("error post  : " + error);
        res.status(400).send("Error post " + error);
    }
});


app.put('/api/citas', async(req, res) => {
    try {
        let cita = req.body;
        await CtrlCitas.actualizar(cita);
        res.status(200).send("Cita actualizada");
    } catch (error) {
        console.log("error put  : " + error);
        res.status(400).send("Error put " + error);
    }
});


app.delete('/api/citas/:id', async(req, res) => {
    try {
        let id = req.params.id;
        await CtrlCitas.eliminar(id);
        res.status(200).send("Cita eliminada");
    } catch (error) {
        console.log("error delete  : " + error);
        res.status(400).send("Error delete " + error);
    }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("El servidor está corriendo");
});



/* Probar con Postman en puerto 1900
app.listen(1900, () => {
    console.log('Servidor corriendo en puerto 1900');
});
*/
