var ws;

window.onload = function() {
    document.getElementById("input").addEventListener("keyup", function(event) {
        event.preventDefault();

        if (event.keyCode == 13) {
            document.getElementById("sendButton").click();
        }
    });

    ws = new WebSocket("ws://tstraus.net:1234");

    ws.onopen = function (event) {
        var join = {
            user: "Tuckles",
            type: "join"
        };

        ws.send(JSON.stringify(join));
    }

    ws.onmessage = function (event) {
        var msg = JSON.parse(event.data);

        if (msg.type === "msg") {
            console.log(msg.user + ": \"" + msg.data + "\"");
        }
    };
}

function sendMessage() {
    var msg = {
        user: "Tuckles",
        type: "msg",
        data: document.getElementById("input").value
    };

    ws.send(JSON.stringify(msg));

    document.getElementById("input").value = "";
};
