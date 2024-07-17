function updateClock(){
    const date = new Date();
    let hours = date.getHours();
    const meredian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds} ${meredian}`;
    document.getElementById('clock').textContent=time;
}
updateClock();
setInterval(updateClock,1000);