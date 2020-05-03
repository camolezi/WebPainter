
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

    let pathToDraw = new Path2D();

    pathToDraw.moveTo(event.clientX,event.clientY);
    pathToDraw.lineTo(mousePos.x,mousePos.y);

    mousePos.changePos(event.clientX,event.clientY);

    if(drawing){
        drawCtx.stroke(pathToDraw);
    }
}


export function onMouseClick(event){
    drawing = true;

    let pathToDraw = new Path2D();

    pathToDraw.arc(event.clientX,event.clientY, drawCtx.lineWidth/2, 0, 2*Math.PI, true);
    drawCtx.fill(pathToDraw);

    mousePos.changePos(event.clientX,event.clientY);
}

export function onMouseRelease(){
    drawing = false;
    mousePos.reset();
}



