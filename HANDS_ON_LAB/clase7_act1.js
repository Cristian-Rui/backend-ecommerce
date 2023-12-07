import express from 'express'

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.post('/api/users', (req, res) => {
    const user = req.body;
    const id = users.length + 1;
    users.push({ ...user, id });
    res.send({ status: 'ok', message: 'usuario creado' });
});

app.get('/api/users', (req, res) => {
    res.send({ users });
});

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params
    if (!users.some(u => u.id === parseInt(id))) {
        return res.send({ error: 'user not found' });
    };

    const user = req.body;
    users = users.map(u => {
        if (u.id === parseInt(id)) {
            return {
                ...u,
                ...user,
                id: parseInt(id)
            }
        }

        return u;
    });

    res.send({ message: 'user updated' })
});

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params
    if (!users.some(u => u.id === parseInt(id))) {
        return res.send({ error: 'user not found' });
    };
    users = users.filter(u => u.id !== parseInt(id));
        res.send({ message: 'user deleted' });
})




app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});