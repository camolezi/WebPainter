const canvas = document.getElementById("MainCanvas");
import * as Events from "./event.js";
import * as drawContext from "./drawContext.js";



//Set canvas changed event callback
let canvasChangedCallback = [];
export function addCanvasChangedCallback(callback){ canvasChangedCallback.push(callback);}

setCanvasCallBacks();

function setCanvasCallBacks(){
    //Events listenes
    canvas.addEventListener("mousedown",function(e){
        let mouseEvent = Events.createEvent("mousedown",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
    });

    canvas.addEventListener("mouseup",function(e){
        let mouseEvent = Events.createEvent("mouseup",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
    });

    canvas.addEventListener("mousemove", function(e){
        let mouseEvent = Events.createEvent("mousemove",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
    });

    canvas.addEventListener("mouseleave",function(e){
        let mouseEvent = Events.createEvent("mouseleave",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
    });

    //----------------------for touch screen ------------------------------------------

    //Theres a bug here, fix latter
    //The line is not ending. Its a continues line, even if you are not touching

    canvas.addEventListener("touchstart",function(e){
        e.preventDefault();
        let mouseEvent = Events.createEvent("touchstart",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
    });

    canvas.addEventListener("touchend",function(e){
        e.preventDefault();
        let mouseEvent = Events.createEvent("touchend",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
        //canvasChanged();
    });

    canvas.addEventListener("touchmove", function(e){
        e.preventDefault();
        let mouseEvent = Events.createEvent("touchmove",e);
        drawContext.addCanvasPixelData(mouseEvent);
        canvasChanged(mouseEvent);
    });
}

 


function canvasChanged(event){
    canvasChangedCallback.forEach( (funcCallback) => {
        funcCallback(event);
    }); 
}


