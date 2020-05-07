
import * as Events from "./event.js";
import drawContextClass from "./drawContext.js";
import toolManager from "./toolManager.js";


let canvas = null;
let currentLocalTool = null;
let currentLocalColor = "black";
let canvasChangedCallback = [];
let drawContextInstance = null;

//Set canvas changed event callback
export function addCanvasChangedCallback(callback){ 
    canvasChangedCallback.push(callback);
}


export function initializeLocalDraw(LocalCanvas){
    canvas = LocalCanvas;
    drawContextInstance = new drawContextClass(canvas);
    setCanvasCallBacks();
}

export function drawInLocalCanvas(data){
    drawContextInstance.addCanvasPixelData(data);
}

export function updateCurrentLocalTool(newTool){
    currentLocalTool = newTool;
}

export function updateCurrentLocalColor(newColor){
    currentLocalColor = newColor;
    drawContextInstance.updateToolColor(currentLocalColor);
}

export function clearLocalCanvas(){
    propagateEvent("clearcanvas");
}


// _____ AUX funticon _----____________

function setCanvasCallBacks(){
    //Events listenes
    canvas.addEventListener("mousedown",function(e){
        propagateEvent ("mousedown",e);
    });

    canvas.addEventListener("mouseup",function(e){
        propagateEvent ("mouseup",e);
    });

    canvas.addEventListener("mousemove", function(e){
        propagateEvent ("mousemove",e);
    });

    canvas.addEventListener("mouseleave",function(e){
        propagateEvent ("mouseup",e);
    });

    //----------------------for touch screen ------------------------------------------

    //Theres a bug here, fix latter
    //The line is not ending. Its a continues line, even if you are not touching

    canvas.addEventListener("touchstart",function(e){
        e.preventDefault();
        propagateEvent ("touchstart",e);
    });

    canvas.addEventListener("touchend",function(e){
        e.preventDefault();
        propagateEvent ("touchend",e);
        //canvasChanged();
    });

    canvas.addEventListener("touchmove", function(e){
        e.preventDefault();
        propagateEvent ("touchmove",e);
    });
}

 
function propagateEvent(name, eventData){

    if(eventData === undefined)
        eventData = {};

    drawContextInstance.updateTool(currentLocalTool);
    drawContextInstance.updateToolColor(currentLocalColor);

    //Include current local colors in event
    eventData.drawColor = currentLocalColor;
    eventData.drawTool = currentLocalTool;

    let  event =  Events.createEvent(name,eventData);

    drawContextInstance.addCanvasPixelData(event);
    canvasChanged(event);
}


function canvasChanged(event){
    canvasChangedCallback.forEach( (funcCallback) => {
        funcCallback(event);
    }); 
}


