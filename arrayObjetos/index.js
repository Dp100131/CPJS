/**
 *  array: lista de elementos
 * 
 *      los arrays pueden guardar obj y viceversa
 */

const array = [1, 'jajaja', true, false];

const obj = {

    nombre: 'Daniel',
    edad: 20

};

function printFirstElementArray(array) {

    console.log(array[0]);
    
}

printFirstElementArray(array);

function printElementbyElement(array) {

    for (let index = 0; index < array.length; index++) {

        const element = array[index];

        console.log(element);
        
    }
    
}

printElementbyElement(array);

function printElementbyElementObj(obj) {

    let array = Object.values(obj);

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        console.log(element);
        
    }
    
}

