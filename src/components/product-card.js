export const productCard = (imageUrl, name, price, id, nameUrl) => {
    const contenedor = `
        <div class="item">
            <div class="item__img__container">
                <img class="item__img" src="${imageUrl}" alt="">
            </div>
            <div class="item__info">
                <h3 class="item__title">${name}</h3>
                <p class="item__price">${price}</p>
                <a class="item__link" href="#/?id=${id}&name=${nameUrl}">Ver Producto</a>
            </div>
        </div>
    `
    return contenedor
}