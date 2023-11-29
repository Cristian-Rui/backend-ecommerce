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

    async addProduct(product) {
        //VALIDACION CAMPOS OBLIGATTORIOS
        try {
            if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
                console.error('Todos los campos son obligatorios.');
                return;
            }

            const newProduct = {
                id: ProductManager.id,
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock
            }

            const productExists = this.products.find(p => p.code === newProduct.code);
            if (productExists) {
                console.error('El código del producto ya está en uso.');
                return;
            }

            ProductManager.id++

            this.products.push(newProduct);

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

        const productList = await this.getProducts();

        const productToDelete = productList.find(p => p.id === idProduct);
        if (!productToDelete) {
            return console.error(`No se encontró ningún producto con el ID ${idProduct}`);
        }

        const productDelete = productList.filter(p => p.id !== idProduct);
        await this.reloadClean();
        await fs.promises.writeFile(this.path, JSON.stringify(productDelete), 'utf-8');
    }
}

const test = async () => {
    const productManager = new ProductManager('./desafios_entregables/desafioEntregable2/ProductFile.json');
    let data = await productManager.getProducts();
    console.log(data);

    const producto1 = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    }

    //await productManager.addProduct(producto1);
    //data = await productManager.getProducts();
    //console.log(data);

    //data = await productManager.getProductById(1000000);
    //console.log('este es el prod by Id', data);

    //await productManager.updateProduct(1000000, { title: 'nombre cambiado 2', price: 5000 })

    //await productManager.deleteProduct(1000000);

    //await productManager.deleteProduct(1000000);
    //console.log(data);

}
test();