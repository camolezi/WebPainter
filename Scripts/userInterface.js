
// UI ---------------------------------------------------------------------------------------------
const canvas = document.getElementById("MainCanvas");
resizeCanvas();
canvas.style.backgroundColor = "white"


window.addEventListener("resize",resizeCanvas);

function resizeCanvas() {
    canvas.height = window.innerHeight * 0.85
    canvas.width = window.innerWidth * 0.99 ;
}