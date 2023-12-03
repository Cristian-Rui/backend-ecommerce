import * as fs from 'fs';
import crypto from 'crypto';


class UserManager {
    constructor(path) {
        this.path = path
    }
    async agregarUsuario(usuario) {
        if (!usuario.nombre || !usuario.apellido || !usuario.password || !usuario.nombreUsuario) {
            return console.log('usuario incompleto');
        }
        const { nombre, apellido, password, nombreUsuario } = usuario;
        const usuarios = await this.obtenerUsuarios();
        const hashedPassword = await this.hashearPassword(password);
        const newUser = {
            nombre,
            apellido,
            password: hashedPassword,
            nombreUsuario
        }

        usuarios.push(newUser);
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios), 'utf-8');

    }

    async validarUsuario(nombreUsuario, password) {
        const users = await this.obtenerUsuarios();
        const user = users.find(u => u.nombreUsuario === nombreUsuario);
        if(!user){
            return console.log('el usuario no existe');
        }

        const dbPassword = user.password;
        const hashedPassword = await this.hashearPassword(password);
        if(dbPassword === hashedPassword) {
            return console.log('usuario valido');
        } else{
            return (console.log('contraseña incorrecta'));
        }
        
    }

    async obtenerUsuarios() {
        try {
            const resultado = await fs.promises.readFile(this.path, 'utf-8');
            const usuarios = JSON.parse(resultado);
            return usuarios;
        } catch (error) {
            return [];
        }
    }

hashearPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    const hashedPassword = hash.digest('hex');
    return hashedPassword;
}

}

const test = async () => {
    const userManager = new UserManager('./HANDS_ON_LAB/User.json');
    const user1 = {
        nombre: 'Cristian',
        apellido: 'Rui',
        password: '12345678',
        nombreUsuario: 'kiti_26'
    }

    await userManager.agregarUsuario(user1);
}

test();