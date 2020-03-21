//Canvas Script --------------------- UI (Change to another file)-----------------------------------------------------------
const canvas = document.getElementById("MainCanvas");
resizeCanvas();
window.addEventListener("resize",resizeCanvas);

function resizeCanvas() {
    canvas.height = window.innerHeight * 0.85
    canvas.width = window.innerWidth * 0.97 ;
}