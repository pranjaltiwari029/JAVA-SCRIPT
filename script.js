let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt("enter name of student");
    namasteBtn.textContent='Roll No.76:'+name;    
}  