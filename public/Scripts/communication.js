
import * as app from "./mainScript.js";
import * as connection from "./socket.js";

const connectionButton = document.getElementById("b_room");
connectionButton.onclick = () => { startCommunication(); createNewRoom();};

//is on a room
if(location.pathname !== "/"){
    startCommunication(); 
} 

function startCommunication(){
    
    connection.startConnection();

    app.canvasChanged( (data)=> {
        connection.emitData(data);
    });

    connection.addGetDataCallback( (data) => {
        app.changeCanvas(data);
    });
}


function createNewRoom(){
    connection.createNewRoom();
}


