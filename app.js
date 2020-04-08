const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log('El archivo ' + colors.red(archivo) + ' fue creado exitosamente'))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Acción no válida');
}



//console.log(`Base: ${argv.base}`);