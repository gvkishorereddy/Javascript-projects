const box = document.getElementById('box');
let x = 0;
let y = 0;

document.addEventListener("keydown", keydown);

function keydown(event) {
  const boxRect = box.getBoundingClientRect();

  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        if (boxRect.top - 10 >= 0) {
          y -= 10; // Move up
        }
        break;
      case "ArrowDown":
        if (boxRect.bottom + 10 <= window.innerHeight) {
          y += 10; // Move down
        }
        break;
      case "ArrowLeft":
        if (boxRect.left - 10 >= 0) {
          x -= 10; // Move left
        }
        break;
      case "ArrowRight":
        if (boxRect.right + 10 <= window.innerWidth) {
          x += 10; // Move right
        }
        break;
    }
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  }
}


box.addEventListener("click",clicked);
box.addEventListener("mouseover",mouseover);
box.addEventListener("mouseout",mouseout);

function clicked(event){
  box.style.backgroundColor="tomato";
  box.textContent="😎";
}

function mouseover(event){
  box.style.backgroundColor="yellow";
  box.textContent="🙄";

}

function mouseout(event){
  box.style.backgroundColor="lightblue";
  box.textContent="😀";

}

