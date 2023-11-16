class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 1000000;


    //METODOS

    addProduct(title, description, price, thumbnail, code, stock) {
        //VALIDACION CAMPOS OBLIGATTORIOS
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
    }

    getProducts() {
        return productManager.products;
    }

    getProductById(idProduct) {
        const productExists = productManager.products.find(p => p.id === idProduct);
        
        if (!productExists) {
            console.error('Not found')
        } else {
            return `el producto que busca es: ${productExists.title} y cuesta:$${productExists.price}`;
        }
    }


}

const productManager = new ProductManager();

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

//console.log(productManager.getProducts())

console.log(productManager.getProductById(10000000))