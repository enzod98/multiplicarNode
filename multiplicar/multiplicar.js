//requireds
const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un número válido');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, error => {
            if (error) reject(error);
            else {
                resolve(`tabla-${ base }.txt`);
            }
        });
    })
}

let listarArchivo = (base, limite) => {

    console.log('============================='.green);
    console.log(`=======Tabla del ${base}=====`.green);
    console.log('============================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarArchivo
}