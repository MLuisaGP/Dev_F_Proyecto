const duplicados = [1,2,2,3,4,4,5];
function deleteDup(arr){
    if(arr.length === 0){
        return null;
    }
    arr.sort();
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.length===0){
            newArr.push(arr[i]);
        }else{
            if(arr[i]!==arr[i-1]){
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}
console.log(deleteDup(duplicados));
