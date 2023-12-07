import { Router } from "express";

const userRoutes = Router();

let users = [];

userRoutes.get('/', (req, res) => {
    res.send({ users });
});

userRoutes.post('/', (req, res) => {
    const user = req.body;

    users.push(user);
    
    res.send({message: 'usuario agregado'})
})


export default userRoutes;