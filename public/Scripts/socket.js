
export function emitData(data){
    socket.emit("updateData", data);
}

//Socker test
var socket = io.connect();
socket.on("connect", function(data) {
    //console.log("nice");
    //socket.emit("myTestEvent", "a string thats passed by a server, nice!");
});

let dataCallbacks = [];
export function addGetDataCallback(callback){
    dataCallbacks.push(callback);
}

socket.on("updatedData", (data) => {
    //Save data to update canvas
    //for now just a log
   // console.log("Data Recived:");
    dataCallbacks.forEach((callback) => {
        callback(data)
    });
    
});

