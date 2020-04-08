
const httpModule = require("http");
const express = require("express");
const wsModule = require("socket.io");

const app = express();
const server = httpModule.createServer(app);

//socket io
const io = wsModule(server);

//console.log(io.origins.value);

//express server
//serve the static web painter
app.use(express.static(__dirname + "/public"));


io.on("connect" ,(socket) => {
    socket.on("askNewRoom", ()=>{
        createNewRoom(socket);
    });
});


function createNewRoom(socket){
    //Random hash namespace
    const namespaceName = "room" + Math.floor( (Math.random() * 10000000000) + 1) ;
    console.log(namespaceName);
        //namespace test
    const newNamespace = io.of("/"+namespaceName);
    newNamespace.on("connect" ,(socketRoom) => {
        console.log("Namespace connection");
        //Server recive data
        socketRoom.on("updateData", (data) => {
            socketRoom.broadcast.emit("updatedData",data);
        });

        socketRoom.on("askNewRoom", ()=>{
            createNewRoom(socketRoom);
        });
    });

    //Send static files to the namespace url
    app.get("/" +namespaceName, (req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    });

    socket.emit("createNewRoom",namespaceName);
 //socket.removeAllListeners("connect");

}

let serverPort =  process.env.PORT || 8000;
server.listen(serverPort, () => { console.log("Started Server at port: " + serverPort); })