//Socker test
var socket = io.connect();
socket.on("connect", function(data) {
    //console.log("nice");
    //socket.emit("myTestEvent", "a string thats passed by a server, nice!");
});

socket.on("updatedData", (data) => {
    //Save data to update canvas

    //for now just a log
    console.log("Data Recived:" + data);

});

export function canvasUpdated(data){
    //this will send when the canvas is updated
    socket.emit("updateData", data);
}
