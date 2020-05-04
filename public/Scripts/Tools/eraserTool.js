import drawingToolBase from "./drawingToolBase.js";

export default class eraserTool extends drawingToolBase{

    constructor(drawCtx){

        super(drawCtx)
        this.initializeTool();

    }

    initializeTool(){
    //set draw style
        this.drawCtx.lineWidth = 15;
        this.drawCtx.lineCap = "round";
        this.drawCtx.lineJoin = "round";
        this.drawCtx.strokeStyle = this.drawCtx.canvas.style.backgroundColor;
        this.drawCtx.fillStyle = this.drawCtx.canvas.style.backgroundColor;
    }

    onColorChange(newColor){
        //do nothing in color change
    }

}



