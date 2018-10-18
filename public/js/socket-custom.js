var socket = io();
socket.on('connect', function () {
    console.log("connected to the server");
})

socket.on('disconnect', function () {
    console.log("connection lost");
});
//send information
socket.emit('sendMessage', { user: "Jose", message: "Hello There" },
    function (response) {
        console.log("Server response: ", response.response);
    });
socket.on('sendMessage', (data) => {
    console.log("server: ", data);
})