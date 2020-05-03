import * as communication from "./communication.js";
import drawContextClass from "./drawContext.js";



//One draw context for each of clients connected 

let remoteDrawClients = [];
let canvas = null;

export function startRemoteDraw(localCanvas){
    canvas = localCanvas;
}

export function newDrawData(data){

    let remoteDrawContext = remoteDrawClients[data.sentById]; 

    //If it is a new client
    if(!remoteDrawContext){
        remoteDrawContext = remoteDrawClients[data.sentById] = new drawContextClass(canvas);
    }

    remoteDrawContext.addCanvasPixelData(data);

}