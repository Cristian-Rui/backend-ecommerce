import express from 'express'
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
// import viewsRoutes from './routes/views.routes.js';
// import userRoutes from './routes/users.routes.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./HANDS_ON_LAB/clase10_websockets/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'HANDS_ON_LAB/clase10_websockets/src/views');
app.set('view engine', 'handlebars')

// app.use('/', viewsRoutes);
// app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.render('index')
})

const httpServer = app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});

const io = new Server(httpServer);

const messages = [];

io.on('connection', socket => {
    console.log('nuevo cliente conectado');;

    socket.on('message', data => {
        messages.push({id:socket.id, data});
        io.emit('messages', messages)
    })
})