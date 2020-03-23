
////--------------The base code for all basic drawing tools---------------------------------
let drawCtx = null;
let drawing = false;

let mousePos = {
    x : null,
    y : null,
    changePos : function(newX,newY){
        this.x = newX;
        this.y = newY;
    },
    reset : function(){
        this.x = null;
        this.y = null;
    }
};

//Constructor 
export function initializeTool(ctx){
    drawCtx = ctx;
}

export function onColorChange(newColor){
    drawCtx.strokeStyle = newColor;
    drawCtx.fillStyle = newColor;
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


export function onMouseClick(event){
    drawing = true;

    drawCtx.beginPath();
    drawCtx.arc(event.clientX,event.clientY, drawCtx.lineWidth/2, 0, 2*Math.PI, true);
    drawCtx.fill();
}

export function onMouseRelease(){
    drawing = false;
    mousePos.reset();
}



