const { io } = require('../server');
io.on('connection', (client) => {
    console.log("user connected");

    client.emit('sendMessage', { user: "Server", message: "Hello from server" });

    client.on('disconnect', () => {
        console.log("User not connected");
    });

    //listen client
    client.on('sendMessage', (data, callback) => {
        console.log("Data from client", data);

        client.broadcast.emit('sendMessage',data);

        /* if (data.user) {
            callback({ response: "Everything OK" });
        }
        else {
            callback({ response: "There was an error" });
        } */
    });
});