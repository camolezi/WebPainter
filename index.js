
const httpModule = require("http");
const express = require("express");
const wcModule = require("socket.io");

const app = express();
const server = httpModule.createServer(app);


//socket io
const io = wcModule(server);
io.on("connection" ,(socket) => {
    console.log("One client connect to the socket");

    //Server recive data
    socket.on("updateData", (data) => {
        //console.log(data);
        //Brodcast data and  //Server send data
        socket.broadcast.emit("updatedData",data);
    });

   
});



//express server
//serve the static web painter
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  
});

let serverPort = 8000;
server.listen(serverPort, () => { console.log("Started Server at port: " + serverPort); })