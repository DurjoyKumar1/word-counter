document.addEventListener('DOMContentLoaded', function() {
let textInput= document.querySelector("#text-place");
let cnt =document.querySelector(".counter");

let counter = 1;
textInput.addEventListener('input', function(){
    let allWord = textInput.value;
    for(let w of allWord){
        if (w===" "){
            counter +=1;
        }
    }

    console.log(cnt.innerText=cnt.innerText + counter);

});
});