const h1= document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
h1,
p,
parrafito,
pid,
input,

});

h1.innerHTML = 'patito <br> feo';
console.log(h1.getAttribute('pantalla'));
//H1.setAttribute 

h1.classList.add('rojo');
h1.classList.remove('verde');


const img = document.createElement('img');
img.setAttribute('src','https://www.trecebits.com/wp-content/uploads/2022/12/robot.webp');

pid.appendChild(img);
