var currentImg = 1;
var activeClass = "active";
const firstDot = document.querySelector(".dot:nth-child(1)");
const lastDot = document.querySelector(".dot:nth-child(5)");
const leftBtn = document.getElementById("left_btn");
const rightBtn = document.getElementById("right_btn");

rightBtn.addEventListener("click", right_move);

function right_move() {
    var activeDot = document.querySelector(".active");
    currentImg++;
    if(currentImg === 6) {
        currentImg = 1;
    }
    img_slide.src = "/img/" + currentImg + ".jpg"
    if(activeDot) {
        var nextDot = activeDot.nextElementSibling;
        activeDot.classList.remove(activeClass);
        if(currentImg === 1) {
            firstDot.classList.add(activeClass);
        } else {
            nextDot.classList.add(activeClass);
        }
    }
}

leftBtn.addEventListener("click", left_move);

function left_move() {
    var activeDot = document.querySelector(".active");
    currentImg--;
    if(currentImg === 0) {
        currentImg = 5;
    }
    img_slide.src = "/img/" + currentImg + ".jpg"
    if(activeDot) {
        var prevDot = activeDot.previousElementSibling;
        activeDot.classList.remove(activeClass);
        if(currentImg === 5) {
            lastDot.classList.add(activeClass);
        } else {
            prevDot.classList.add(activeClass);
        }
    }
}



