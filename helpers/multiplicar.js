
const fs= require("fs");
const colors  = require ( "colors" ) ;
const crearArchivo= async (base = 5, listar= false, hasta=10) => {

    console.log("===================".green);
    console.log("    Tabla del:".green, colors.blue(base) );
    console.log("================".green);

    let salida= "";
    for (let i = 1; i <=hasta ; i++) {
        salida += `${base} ${"x".green} ${i} ${"=".green} ${base*i}/n`;
    
    }
    
    console.log(salida);
     
    fs.writeFileSync(`./salida/tabla-${base}.txt` , salida);
    
    return `tabla-${base}.txt`;

}


module.exports = {
    crearArchivo
}










