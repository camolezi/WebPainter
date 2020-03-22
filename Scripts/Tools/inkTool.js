import * as drawTool from "./drawingToolBase.js";

//Constructor 
export function initializeTool(drawCtx){
    //style
    drawCtx.lineWidth = 7;
    drawCtx.lineCap = "round";
    drawCtx.lineJoin = "round";

    //Initiae base tool
    drawTool.initializeTool(drawCtx);
   
}

export function onColorChange(newColor){
    drawTool.onColorChange(newColor);
}

export function onMouseMove(event){
    drawTool.onMouseMove(event);
}

export function onMouseClick(){
    drawTool.onMouseClick();
}

export function onMouseRelease(){
    drawTool.onMouseRelease();
}



