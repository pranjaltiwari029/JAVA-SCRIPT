let lecture =10;
let section =3;
let title='js';

// const course={
//     lecture:10,section:3,title:'js',
//     notes:{intro:"welcome to JS course"},
//     enroll(){
//         console.log("you are successfully enrolled")
//     }


// }
// course.enroll()
// console.log(course.title)


// function createcourse(title){
//     return{
//         title:title,
//         enroll(){
//             console.log('you are successfully enrolled');
//         }
//     }
// }
// const course =createcourse();
// course.enroll()
// console.log(course)



function course(title){
    this.title=title,
    this.enroll=function(){
        
            console.log('you are successfully enrolled');
        
    }
}