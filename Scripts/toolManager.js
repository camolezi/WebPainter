//Import tools
import * as pencilTool from "./Tools/pencilTool.js";
import * as inkTool from "./Tools/inkTool.js";
import * as eraserTool from "./Tools/eraserTool.js";

import {ToolType} from "./Tools/toolType.js";


let toolMap = {};
let currentTool;

export function initializeMenager(){
    toolMap[ToolType.pencil] = pencilTool;
    toolMap[ToolType.ink] = inkTool;
    toolMap[ToolType.eraser] = eraserTool;
    //Default tool
    currentTool = pencilTool;
}

export function changeTool(type){
    if(toolMap[type]){
        currentTool = toolMap[type];
    }else{
        //Tool does not exist or not seted
        //Error
        //Set default for now
        currentTool = pencilTool;
        console.log("Tool not found");
    }
}

export function getCurrentTool(){
    //For now only pencil
    return currentTool;
}

    


