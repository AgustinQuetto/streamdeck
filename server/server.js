const httpServer = require("http").createServer();
const categories = require("./actions");
const { get } = require("lodash");

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected");
  socket.on("get-categories", () => {
    socket.emit("set-categories", categories);
  });

  socket.on("execute-action", (path) => {
    const action = get(categories, path);
    action.action();
  });
});

io.listen(80);

console.info("Server started");
