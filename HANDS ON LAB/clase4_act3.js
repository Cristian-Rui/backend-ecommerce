const fs = require('fs');

class UserManager {
    constructor(path) {
        this.path = path;
    }

    async crearUsuario(usuario) {
        if (!usuario.nombre || !usuario.apellido || !usuario.edad || !usuario.curso) {
            return console.log('usuario incompleto')
        }
        const usuarios = await this.consultarUsuarios();
        usuarios.push(usuario);
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios), 'utf-8');

    }

    async consultarUsuarios() {
        try {
            const datos = await fs.promises.readFile(this.path, 'utf-8');
            const parseDatos = JSON.parse(datos);
            return parseDatos;
        } catch (error) {
            console.log('no hay datos');
            return [];
        }
    }
}

const test = async () => {
    const userManager = new UserManager('./HANDS\ ON\ LAB/./Usuarios.json');

    const user1 = {
        nombre: 'cristian',
        apellido: 'rui',
        edad: 25,
        curso: 'backend'
    };

    const user2 = {
        nombre: 'abril',
        apellido: 'martina',
        edad: 24,
        curso: 'backend'
    };

    const user3 = {
        nombre: 'tomas',
        apellido: 'rebord',
        edad: 32,
        curso: 'backend'
    };

    const user4 = {
        nombre: 'carlos',
        apellido: 'maslaton',
        edad: 65,
        curso: 'backend'
    };

    const user5 = {
        nombre: 'el killer',
        apellido: 'macri',
        edad: 65,
        curso: 'backend'
    };

    await userManager.crearUsuario(user1);
    await userManager.crearUsuario(user2);
    await userManager.crearUsuario(user3);
    await userManager.crearUsuario(user4);
    await userManager.crearUsuario(user5);

    const data = await userManager.consultarUsuarios();
    console.log(data);

}

test();