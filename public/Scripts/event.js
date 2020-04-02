const canvas = document.getElementById("MainCanvas");

export function createEvent(type, data){

    let eventObject = {
        name : type
    };
    //mouse event
    if(type == "mousedown" || type == "mouseup" || type == "mousemove" || type == "mouseleave"){
        eventObject.clientX = data.clientX -  canvas.getBoundingClientRect().left;
        eventObject.clientY = data.clientY - canvas.getBoundingClientRect().top;
    }
   
    if(type == "touchstart" || type == "touchend" || type == "touchmove"){
        eventObject.clientX = data.changedTouches[0].clientX -  canvas.getBoundingClientRect().left;
        eventObject.clientY = data.changedTouches[0].clientY - canvas.getBoundingClientRect().top;
    }

    return eventObject;
}

