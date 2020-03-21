//Canvas Script --------------------- UI (Change to another file)-----------------------------------------------------------
const canvas = document.getElementById("MainCanvas");
resizeCanvas();
window.addEventListener("resize",resizeCanvas);

function resizeCanvas() {
    let size = 0.9;
    canvas.height = window.innerHeight * size
    canvas.width = window.innerWidth * size;
}