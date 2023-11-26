const fs = require('fs');


class UserManager {
    construcctor(path) {
        this.path = path;
    }

    async agregarUsuario(usuario) {
        if (!usuario.nombre || !usuario.apellido || !usuario.password || !usuario.nombreUsuario) {
            return console.log('usuario incompleto');
        }
        const {nombre, apellido, password, nombreUsuario} = usuario;

    }

    async obtenerUsuarios(){
        try {
            const resultado = await fs.promises.readFile(this.path, 'utf-8');
            const usuarios = JSON.parse(resultado);
            return usuarios;
        } catch (error){
            return [];
        }
    }



}