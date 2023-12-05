import express from 'express';
const PORT = 8080;
const app = express();
app.use(express.urlencoded({extended:true}));

app.get('/saludo', (req, res) => {
    res.send('hola mundo');
})

const user1 = {
    nombre: 'Cristian',
    apellido: 'Rui',
    edad: '18',
    correo: 'kiti_26@live.com'
}

const users = [
    {
        nombre: 'Cristian',
        apellido: 'Rui',
        edad: '25',
        correo: 'kiti_26@live.com',
        id: '1',
        genero: 'M'
    },
    {
        nombre: 'Tomas',
        apellido: 'Rebord',
        edad: '35',
        correo: 'tomasRebord@live.com',
        id: '2',
        genero: 'M'
    },
    {
        nombre: 'Abril',
        apellido: 'Martina',
        edad: '24',
        correo: 'abrilMartina@live.com',
        id: '3',
        genero: 'F'
    },
    {
        nombre: 'Carlos',
        apellido: 'Maslaton',
        edad: '18',
        correo: 'carlosMaslaton@live.com',
        id: '4',
        genero: 'M'
    }
]

app.get('/bienvenida', (req, res) => {
    res.send(`<h1 style= color:blue>bienvenidos a la pagina</h1>`)
})

app.get('/usuario', (req, res)=> {
    res.send(user1);
})

app.get('/user-param/:nombre/:apellido', (req, res)=> {
    const { nombre, apellido } = req.params;
    res.send(`hola ${nombre} ${apellido}, como estas?`);
});

// app.get('/', (req, res)=>{
//     res.send({users});
// })

// app.get('/:id', (req, res)=>{
//     const {id} = req.params;

//     let usuario = users.find(u => u.id === id);
//     if(!usuario) {
//         return res.send('error: usuario no encontrado')
//     };

//     res.send(usuario);
// })

// app.get('/users', (req, res) => {
//     const { id,nombre, apellido } = req.query;
//     res.send(`el usuario ${id} es ${nombre} ${apellido}`)
// })

app.get('/', (req, res) => {
    const { genero } = req.query;

    if(!genero || (genero !== 'M' && genero !== 'F')){
        res.send({users});
    }
    let filterUsers = users.filter(user => user.genero == genero);
    
    res.send({usuarios : filterUsers});

})

app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});