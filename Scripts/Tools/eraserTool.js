import * as drawTool from "./drawingToolBase.js";

export function initializeTool(drawCtx){
    //style
    drawCtx.lineWidth = 15;
    drawCtx.lineCap = "round";
    drawCtx.lineJoin = "round";
    drawCtx.strokeStyle = drawCtx.canvas.style.backgroundColor;
    drawCtx.fillStyle = drawCtx.canvas.style.backgroundColor;

    //Initiae base tool
    drawTool.initializeTool(drawCtx);
}

export function onColorChange(newColor){
    
}

export function onMouseMove(event){
    drawTool.onMouseMove(event);
}

export function onMouseClick(event){
    drawTool.onMouseClick(event);
}

export function onMouseRelease(){
    drawTool.onMouseRelease();
}



