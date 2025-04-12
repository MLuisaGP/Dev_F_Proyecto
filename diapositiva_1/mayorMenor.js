const valores = [12,5,8,130,44];
function maxMin(arr) {
    let max = 0;
    let min= Infinity;

    arr.forEach(valor => {
        if(valor>max){
            max = valor
        }
        if(valor<min){
            min=valor
        }
    });
    return{'max':max,'min':min}
}

console.log(maxMin(valores));
