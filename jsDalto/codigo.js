/* TEMA VARIABLES MUY IMPORTANTE!!!! 

'let' SE USA PARA variables que estan dentro de bloques.
Es decir, se pueden repetira lo largo del codigo, pero 
siempre dentro de otros bloques de código distintos

Ej:

let = 20

for(let i = 0; i > x; i++){

}

En este caso, let, por fuera del for será igual a 20, y 
let dentro del for igual a 0

Si dejo vacia a la declaración de la variable o le pongo ''var'' automoticamente pasaria a ser una variable global
Entonces, con var se podria modificar su declaracion tanto afuera como adentro de la estructura, en cambio en con 
let siempre va a quedar 

*/

// RETURN: sirve para retornar un valor
// `SCOPE: cuando hacemos una variable adentro de la función, no existe afuera

function suma(sum1, sum2){
   
  let suma = sum1 + sum2
  
}


document.write(2, 4)