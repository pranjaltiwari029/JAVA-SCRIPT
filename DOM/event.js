const button =document.querySelector('#btn');
const heading= document.querySelector('#heading');

button.addEventListener('click',function(event){
    heading.style.color='purple';
  
    alert('button clicked',event)
})




//bulb program

const bulbSwitch=document.querySelector('#bulbSwitch');
const bulb1=document.querySelector('#Bulb');

bulbSwitch.addEventListener('click',function(){
    console.log(bulb.src);
    if(bulb1.src.match('off')){
        bulb1.src='./bulb-on.jpg';
        bulbSwitch.innerHTML='Turn off';
    }
    else{
        bulb1.src='./bulb-off.jpg';
        bulbSwitch.innerHTML='Turn on';
    }
    
});


