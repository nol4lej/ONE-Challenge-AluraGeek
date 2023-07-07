const GetProducts = async () => {
    return fetch("http://localhost:3000/productos")
    .then(res => res.json())
}

const ViewProduct = async (id) => {
    return fetch(`http://localhost:3000/productos/${id}`)
    .then(res => res.json())
}

export const ClienteServices = {
    GetProducts,
    ViewProduct
}