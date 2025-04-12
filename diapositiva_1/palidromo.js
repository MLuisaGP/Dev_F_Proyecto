const palabra = 'anita lava la tina';
function esPalidromo(txt){
    str = txt.replace(/ /g, "");
    let longitud = str.length-1;
    for (let i = 0; i <= longitud; i++) {
        if (str[i] !== str[longitud-i]){
            return 'No es palidromo';
        }
    }
    return 'Es palidromo'
}
console.log(esPalidromo(palabra));
