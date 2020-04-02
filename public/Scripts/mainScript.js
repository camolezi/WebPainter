import * as drawContext from "./drawContext.js";
import * as toolManager from "./toolManager.js";
import * as Events from "./event.js";
import * as canvasManager from "./localDraw.js";
import * as userInterface from "./userInterface.js";
import {ToolType} from "./Tools/toolType.js";
//---------------------------------------------------------------
const canvas = document.getElementById("MainCanvas");

toolManager.initializeMenager();
drawContext.initializeContext(canvas);

export function canvasChanged(callback){
    canvasManager.addCanvasChangedCallback(callback);
}

export function changeCanvas(data){
    drawContext.addCanvasPixelData(data);
}
//buttons
const pencilButton = document.getElementById("b_toolPencil");
const inkButton = document.getElementById("b_toolInk");
const eraserButton = document.getElementById("b_toolEraser");
const resetButton = document.getElementById("b_reset");


pencilButton.onclick = function(){ changeTool(ToolType.pencil);}
inkButton.onclick = function(){ changeTool(ToolType.ink);}
eraserButton.onclick = function(){ changeTool(ToolType.eraser);}

resetButton.onclick = function(){ drawContext.addCanvasPixelData(Events.createEvent("clearcanvas"));}


//Color picker
const colorPicker = document.getElementById("i_colorPicker");
colorPicker.value = "black"; //dafault color
colorPicker.addEventListener("change",function(event){
    drawContext.updateToolColor(event.target.value); 
});



//aux functions
function changeTool(type){
    toolManager.changeTool(type);
    drawContext.updateTool();
    drawContext.updateToolColor(colorPicker.value);
}
