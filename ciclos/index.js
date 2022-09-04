/**
 * Ejecutar un bloque de código hasta que se cumpla una condición.
 * 
 *      While
 *      do while
 *      for
 *      forEach 
 *
 */

for(let i = 0; i <= 5; i++){

    console.log("El valor de i es: " + i+".")

}

let i = 0;

while(i <= 5){

    console.log("El valor de i es: " + i+".")
    i++;

}

i = 0;

do {

    console.log("El valor de i es: " + i+".")
    i++;
    
} while (i <= 5);

sw = 1;

while (sw == 1) {
    
    let response  = prompt('Cuánto es 2 + 2?')

    if (response === 4) {

        sw = 0;
        console.log("Ha finalizado.")
        
    }



}