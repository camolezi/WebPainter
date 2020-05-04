import drawingToolBase from "./drawingToolBase.js";




export default class pencilTool extends drawingToolBase{

    constructor(drawCtx){

        super(drawCtx)
        this.initializeTool();

    }

    initializeTool(){
    //set draw style
        this.drawCtx.lineWidth = 1;
        this.drawCtx.lineCap = "butt";
        this.drawCtx.lineJoin = "miter";
    }

}

