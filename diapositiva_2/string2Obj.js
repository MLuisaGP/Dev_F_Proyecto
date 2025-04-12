const str = "nombre:Ivan, edad:23, ciudad:CDMX";

function str2obj(str){
    arr = str.split(',');
    let obj={};
    arr.forEach(elemento => {
        keyValor = elemento.split(':');
        obj[keyValor[0]] = keyValor[1];
    });
    return obj;    
}
console.log(str2obj(str));
