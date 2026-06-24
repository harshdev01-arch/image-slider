const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slider = document.querySelector(".slider");

let current = 0;
let autoPlay;

// Create Dots
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        goToSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[current].classList.add("active");
    dots[current].classList.add("active");
}

function goToSlide(index) {
    current = index;
    updateSlider();
    restartAutoPlay();
}

function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoPlay();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoPlay();
});

function startAutoPlay() {
    autoPlay = setInterval(() => {
        nextSlide();
    }, 5000);
}

function restartAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
}

slider.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
});

slider.addEventListener("mouseleave", () => {
    startAutoPlay();
});

startAutoPlay();