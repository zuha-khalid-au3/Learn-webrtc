const socket = io("/");

socket.on("connect", () => {
  console.log("Successfully connected to websocket server");
  console.log(socket.id);
});
