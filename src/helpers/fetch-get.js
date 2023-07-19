export async function fetchGet(){
    const res = await fetch("http://localhost:3000/productos")
    if (!res.ok) {
        throw new Error(`Error en la respuesta del servidor: ${res.status} ${res.statusText}`);
    } else {
        const resJSON = await res.json()
        return resJSON
    }
}