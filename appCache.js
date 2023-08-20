const express = require("express");

const app = express();
app.use(express.json());


let personas = [
    { cc: "13535943", nombre: "Silvia Yuyeimy", apellido: "Porras Diaz", edad: 21, genero: "F" },
    { cc: "27559602", nombre: "Diego Jesús", apellido: "Buenaventura Ojeda", edad: 37, genero: "M" },
    { cc: "1399453", nombre: "Fabián Aarley", apellido: "Castañeda Gutierrez", edad: 15, genero: "M" },
    { cc: "2380053", nombre: "Dayana María", apellido: "Perez Albarracin", edad: 27, genero: "F" }
];

app.get('/api/personas', (request, response) => {
    response.status(302).json(personas);
});

app.post('/api/personas', (request, response) => {
    let persona = request.body;
    let existe = false;
    for (let i = 0; i < personas.length; i++) {
        if (persona.cc == personas[i].cc) {
            personas[i] = persona;
            response.status(200).json(personas);
            i = personas.length;
            existe = true;

        }

        if (!existe) {
            personas.push(persona);
            response.status(201).json(personas);
        }
    }


    personas.push(persona);
    response.status(201).json(personas);
});

app.delete('/api/personas', (request, response) => {
    let persona = request.body;
    let borrado = false;
    for (let i = 0; i < personas.length; i++) {
        if (persona.cc == personas[i].cc) {
            personas.splice(i, 1);
            borrado = true;
            response.status(200).json(personas);
        }

        if (!borrado) {
            response.status(400).json("No fue borrado");
        }
    }


    personas.push(persona);
    response.status(201).json(personas);
});




app.get('/', (request, response) => {
    response.send("<h1>Hola a Todos</h1>");
});


app.listen(1900, () => {
    console.log("El servidor está corriendo");
});