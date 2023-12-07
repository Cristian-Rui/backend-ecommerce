import express from 'express'
import userRoutes from './routes/users.routes.js';
import petsRoutes from './routes/pets.routes.js';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./HANDS_ON_LAB/clase8/public'));
app.use('/api/users', userRoutes)

app.use('/api/pets', petsRoutes)

app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});