import * as drawContext from "./drawContext.js";
import * as toolManager from "./toolManager.js";
import * as userInterface from "./userInterface.js";
import {ToolType} from "./Tools/toolType.js";

//---------------------------------------------------------------
const canvas = document.getElementById("MainCanvas");

toolManager.initializeMenager();
drawContext.initializeContext(canvas);


const pencilButton = document.getElementById("b_toolPencil");
const inkButton = document.getElementById("b_toolInk");


pencilButton.onclick = function(){ changeTool(ToolType.pencil);}
inkButton.onclick = function(){ changeTool(ToolType.ink);}


function changeTool(type){
    toolManager.changeTool(type);
    drawContext.updateTool();
}


//Test change of tools
//window.addEventListener("keydown",function(){
  //  toolManager.changeTool(ToolType.ink);
//    drawContext.updateTool();
//});