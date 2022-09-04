
let h1 = document.querySelector('h1'); // Por etiquetas

let p = document.querySelector('p'); // "

let dosParrafos = document.querySelector('.dosParrafos');

let tresParrafos = document.querySelector('#tresParrafos');

let input = document.querySelector('input');

console.log({

    h1,
    p,
    dosParrafos,
    tresParrafos,
    input

});

console.log(h1);


h1.innerHTML = 'Patito <br> Feo'; //insertar html

h1.innerText = 'Patito <br> Feo'; //insertar texto

console.log(h1.getAttribute('style'));

h1.setAttribute('class', 'rojo'); // cambia el atributo class de verde a rojo
h1.classList.add('Rojo');
h1.classList.add('Amarillo');
h1.classList.add('magenta');
h1.classList.remove('magenta');

console.log(h1.getAttribute('class'));

const IMG = document.createElement('img');


IMG.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(IMG);
tresParrafos.innerHTML="";
tresParrafos.appendChild(IMG);