
import * as app from "./mainScript.js";
import * as connection from "./socket.js";
import * as remoteDraw from "./remoteDraw.js";


let connected = false;

const connectionButton = document.getElementById("b_room");
connectionButton.onclick = () => { startCommunication(); createNewRoom();};

//is on a room so start communication
if(location.pathname !== "/"){
    startCommunication(); 
} 

function startCommunication(){

    //if already connected return
    if(connected)
        return;
    

    connection.startConnection();

    remoteDraw.startRemoteDraw(app.getLocalCanvas());

    app.canvasChanged( (data)=> {
        connection.emitData(data);
    });

    connection.addGetDataCallback( (data) => {
        remoteDraw.newDrawData(data);
    });

    connected = true;
}


function createNewRoom(){
    connection.createNewRoom();
}


