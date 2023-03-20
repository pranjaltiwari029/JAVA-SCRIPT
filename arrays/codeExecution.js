
let a="hello world";
function first(){
    console.log("inside first function");
    second();
    console.log("again the first function");
}
function second(){
    console.log("inside second function");
}

first();
console.log('inside gobal execution context');