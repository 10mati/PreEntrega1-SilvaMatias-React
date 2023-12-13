


const products = [
    { 
        id:"1",
        name: " Cafe Brazil",
        price:"2000",
        category:" Cafes",
        img : "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=443&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "sssssssssssssssssssssssssssssssssssssss",
    },
    { 
        id:"2",
        name: " Cafe Italiano",
        price:"2500",
        category:"Cafes",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=455&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "iiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    },
    { 
        id:"3",
        name: " Cafe Colombia",
        price:"3000",
        category:" Cafes",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=429&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "ccccccccccccccccccccccccccccccccc",
    },
    { 
        id:"4",
        name: " Cafetera Volturno Clasica",
        price:"30000",
        category:" Cafeteras",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=247&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Cafetera clásica de aluminio de primera calidad, apto para uso alimentario. 9 pocillos (540 cm3)",
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout ( () => {
            resolve (products)
        }, 500)
    })
}
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout ( () => {
            resolve (products.find(prod=> prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout ( () => {
            resolve (products.filter(prod=> prod.category === categoryId))
        }, 500)
    })
}