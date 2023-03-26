// get elementByid
const heading = document.getElementById('heading');
console.log(heading)

// getelement by tagname
const a=document.getElementsByTagName('h1');
console.log(a)
// getelementbyclassname
let b=document.getElementsByClassName('heading');
console.log(b)

//queryselector
let c=document.querySelector('.heading');

//parent node
const d=document.querySelector('.hello');
const parent=d.parentNode;
console.log(parent)

console.log(d.nextElementSibling);

d.innerHTML='web dev is awesome';
d.style.color='red';
d.style.fontSize='30px';
d.classList.add('title');

//create elements

let n= document.createElement('p');
n.innerHTML='hello all, how are you hope you will be doing great';




