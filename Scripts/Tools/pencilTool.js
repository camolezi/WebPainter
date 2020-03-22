import * as drawTool from "./drawingToolBase.js";

//Constructor 
export function initializeTool(drawCtx){
    //set draw style
    drawCtx.lineWidth = 1;
    drawCtx.lineCap = "butt";
    drawCtx.lineJoin = "miter";

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
