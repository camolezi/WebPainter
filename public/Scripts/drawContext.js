import * as toolManager from "./toolManager.js";
import * as Events from "./event.js";


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
        updateTool();
    }else{
        //Learn how to handle errors
    }
}

export function updateTool(newTool){

    if(newTool !== undefined){
        toolManager.changeTool(newTool);
    }
    currentTool = toolManager.getCurrentTool();
    currentTool.initializeTool(renderContext);
}

export function updateToolColor(newColor){
    currentTool.onColorChange(newColor);
}



//Draw to the screen with events
export function addCanvasPixelData(event){
    //Recive data and draw
    updateTool(event.drawTool);
    updateToolColor(event.drawColor);
    

    switch(event.name){
        case "mousedown":
        case "touchstart":
            currentTool.onMouseClick(event);
            break;
        case "mouseup":
        case "touchend":
            currentTool.onMouseRelease(event);
            break;
        case "mousemove":
        case "touchmove":
            currentTool.onMouseMove(event);
            break;
        case "clearcanvas":
            clearCanvas(event);
            break;

        default:
        break;
    }
 }



//---- Aux functions


function clearCanvas(event){
    renderContext.clearRect(0, 0, canvas.width, canvas.height);
}




