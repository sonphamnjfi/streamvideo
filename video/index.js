let app = require("express")();
let ss = require("socket.io-stream");
let http = require("http").createServer(app);
const routes = require("./routes");
let io = require("socket.io")(http);
routes(app, __dirname);
http.listen(3000, () => {
    console.log("app listening on port ", 3000);
});

io.sockets.on("connection", (socket) => {
    socket.on("joinRoom", (obj) => {
        let { name, stream } = obj;
        console.log(name, stream);
    });
});