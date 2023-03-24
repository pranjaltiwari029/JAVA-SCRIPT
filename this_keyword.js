// let counter={
//     count:0,
//     increment: function(){
//         counter.count++
//     }
// }
// counter.increment();
// counter.increment();
// console.log(counter);


var count=0;
function increamentcounter(){
    this.count++;
    console.log(this);
}
increamentcounter();
console.log(count)

function car(name){
    this.name=name,
    this.start=function(){
        console.log(this.name+'started');

    }
}

let swift=new car('nano');






