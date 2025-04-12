const usuarios=[
    {nombre:"Ana",edad:17},
    {nombre:"Luis",edad:22},
    {nombre:"Carlos",edad:15},
    {nombre:"Lucía",edad:30},
]

const usuariosMayores = usuarios.filter((user)=>user.edad>=18);
console.log(usuariosMayores);
