//Import tools
import * as pencilTool from "./Tools/pencilTool.js";
import * as inkTool from "./Tools/inkTool.js";
import * as eraserTool from "./Tools/eraserTool.js";

import {ToolType} from "./Tools/toolType.js";


let toolMap = {};


export function initializeMenager(){
    toolMap[ToolType.pencil] = pencilTool;
    toolMap[ToolType.ink] = inkTool;
    toolMap[ToolType.eraser] = eraserTool;
    //Default tool    
}

export function changeTool(type){
    if(toolMap[type]){
        return toolMap[type];
    }else{
        //Tool does not exist or not seted
        //Error
        //Set default for now
        console.log("Tool not found");
        return pencilTool;
    }
}


    


