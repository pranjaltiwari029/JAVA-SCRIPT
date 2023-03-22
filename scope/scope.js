//the scope is by default global
// var name="pranjal";

// function sayName(){
//     var marks=10;
//     console.log(name);
// }
// sayName()
// console.log(marks);

//global sope
function first(){
    //local scope
    var x=1;

    console.log(x);
    function childofFirst(){
        var x=2;
        console.log(x);
    }
    childofFirst()

}
first()


