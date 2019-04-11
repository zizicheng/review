let index = 0;
let slides = document.getElementsByClassName("slide");
let switchButtons = document.querySelectorAll(".slider-switch a");

function switchSlide(index) {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        switchButtons[i].className = "";
    }
    switchButtons[index].className = "active";
    slides[index].style.display="block";
}
for(let i = 0; i < switchButtons.length; i++) {
    switchButtons[i].onclick = function() {
        switchSlide(i);
    }
}


function intervalSlide(){
    if(index >= 4) {
        index = 0;
    }
    switchSlide(index);
    index++
    setTimeout(intervalSlide, 2000);
}

setTimeout(intervalSlide, 0);