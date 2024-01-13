


const products = [
    { 
        id:"1",
        name: " Cafe Brazil",
        price:2000,
        category:"cafes",
        img : "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=443&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Origen: Brasil Minas Gerais  Especie: 100% Arábica  Notas: Caramelo, almendras y chocolate  Tostado: Medio",
    },
    { 
        id:"2",
        name: " Cafe Italiano",
        price:2500,
        category:"cafes",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=455&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Café seleccionado origen Brasil, de granos parejos y tostado, para preparar un café intenso y de aroma persistente. Tostado: intenso",
    },
    { 
        id:"3",
        name: " Cafe Colombia",
        price:3000,
        category:"cafes",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=429&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Origen: Colombia  Especie: 100% Arábica  Notas: Cacao frutales y caña de azúcar  Tostado: Medio" ,
    },
    { 
        id:"4",
        name: "Cafetera Volturno Clasica",
        price:30000,
        category:"cafeteras",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=247&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Cafetera clásica de aluminio de primera calidad, apto para uso alimentario. 9 pocillos (540 cm3)",
    },
    { 
        id:"5",
        name: "Cafetera Italiana Acero Inoxidable",
        price:40000,
        category:"cafeteras",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=337&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Capacidad: 6 pocillos (aprox. 300 ml)  Parte superior: Acero Inoxidable 304. Parte inferior: Acero Inoxidable 430. Mango: Nylon ",
    },
    { 
        id:"6",
        name: "Cafetera Volturno Glasse",
        price:40000,
        category:"cafeteras",
        img: "https://ss-static-01.esmsv.com/id/159079/productos/obtenerimagen/?id=255&useDensity=true&width=1920&height=1080&tipoEscala=fit",
        stock:25,
        description: "Cafetera de vidrio borosilicato de alta calidad, resistente a altas temperaturas. Además, podés preparar te, mate cocido o cualquier otra infusión. Capacidad 8 tazas",
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