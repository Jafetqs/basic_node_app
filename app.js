const {crearTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors'); // se puede hacer con require o con const de la variable
console.clear();

crearTabla(argv.b, argv.l,argv.h)
    .then(n => console.log(n.random,'creada!'.america))
    .catch(err=> console.log(err));