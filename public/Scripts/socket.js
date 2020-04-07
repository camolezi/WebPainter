
//Socker test
var socket;

export function startConnection(){
   
    console.log("conection path: " + window.location.href );

    socket = io.connect(window.location.href);

    socket.on("createNewRoom", function(data) {
        console.log("entered the connect event");
        if(data !== null && data !== undefined && data !== window.location.href){
            console.log("change URL : " + data);
            window.location.href = window.location.href + data;
        }
        
    });

    socket.on("updatedData", (data) => {
        dataCallbacks.forEach((callback) => {
            callback(data)
        });
    });
}


let dataCallbacks = [];
export function addGetDataCallback(callback){
    dataCallbacks.push(callback);
}


export function emitData(data){
    socket.emit("updateData", data);
}

export function createNewRoom(){
    socket.emit("askNewRoom");
}



