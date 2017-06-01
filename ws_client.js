/* eslint-env browser */

let ws

window.onload = function () {
  document.getElementById('input').addEventListener('keyup', function (event) {
    event.preventDefault()

    if (event.keyCode === 13) {
      document.getElementById('sendButton').click()
    }
  })

    // ws = new WebSocket('ws://tstraus.net:1234');
  ws = new WebSocket('ws://127.0.0.1:1234')

  ws.onopen = function (event) {
    console.log('Connected')
  }

  ws.onmessage = function (event) {
    const msg = JSON.parse(event.data)

    if (msg.type === 'msg') {
      console.log(msg.user + ': \'' + msg.data + '\'')
    }
  }
}

function sendJoin () { // eslint-disable-line no-unused-vars
  const join = {
    type: 'join',
    user: document.getElementById('user').value
  }

  ws.send(JSON.stringify(join))
};

function sendMessage () { // eslint-disable-line no-unused-vars
  const msg = {
    type: 'msg',
    user: document.getElementById('dest').value,
    data: document.getElementById('input').value
  }

  ws.send(JSON.stringify(msg))

  document.getElementById('input').value = ''
};
