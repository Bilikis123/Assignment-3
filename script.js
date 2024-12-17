const greetInput=document.getElementById('greetInput');
const greetButton=document.getElementById('greetButton');
const greetMesssage=document.getElementById('greetMessage');
 greetButton.addEventListener('click',function(){
    const name=greetInput.value;
    
    if(!name){
        alert('Please enter your name')
    }
   else{
     greetMesssage.textContent=`hello, ${name}`
     greetInput.value='';

   }
 })