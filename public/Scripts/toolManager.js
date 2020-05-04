//Import tools
import pencilTool from "./Tools/pencilTool.js";
import inkTool from "./Tools/inkTool.js";
import eraserTool from "./Tools/eraserTool.js";

import {ToolType} from "./Tools/toolType.js";



export default class toolManager{
    
    constructor(ctx){
        this.toolMap = {};

        this.toolMap[ToolType.pencil] = new pencilTool(ctx);
        this.toolMap[ToolType.ink] = new inkTool(ctx);
        this.toolMap[ToolType.eraser] = new eraserTool(ctx);
    }

  
    changeTool(type){
        if(this.toolMap[type]){
            return this.toolMap[type];
        }else{
            //Tool does not exist or not seted
            //Error
            //Set default for now
            console.log("Tool not found");
            return this.toolMap[ToolType.pencil];
        }
    }
    

}

