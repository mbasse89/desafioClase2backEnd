class productManager {

    constructor() {
        this.product = []
    }



    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(product)


    }

    getProducts() {
        return this.products
    }

    getProductsById  (id){
        const product = this.product.find(product => product.code === id)

        return product || null
    }

   

}