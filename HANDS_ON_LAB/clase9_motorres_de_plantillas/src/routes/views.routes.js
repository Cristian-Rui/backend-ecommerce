import { Router } from "express";
import { users } from "./users.routes.js";

const viewsRoutes = Router()



const food = [
    {
        name: 'milanesas',
        price: 5000
    },
    {
        name: 'fideos',
        price: 3000
    },
    {
        name: 'pizza',
        price: 8000
    },
    {
        name: 'mariscos',
        price: 10000
    },
    {
        name: 'torta',
        price: 4000
    },
]

viewsRoutes.get('/', (req, res) => {
    const pos = Math.floor(Math.random() * users.length);
    let user = users[pos];
    const isAdmin = user.role === 'admin';
    user = { ...user, isAdmin };
    res.render('index', { user, food, style: 'index.css' });
})

viewsRoutes.get('/register', (req, res) => {
    res.render('register')
})

export default viewsRoutes;