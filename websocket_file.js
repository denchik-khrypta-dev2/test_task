
document.addEventListener('DOMContentLoaded', function(){

    const messagesContainer = document.querySelector('#messages_container');
    const messageInput = document.querySelector('[name=message_input]')
    const sendMessage = document.querySelector('[name=send_message]')


    let websocketClient = new WebSocket("ws://localhost:12345");

    websocketClient.onopen = () => {

        console.log("Client Connected");
        websocketClient.send("Hello");

        sendMessage.onclick = () => {
            websocketClient.send(messageInput.value);
            messageInput.value = "";

        };

    };

    websocketClient.onmessage = (message) => {
        const newMessage = document.createElement('div');
        newMessage.innerHTML = message.data;
        messagesContainer.appendChild(newMessage);



    };

}, false);