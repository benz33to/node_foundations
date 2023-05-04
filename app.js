const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

crearArchivo(argv)
    .then(nombreArchivo => console.log(colors.blue.underline(nombreArchivo, 'creado')))
    .catch(err => console.log(colors.red.underline(err)));

