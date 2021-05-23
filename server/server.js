import HttpServer from "http";
import categories from "./actions.js";
import { Server } from "socket.io";

import pkg from "lodash";
const { get } = pkg;

const httpServer = HttpServer.createServer();

const io = new Server(httpServer, {
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
    action.action(socket);
  });
});

io.listen(80);

console.info("Server started");
