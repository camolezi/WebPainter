
import * as app from "./mainScript.js";
import * as connection from "./socket.js";

app.canvasChanged( (data)=> {
    connection.emitData(data);
});

connection.addGetDataCallback( (data) => {
    app.changeCanvas(data);
});
