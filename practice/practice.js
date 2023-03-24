// 01
let square={
    side:5,
     get area(){
         return this.side*this.side
     }
}
console.log(square.area)


//02
function concat(separator,...strings){
    let returnVal=''
    strings.forEach((string,i) =>{
        if(i==strings.length-1){
            returnVal+=strings;
        }
        else{
        returnVal+=string + separator;
        }

    })
    return returnVal;

}
console.log(concat('hello','how','are','you'))
    
//03
arr=[1,2,3,4,5,6,7,8]
let first=arr[0];
let second=arr[1];
let third=arr[2];
let fourth=arr.slice(3);
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


let[first1,second2,third3,...fourth4]=[1,2,3,4,5,6,7,8]
console.log(first1);
console.log(second2);
console.log(third3);
console.log(fourth4);


function matchHouse(house){
    if(house<=0){
        return 0;
    }
    else{
        return house*6-house+1
    }

    

}
console.log(matchHouse(2))