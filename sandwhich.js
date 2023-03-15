let bread1=prompt("choose bread=");
let veggies1=prompt("choose veggies=");
let sauce1 = prompt("choose sauce=");

function Sandwhich(bread,veggies,sauce){
    let sandwhich = bread+"bread"+veggies+" veggies"+sauce+" sauce";
    return sandwhich;
}

let vegsandwhich= Sandwhich(bread1,veggies1,sauce1);
console.log(vegsandwhich)