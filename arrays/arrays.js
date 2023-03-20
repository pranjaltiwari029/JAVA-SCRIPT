//ARRAYS


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
///spread operators
let n4=[...n1,...n2]
console.log(n4)

//for loop
let students=['ram','aman','raj','uma','pranjal','tapan'];
for(let i=0;i<students.length;i++){
    console.log(students[i])
}

// for of
for(let name of students){
    console.log(name)
}
// for-each
students.forEach(function(name,index){
    console.log(name,index)
})

//join
let student=['a','e','i','o','u']
console.log(student.join('_'))

//split

console.log(student.split('.'))

//filter
let cities=[
    {name:'delhi',population:8000000},
    {name:'mumbai',population:8000000},
    {name:'chennai',population:8000000},
    {name:'himachal',population:8000000},
    {name:'goa',population:8000000},
    
]
console.log(cities.filter(city=>{
    return city.population>300000
}))

//map
console.log(cities.map(city=>{
    return city.population*2
}))