class ProductManager {
    constructor() {
        this.products = []
        this.lastId = 0
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const productExist = this.products.some(product => product.code === code)
        if (productExist) {
            console.error(`producto duplicado`);
        } else {
            const product = {
                id: ++this.lastId,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product)
        }
    }

    getProducts() {
        return this.products
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        return product || ("Error. Id no encontrado")
    }
}

const productManager = new ProductManager()


// Agregar un producto
productManager.addProduct("producto de prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

// Intentar agregar el mismo producto (esto debería mostrar un mensaje de error)
productManager.addProduct("producto de prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

// Obtener la lista de productos y almacenarla en la variable products
const products = productManager.getProducts();



console.log(productManager.getProductById(5))


// Imprimir la lista de productos en la consola
console.log(products);