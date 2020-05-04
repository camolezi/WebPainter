


export default class drawingToolBase{

    constructor(ctx){

        this.drawCtx = null;
        this.drawing = false;
    
        this.mousePos = {
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

        this.drawCtx = ctx;
    }
  

    onColorChange(newColor){
        this.drawCtx.strokeStyle = newColor;
        this.drawCtx.fillStyle = newColor;
    }

    //Call Back public API (all tools will have the same API)
    onMouseMove(event){

        if(this.mousePos.x === null || this.mousePos.y === null){
            this.mousePos.changePos(event.clientX,event.clientY);
            return;
        }

        let pathToDraw = new Path2D();

        pathToDraw.moveTo(event.clientX,event.clientY);
        pathToDraw.lineTo(this.mousePos.x,this.mousePos.y);

        this.mousePos.changePos(event.clientX,event.clientY);

        if(this.drawing){
            this.drawCtx.stroke(pathToDraw);
        }
    }


    onMouseClick(event){
        this.drawing = true;

        let pathToDraw = new Path2D();

        pathToDraw.arc(event.clientX,event.clientY, this.drawCtx.lineWidth/2, 0, 2*Math.PI, true);
        this.drawCtx.fill(pathToDraw);

        this.mousePos.changePos(event.clientX,event.clientY);
    }

    onMouseRelease(){
        this.drawing = false;
        this.mousePos.reset();
    }


}



////--------------The base code for all basic drawing tools---------------------------------
