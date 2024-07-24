const previous = document.getElementById("previous");
const next = document.getElementById("next");
const images = document.querySelectorAll(".slides img");

let index = 0;

function start() {
    showImage(index);
    intervalId = setInterval(nextImage,5000);
}

function showImage(idx) {
    images.forEach((img, i) => {
        img.classList.remove("displayBlock");
        if (i === idx) {
            img.classList.add("displayBlock");
        }
    });
}

function prev() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage(index);
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage(index);
}

// Initialize the first image display
start();

// Attach event listeners to buttons
previous.addEventListener("click", prev);
next.addEventListener("click", nextImage);
