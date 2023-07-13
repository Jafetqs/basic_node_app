const fs = require('fs');
const colors = require('colors');
const crearTabla = async (b,l,h) => {

    try{
        let salida = '';
        let i = 1;
        
            for (i; i <=h; i++) {
                salida += `${b} x ${i} = ${b * i}\n`;
            }
        if(l){
            console.log(salida.rainbow);
        }
        fs.writeFileSync(`./salida/tabla-${b}.txt`,salida);
        return `¡Tabla del ${b}`;
    
    }catch(err){
        throw err;
    }
}
module.exports = {
    crearTabla
}