import drawingToolBase from "./drawingToolBase.js";


//Constructor 
export default class inkTool extends drawingToolBase{

    constructor(drawCtx){

        super(drawCtx)
        this.initializeTool();

    }

    initializeTool(){
        this.drawCtx.lineWidth = 7;
        this.drawCtx.lineCap = "round";
        this.drawCtx.lineJoin = "round";
    }

}


