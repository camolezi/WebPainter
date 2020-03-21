import * as drawContext from "./drawContext.js";
import * as toolManager from "./toolManager.js";
import * as userInterface from "./userInterface.js";
import {ToolType} from "./Tools/toolType.js";





//---------------------------------------------------------------



const canvas = document.getElementById("MainCanvas");

toolManager.initializeMenager();
drawContext.initializeContext(canvas);


//Test change of tools
window.addEventListener("keydown",function(){
    toolManager.changeTool(ToolType.ink);
    drawContext.updateTool();
});