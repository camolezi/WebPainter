//Import tools
import * as pencilTool from "./Tools/pencilTool.js";

let currentTool;

export function initializeMenager(){
    //Default tool
    currentTool = pencilTool;
}

export function changeTool(){

}

export function getCurrentTool(){
    //For now only pencil
    return currentTool;
}

    


