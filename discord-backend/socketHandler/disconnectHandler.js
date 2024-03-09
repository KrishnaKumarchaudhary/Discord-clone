const serverStore = require("../serverStore");

const disconnectHandle = (socket) => {
  serverStore.removeConnectedUser(socket.id);
};

module.exports = disconnectHandle;
