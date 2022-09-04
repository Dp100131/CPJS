/**
 * 
 * Funciones:
 *      
 *      Reutilizar bloques de código para reutilizar y ejecutar en el futuro, se utiliza cuando tenemos muchos bloques de codigo parecidos 
 * 
 *      Params: lo que reciben cuando se crean
 *      Argumentos: lo que recibe cuando se ejecutan
 */

function nameComplete(name, lastname) {
    
    return name + ' ' + lastname

}


let completeName = nameComplete('Daniel', 'Pinto')

console.log(completeName)

function saludo(name, lastname, nickname) {

    let completeName = nameComplete(name, lastname)

    let response = "My name is " + completeName + ", pero prefiero que me digas " + nickname + "."

    return (response)
    
}

console.log(saludo("Daniel", "Pinto", "TheLionMist"))