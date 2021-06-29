const connection = new WebSocket('ws://localhost:3000');

const logWindow = document.querySelector(id="log-window");

connection.onopen('open', (event) =>{
    connection.send("Hello from the client!");
    logWindow.innerHTML = event(data);
});
