const original = [14,23,32,24,45];


function invertir(arr){
    if(arr.length===0){
        return null
    }
    let arrInv = [];
    
    for (let i = arr.length; i > 0; i--) {
        arrInv.push(arr[i-1]);
    }
    return arrInv;
}
console.log(invertir(original));
