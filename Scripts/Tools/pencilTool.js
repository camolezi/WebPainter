let drawCtx = null;
let drawing = false;

let mousePos = {
    x : null,
    y : null,
    changePos : function(newX,newY){
        this.x = newX;
        this.y = newY;
    }
};

//Constructor 
export function initializeTool(ctx){
    drawCtx = ctx;

    //set draw style
    drawCtx.lineWidth = 1;
    drawCtx.lineCap = "butt";
    drawCtx.lineJoin = "miter";
}


export function onColorChange(newColor){
    drawCtx.strokeStyle = newColor;
}


//Call Back public API (all tools will have the same API)
export function onMouseMove(event){

    if(mousePos.x === null || mousePos.y === null){
        mousePos.changePos(event.clientX,event.clientY);
        return;
    }

    drawCtx.beginPath();
    drawCtx.moveTo(event.clientX,event.clientY);
    drawCtx.lineTo(mousePos.x,mousePos.y);

    mousePos.changePos(event.clientX,event.clientY);

    if(drawing){
        drawCtx.stroke();
    }
}


export function onMouseClick(){
    drawing = true;
}

export function onMouseRelease(){
    drawing = false;
}



