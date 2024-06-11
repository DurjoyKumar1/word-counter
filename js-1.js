//document.addEventListener('DOMContentLoaded', function() {
let textInput= document.querySelector("#text-place");
let cnt =document.querySelector(".counter");

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
    console.log(cnt.innerText=cnt.innerText + counter);

});
}
wordCounter();
//});