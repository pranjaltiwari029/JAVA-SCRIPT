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


//using var keyword
var x=10
{
    var x=1;
    console.log(x);
}
console.log(x)

//using let keyword
let y=10;
{
    let y=1;
    console.log(y)
}
console.log(y)

//lexical scope
function base(){
    var name='base';
    function derived1(){
        console.log(name)
        function derived2(){
            var likes='coding';
        }
        //console.log(likes);
        derived2()
    }
    derived1()
}
base()
