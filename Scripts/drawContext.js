
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

function setCanvasCallBacks(){
    //Events listenes
    canvas.addEventListener("mousedown",function(e){
        currentTool.onMouseClick(e);
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

    //Does not work for now
    canvas.addEventListener("ontouchstart",function(e){
        currentTool.onMouseClick(e);
    });

    canvas.addEventListener("ontouchend",function(e){
        currentTool.onMouseRelease(e);
    });

    canvas.addEventListener("ontouchmove", function(e){
        let mouseEvent = {
            clientX: e.clientX -  canvas.getBoundingClientRect().left,
            clientY: e.clientY - canvas.getBoundingClientRect().top
        }
        currentTool.onMouseMove(mouseEvent);
    });

    
}



