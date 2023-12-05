import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res)=> {
    res.end('hola mundo desde el backend');
});

server.listen(PORT, ()=> {
    console.log(`servidor escuchando en puerto ${PORT}`)
});