const GetProducts = async () => {
    return fetch("http://localhost:3000/producto")
    .then(res => res.json())
}

export const ClienteServices = {
    GetProducts
}