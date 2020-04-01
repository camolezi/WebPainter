
import * as app from "./mainScript.js";




app.canvasChanged((data)=> {
    socket.emit("updateData", data);
});

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

