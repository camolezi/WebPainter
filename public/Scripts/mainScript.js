import * as drawContext from "./drawContext.js";
import * as toolManager from "./toolManager.js";
import * as Events from "./event.js";
import * as localCanvasDraw from "./localDraw.js";
import * as userInterface from "./userInterface.js";
import {ToolType} from "./Tools/toolType.js";
//---------------------------------------------------------------

const canvas = document.getElementById("MainCanvas");

toolManager.initializeMenager();

localCanvasDraw.initializeLocalDraw(canvas);

export function canvasChanged(callback){
    localCanvasDraw.addCanvasChangedCallback(callback);
}

export function changeCanvas(data){
    localCanvasDraw.drawInLocalCanvas(data);
}


export function getLocalCanvas(){
    return canvas;    
}




//buttons
const pencilButton = document.getElementById("b_toolPencil");
const inkButton = document.getElementById("b_toolInk");
const eraserButton = document.getElementById("b_toolEraser");
const resetButton = document.getElementById("b_reset");



pencilButton.onclick = function(){ changeTool(ToolType.pencil);}
inkButton.onclick = function(){ changeTool(ToolType.ink);}
eraserButton.onclick = function(){ changeTool(ToolType.eraser);}

resetButton.onclick = function(){ localCanvasDraw.clearLocalCanvas();}


//Color picker
const colorPicker = document.getElementById("i_colorPicker");
colorPicker.value = "black"; //dafault color
colorPicker.addEventListener("change",function(event){
    localCanvasDraw.updateCurrentLocalColor(event.target.value); 
});


//default tool
changeTool(ToolType.pencil);

//aux functions
function changeTool(type){
    localCanvasDraw.updateCurrentLocalTool(type);
    localCanvasDraw.updateCurrentLocalColor(colorPicker.value);
}

