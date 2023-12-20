const socket = io();


const inputInfo = document.getElementById('inputInfo');
const sendInfo = document.getElementById('sendInfo');
const outputInfo = document.getElementById('outputInfo');

sendInfo.addEventListener('click', event => {
    socket.emit('message', inputInfo.value);
})

socket.on('messages', data => {
    outputInfo.innerHTML = `
    <ul>
    ${data.map(d => `<li>ID: ${d.id} ${d.data}</li>`)}
    </ul>
    `
})
