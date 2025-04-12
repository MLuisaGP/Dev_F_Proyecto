const num = [12,35,1,10,34,1];
function segunMasGrande(arr){
    if(arr.length<=0){
        return null;
    }
    let max=0;
    let segundoMax=0;
    arr.forEach(valor => {
        if(valor>max){
            segundoMax = max;
            max=valor;
        }else if(valor>segundoMax ){
            segundoMax=valor;
        }
    });
    return segundoMax;
}
console.log(segunMasGrande(num));
