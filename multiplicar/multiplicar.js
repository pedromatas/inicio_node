//requireds
const fs = require('fs');


crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve('the file has been saved!')

        });
    });
}

module.exports = {
    crearArchivo
}