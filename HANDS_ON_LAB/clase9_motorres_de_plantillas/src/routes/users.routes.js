import { Router } from "express";

const userRoutes = Router()
export const users = [
    {
        name: 'abril',
        lastName: 'martina',
        age: 24,
        email: 'abril@algo.com',
        phone: 1234556,
        role: 'admin'
    },
    {
        name: 'valentina',
        lastName: 'rui',
        age: 26,
        email: 'valentina@algo.com',
        phone: 1234556,
        role: 'user'
    },
    {
        name: 'bsautista',
        lastName: 'rui',
        age: 16,
        email: 'bautista@algo.com',
        phone: 1233243246,
        role: 'user'
    },
    {
        name: 'gabriela',
        lastName: 'catoldi',
        age: 48,
        email: 'gabriela@algo.com',
        phone: 1236443656,
        role: 'admin'
    },
    {
        name: 'cristian',
        lastName: 'rui',
        age: 53,
        email: 'cristian@algo.com',
        phone: 1234563446,
        role: 'admin'
    }
]

userRoutes.get('/', (req, res) => {
    res.send(users);
})

userRoutes.post('/', (req, res) => {
    try {
        const user = req.body;
        console.log(user)
        users.push(user)
        
        res.send({ message: 'usuario  agregado' })
    } catch (error) {
        return res.status(500).send({message:'error'})
    }
})

export default userRoutes;