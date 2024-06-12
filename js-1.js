//document.addEventListener('DOMContentLoaded', function() {
let textInput= document.querySelector("#text-place");
let cnt =document.querySelector(".counter");
let resetBtn =document.querySelector(".reset");


let text =cnt.innerText;
let counter = 1;

function wordCounter(){
textInput.addEventListener('input', ()=>{
    let allWord = textInput.value;
    for(let w of allWord){
        if (w===" "){
            counter +=1;
        }
    }
    textInput.disabled=true;
    cnt.innerText=cnt.innerText + counter;

});
}

function reset(){
    resetBtn.addEventListener("click",()=>{
        counter = 1;
        textInput.disabled=false;
        textInput.value="";
        cnt.innerText=text;
        
    });

}

reset();
wordCounter();
//});