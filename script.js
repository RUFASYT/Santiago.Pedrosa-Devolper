const button=document.getElementById('toggle-theme');
button.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if(button.innerText==="Dark Mode"){
    button.innerText= "White Mode";
}else{
        button.innerText= "Dark Mode";
}});

const text="Santiago Pedrosa";
let index=0;
const typingElement = document.getElementById("typing");

function typeEffect(){
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}

typeEffect();