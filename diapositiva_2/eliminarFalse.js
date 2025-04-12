const mezcla = [120,"Hello",false,42,undefined,"Js"];
function limpiar(arr){
    let newAr =[];
    arr.forEach(element => {
        if(element)newAr.push(element);
    });
    return newAr;
}

console.log(limpiar(mezcla));
