var ws;

window.onload = function() {
    document.getElementById("input").addEventListener("keyup", function(event) {
        event.preventDefault();

        if (event.keyCode == 13) {
            document.getElementById("sendButton").click();
        }
    });

    ws = new WebSocket("ws://tstraus.net:1234");
    //ws = new WebSocket("ws://127.0.0.1:1234");

    ws.onopen = function (event) {
        /*var join = {
            user: "Tuckles",
            type: "join"
        };

        ws.send(JSON.stringify(join));*/
    }

    ws.onmessage = function (event) {
        var msg = JSON.parse(event.data);

        if (msg.type === "msg") {
            console.log(msg.user + ": \"" + msg.data + "\"");
        }
    };
};

function sendConnect() {
    var join = {
        user: document.getElementById("user").value,
        type: "join"
    };

    ws.send(JSON.stringify(join));
};

function sendMessage() {
    var msg = {
        user: document.getElementById("user").value,
        type: "msg",
        data: {
            dest: document.getElementById("dest").value,
            msg: document.getElementById("input").value
        }
    };

    ws.send(JSON.stringify(msg));

    document.getElementById("input").value = "";
};
