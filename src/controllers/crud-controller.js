const GetProducts = async () => {
    return fetch("http://localhost:3000/productos")
    .then(res => res.json())
}

const ViewProduct = async (url) => {
    return fetch(`http://localhost:3000/productos/${url}`)
    .then(res => res.json())
}

export const ClienteServices = {
    GetProducts,
    ViewProduct
}