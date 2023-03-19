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
// const Course= new course('javascript');
// Course.enroll()


// const course = new Course('javascript')
// console.log(course.constructor)
// consolr.log(newCourse.constructor)


// let num=10;
// let num2=num;
// num=15;
// console.log(num);
// console.log(num2);

// // reference datatype
// let obj={num:10};
// let obj2=obj;
// obj=20
// console.log(obj);
// console.log(obj2)

// const course1={ ...course}
// course1.title="c++";

// const course=Object.assign{{},course}
// course_1.title="C++"

for(let key in course){
    console.log(key,course[key]);
}

for(let value of Object.keys()){
    console.log(key,course[key]);
}