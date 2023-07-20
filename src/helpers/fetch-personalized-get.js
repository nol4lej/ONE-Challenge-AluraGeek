export async function fetchPersonalizedGet(url){
    const res = await fetch(`http://localhost:3000/productos/${url}`)
    if (!res.ok) {
        throw new Error(`Error en la respuesta del servidor: ${res.status} ${res.statusText}`);
    } else {
        const resJSON = await res.json()
        return resJSON
    }
}