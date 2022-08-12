// Slider
const slides = document.querySelector(".main__slice .slider").children;
const prev = document.querySelector(".controls .prev");
const next = document.querySelector(".controls .next");
let index = 0;

prev.addEventListener("click", function () {
    prevSlide();
    resetTimer();
})

next.addEventListener("click", function () {
    nextSlide();
    resetTimer();

})

function indicateSlide(element) {
    index = element.id;
    activeSlide();
    resetTimer();
}


function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    activeSlide();
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    activeSlide();
}

function activeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function autoPlay() {
    nextSlide();
}

// set time 
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000);
}
let timer = setInterval(autoPlay, 4000);
