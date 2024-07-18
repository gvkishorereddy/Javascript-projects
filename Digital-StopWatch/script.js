const clock = document.getElementById('clock');
let time = 0;
let running = false;
let timer = null;

function start() {
    if (!running) {
        timer = setInterval(update, 1000);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    clock.textContent = "00:00:00";
    running = false;
    time = 0;
}

function update() {
    time++;
    let hours = Math.floor(time / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    let seconds = (time % 60).toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
