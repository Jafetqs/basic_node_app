const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe: 'Base de la tabla'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'lista la tabla de mult'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'limite de la tabla de mult'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un número'.red;
        }
        return true;
    }) 
    .argv;

module.exports= argv;