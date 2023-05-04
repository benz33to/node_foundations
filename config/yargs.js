const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero de calculos que se produciran',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)) {
            throw 'El limite tiene que ser un numero';
        }
        return true;
    })
    .argv;

// const [, , arg3 = 'base=1'] = process.argv;
// const [, base = 1] = arg3.split('=');

module.exports = argv;