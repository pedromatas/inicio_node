const { crearArchivo } = require('./multiplicar/multiplicar');


let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(parametro);

crearArchivo(base)
    .then(archivo => console.log(`archivo creado ${archivo}`))