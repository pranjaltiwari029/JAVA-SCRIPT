const array=[1,2,3,4,5,6,7,8,9]
console.log(array)
console.log(array[4])

console.log(array[array.length-1])

//push
array.push(10)

console.log(array)
//unshift  add at the starting of array

console.log(array.unshift(0))

console.log(array.pop())
//shift remove element from starting
array.shift()

array[0]='hello'

console.log(array)

const names=['pranjal','tapan','sanal','akash']
console.log(names)

console.log(names.indexOf('pranjal'))

//last inndex of
console.log(names.lastIndexOf('pranjal'))

let channels=[{
    name:'pranjal vlogs',subscriber:2500
},
{name:'tapans lifestyle',subscriber:2000}
];


console.log(channels.find(function(varaible) {
    return varaible.name==='pranjal vlogs';
    
}))
//array concatination
let n1=['hello','how','are']
let n2=['you ',',hope', 'you', 'will be', 'fine!']
let n3=n1.concat(n2)
console.log(n3)

//slice

console.log(n3.slice(3))
///sprea operators


