import express from 'express'

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = "Frase inicial";

app.get('/api/frase', (req, res) => {
    res.send({ frase });
})

app.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const fraseArr = frase.split(' ');
    const palabra = fraseArr[parseInt(pos) - 1];
    if (fraseArr.length < parseInt(pos)) {
        return res.send({ error: 'palabra inexistente' });
    };
    res.send({ palabra });
})

app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body;
    frase = frase.concat(` ${palabra}`);
    const fraseArr = frase.split(' ');
    res.send({ agregada: palabra, pos: fraseArr.length })

})

app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body;
    const { pos } = req.params;
    let fraseArr = frase.split(' ');

    if (fraseArr.length < parseInt(pos)) {
        return res.send({ error: 'palabra inexistente' });
    };

    const fraseToUpdate = fraseArr[pos - 1]

    fraseArr.splice(pos - 1, 1, palabra);
    frase = fraseArr.join(' ');
    res.send({ actualizada: palabra, anterior: fraseToUpdate })
})

app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    let fraseArr = frase.split(' ');

    if (fraseArr.length < parseInt(pos)) {
        return res.send({ error: 'palabra inexistente' });
    };

    fraseArr.splice(pos - 1, 1);
    frase = fraseArr.join(' ');
    res.send({ message: 'user deleted' });

})







app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});