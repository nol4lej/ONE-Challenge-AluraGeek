export async function fetchPost(data){
    const res = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        throw new Error(`Error en la respuesta del servidor: ${res.status} ${res.statusText}`);
    } else {
        const resJSON = await res.json()
        return resJSON
    }
}