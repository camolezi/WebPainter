import * as toolManager from "./toolManager.js";
import * as Events from "./event.js";
import { ToolType } from "./Tools/toolType.js";


//Class that represent one draw context
export default class DrawContext{


    constructor(drawCanva){
        this.canvas = drawCanva;
        this.currentTool = null;

        if(this.canvas !== null)
            this.renderContext = this.canvas.getContext("2d");
        
        if(this.renderContext !== null){
            this.updateTool();
        }else{
            //Handle errors
        }   
    }

    updateTool(newTool){

        if(newTool !== undefined){
            this.currentTool = toolManager.changeTool(newTool);
            this.currentTool.initializeTool(this.renderContext);

        }
    }
    
    updateToolColor(newColor){

        if(this.currentTool)
            this.currentTool.onColorChange(newColor);
    }
    
    
    
    //Draw to the screen with events
    addCanvasPixelData(event){
        //Recive data and draw
        this.updateTool(event.drawTool);
        this.updateToolColor(event.drawColor);
        
    
        switch(event.name){
            case "mousedown":
            case "touchstart":
                this.currentTool.onMouseClick(event);
                break;
            case "mouseup":
            case "touchend":
                this.currentTool.onMouseRelease(event);
                break;
            case "mousemove":
            case "touchmove":
                this.currentTool.onMouseMove(event);
                break;
            case "clearcanvas":
                this.clearCanvas(event);
                break;
    
            default:
            break;
        }
     }
    
    
    
    //---- Aux functions
    
    clearCanvas(event){
        this.renderContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    
    

}


