export async function fetchGet(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
        // productObserver.notify(data); // Notificar a los observadores una vez que se obtengan los productos
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
