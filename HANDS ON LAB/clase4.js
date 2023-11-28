const fs = require('fs');
const { DateTime } = require("luxon");

const fechaActual = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// esto es con CALLBACKS

// const escribirYLeerArchivo = () => {
//     fs.writeFile('./HANDS\ ON\ LAB/./archivoFechaYHora.txt', fechaActual, (error) => {
//         if (error) {
//             return console.error('error al crear o escribir el archivo')
//         }

//         fs.readFile('./HANDS\ ON\ LAB/./archivoFechaYHora.txt', 'utf-8', (error, resultado) => {
//             if (error) {
//                 return console.error('error al leer el archivo')
//             }
//             console.log(resultado);
//         })
//     })
// };

//ESTO ES CON ASYNC/AWAIT
const escribirYLeerArchivo = async () => {
    await fs.promises.writeFile('./HANDS\ ON\ LAB/./archivoFechaYHora.txt', fechaActual, 'utf-8');

    let contenido = await fs.promises.readFile('./HANDS\ ON\ LAB/./archivoFechaYHora.txt', 'utf-8');
    console.log(contenido)

};

escribirYLeerArchivo();