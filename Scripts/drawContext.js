import * as pencilTool from "./Tools/pencilTool.js";

//Fields
let renderContext = null;
let canvas = null;

//Methods
export function initializeContext(drawCanva){

    canvas = drawCanva;

    if(canvas !== null){
        renderContext = canvas.getContext("2d");
    }

    if(renderContext === null){
        //Learn how to handle errors
    }else{
        renderContext;
        setCanvasCallBacks();
        //Initialize tools
        pencilTool.initializeTool(renderContext);
    }
}



function setCanvasCallBacks(){
    //Events listenes
    canvas.addEventListener("mousedown",function(e){
        pencilTool.onMouseClick(e);
    });

    canvas.addEventListener("mouseup",function(e){
        pencilTool.onMouseRelease(e);
    });

    canvas.addEventListener("mousemove", function(e){
        let mouseEvent = {
            clientX: e.clientX -  canvas.getBoundingClientRect().left,
            clientY: e.clientY - canvas.getBoundingClientRect().top
        }
        pencilTool.onMouseMove(mouseEvent);
    });

    canvas.addEventListener("mouseleave",function(e){
        pencilTool.onMouseRelease(e);
    });
}



