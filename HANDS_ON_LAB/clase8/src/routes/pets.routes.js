import { Router } from "express";
import { uploader } from '../utils/multer.js'
const petsRoutes = Router();

const pets = [];

petsRoutes.get('/', (req, res) => {
    res.send({ pets });
})

petsRoutes.post('/', uploader.single('file'), (req, res) => {
    const pet = req.body;
    const path = req.file.path.split('HANDS_ON_LAB\\clase8\\public').join('');
    pets.push({
        ...pet,
        thumbnail: path
    });

    res.send({ message: 'mascota agregada' })
})





export default petsRoutes;