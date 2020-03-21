import * as drawContext from "./drawContext.js";


//Canvas Script --------------------- UI -----------------------------------------------------------
const canvas = document.getElementById("MainCanvas");
resize();
window.addEventListener("resize",resize);

drawContext.initializeContext(canvas);



function resize() {
    let size = 0.9;
    canvas.height = window.innerHeight * size
    canvas.width = window.innerWidth * size;
}
