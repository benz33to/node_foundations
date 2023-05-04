const colors = require('colors');
const fs = require('fs');

const crearArchivo = async ({ base = 1, hasta = 10, listar = false }) => {

    try {

        let salida, consola = '';
        const nombreArchivo = `./output/tabla-${base}.txt`;

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.green(`${base} x ${i}`)} = ${colors.red(base * i)}\n`;
        };

        if (listar === true) {
            console.log(colors.green('=================='));
            console.log(colors.green('Tabla del'), colors.red(base));
            console.log(colors.green('=================='));
            console.log(consola);
        }

        fs.writeFileSync(nombreArchivo, salida);

        return nombreArchivo;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
};