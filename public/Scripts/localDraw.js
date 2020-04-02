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
        propagateEvent ("mousedown",e);
    });

    canvas.addEventListener("mouseup",function(e){
        propagateEvent ("mouseup",e);
    });

    canvas.addEventListener("mousemove", function(e){
        propagateEvent ("mousemove",e);
    });

    canvas.addEventListener("mouseleave",function(e){
        propagateEvent ("mouseleave",e);
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
    let  event=  Events.createEvent(name,eventData);
    drawContext.addCanvasPixelData(event);
    canvasChanged(event);
}
''

function canvasChanged(event){
    canvasChangedCallback.forEach( (funcCallback) => {
        funcCallback(event);
    }); 
}


