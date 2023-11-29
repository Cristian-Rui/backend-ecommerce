import * as fs from 'fs';

class ProductManager {
    constructor(path) {
        this.path = path,
            this.products = []
    }

    static id = 1000000;


    //METODOS

    // VERIFICO SI EXISTE EL ARCHIVO PARA ELIMINARLO Y ASI EVITO QUE SE REPITAN LOS PRODUCTOS DENTRO DEL ARCHIVO.
    async reloadClean() {
        const fileExists = await fs.promises.access(this.path)
            .then(() => true)
            .catch(() => false);

        if (fileExists) {
            await fs.promises.unlink(this.path);
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        //VALIDACION CAMPOS OBLIGATTORIOS
        try {
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.error('Todos los campos son obligatorios.');
                return;
            }

            const product = {
                id: ProductManager.id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }

            const productExists = this.products.find(p => p.code === product.code);
            if (productExists) {
                console.error('El código del producto ya está en uso.');
                return;
            }

            ProductManager.id++

            this.products.push(product);

            await this.reloadClean();

            await fs.promises.writeFile(this.path, JSON.stringify(this.products), 'utf-8');

        } catch (error) {
            return console.error('error al cargar el producto', error);
        }

    }

    async getProducts() {
        try {
            const datos = await fs.promises.readFile(this.path, 'utf-8');
            const parseDatos = JSON.parse(datos);
            return parseDatos;
        } catch (error) {
            console.log('no hay datos');
            return [];
        };
    }

    async getProductById(idProduct) {
        const productsList = await this.getProducts();
        const productExists = productsList.find(p => p.id === idProduct);

        if (!productExists) {
            console.error('Not found')
        } else {
            return productExists;
        }
    }

    async updateProduct(idProduct, productToUpdate) {
        const searchProduct = await this.getProductById(idProduct);
        const update = {
            ...searchProduct,
            ...productToUpdate,
            id: idProduct
        }

        await this.deleteProduct(idProduct);
        this.products.push(update);

        await this.reloadClean();
        await fs.promises.writeFile(this.path, JSON.stringify(this.products), 'utf-8');

    }

    async deleteProduct(idProduct) {
        try {
            const productList = await this.getProducts();
            const productDelete = this.products.filter(product => product.id !== idProduct);
            await this.reloadClean();
            await fs.promises.writeFile(this.path, JSON.stringify(productDelete), 'utf-8');
        } catch (error) {
            console.error('no se encontro el producto');
        }
    }


}

const test = async () => {
    const productManager = new ProductManager('./desafios\ entregables/./desafioEntregable2/ProductFile.json');
    //let data = await productManager.getProducts();
    //console.log(data);

    //await productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    //data = await productManager.getProducts();
    //console.log(data);

    // data = await productManager.getProductById(1000000);
    // console.log(data);

    //await productManager.updateProduct(1000000, { title: 'nombre cambiado 2', price: 5000 })

    // await productManager.deleteProduct(1000001);

    //await productManager.deleteProduct(1000000);
    //console.log(data);

}
test();