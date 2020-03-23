
import * as toolManager from "./toolManager.js";

//Fields
let renderContext = null;
let canvas = null;
let currentTool = null;

//Methods
export function initializeContext(drawCanva){
    canvas = drawCanva;

    if(canvas !== null)
        renderContext = canvas.getContext("2d");
    
    if(renderContext !== null){
        setCanvasCallBacks();
        updateTool();
    }else{
        //Learn how to handle errors
    }
}

export function updateTool(){
    currentTool = toolManager.getCurrentTool();
    currentTool.initializeTool(renderContext);
}

export function updateToolColor(newColor){
    currentTool.onColorChange(newColor);
}

function setCanvasCallBacks(){
    //Events listenes
    canvas.addEventListener("mousedown",function(e){
        let mouseEvent = {
            clientX: e.clientX -  canvas.getBoundingClientRect().left,
            clientY: e.clientY - canvas.getBoundingClientRect().top
        }
        currentTool.onMouseClick(mouseEvent);
    });

    canvas.addEventListener("mouseup",function(e){
        currentTool.onMouseRelease(e);
    });

    canvas.addEventListener("mousemove", function(e){
        let mouseEvent = {
            clientX: e.clientX -  canvas.getBoundingClientRect().left,
            clientY: e.clientY - canvas.getBoundingClientRect().top
        }
        currentTool.onMouseMove(mouseEvent);
    });

    canvas.addEventListener("mouseleave",function(e){
        currentTool.onMouseRelease(e);
    });

    //----------------------for touch screen ------------------------------------------

    //Theres a bug here, fix latter
    //The line is not ending. Its a continues line, even if you are not touching

    canvas.addEventListener("touchstart",function(e){
        e.preventDefault();
        currentTool.onMouseClick(e);
    });

    canvas.addEventListener("touchend",function(e){
        e.preventDefault();
        currentTool.onMouseRelease(e);
    });

    canvas.addEventListener("touchmove", function(e){
        e.preventDefault();
        let mouseEvent = {
            clientX: e.changedTouches[0].clientX -  canvas.getBoundingClientRect().left,
            clientY: e.changedTouches[0].clientY - canvas.getBoundingClientRect().top
        }
        currentTool.onMouseMove(mouseEvent);
    });

    
}



