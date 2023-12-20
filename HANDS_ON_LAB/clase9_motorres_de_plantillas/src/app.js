import express from 'express'
import handlebars from 'express-handlebars';
import viewsRoutes from './routes/views.routes.js';
import userRoutes from './routes/users.routes.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./HANDS_ON_LAB/clase9_motorres_de_plantillas/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'HANDS_ON_LAB/clase9_motorres_de_plantillas/src/views');
app.set('view engine', 'handlebars')
app.use('/', viewsRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});