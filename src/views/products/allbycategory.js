import { products } from "../../controllers/products-manage.js";
import { ContactFooter } from "../contactfooter.js";

function RenderProductByCategory(category){
    const productosByCategory = products.getAllProductsByCategory()
    const currentCategory = category.substring(2) // Obtener desde la tercera posición en adelante, asi eliminar "#/" del string

    if(productosByCategory.hasOwnProperty(currentCategory)){
        const arrayWithProducts = productosByCategory[currentCategory]
        arrayWithProducts.forEach(product => {
            const { name, imageUrl, price, description, id, category} = product

            const nameUrl = name
                            .normalize("NFD") // utilizamos la función normalize() con el parámetro "NFD" para descomponer los caracteres a su forma de combinación de caracteres diacríticos. Esto nos permite separar los caracteres con tilde en dos partes: el carácter base y el diacrítico.
                            .replace(/[\u0300-\u036f]/g, "") // Luego, utilizamos la expresión regular /[\u0300-\u036f]/g para coincidir con todos los caracteres diacríticos (que incluyen las tildes) y el método replace() para eliminarlos.
                            .split(/\W+/) // la expresión regular \W+ se utiliza como argumento para el método split(). Esta expresión regular coincide con cualquier carácter que no sea una letra minúscula, mayúscula o número. Al dividir la cadena name utilizando \W+, se eliminan todos los caracteres no deseados y se obtiene un array con las partes relevantes.
                            .join("-") // utilizamos el método join() para unir las partes del array con un guion (-) como delimitador,
                            .toLowerCase()
                            .replace(/^[^a-zA-Z0-9]+/, ''); // elimina cualquier secuencia de caracteres que no sean letras o números al comienzo de la cadena.

            const father = document.getElementById("bycategory")
            const article = document.createElement("article")
            article.classList.add("bycategory__item")
            article.innerHTML = `
                <div class="bycategory__img__container">
                    <img class="bycategory__img" src="${imageUrl}" alt=""></div>
                <div class="bycategory__info">
                    <h3 class="bycategory__title">${name}</h3>
                    <p class="bycategory__price">${price}</p>
                    <a class="bycategory__link" href="#/?id=${id}&name=${nameUrl}">Ver Producto</a>
                </div>
            `
            father.appendChild(article)

        });
    }
}

export function ProductsByCategory(category){
    const root = document.getElementById("root")
    root.innerHTML = `
    
    <section class="bycategory">
        <div class="bycategory__header">
            <h2 class="bycategory__title__category">Todos los productos</h2>
        </div>
        <div class="bycategory__container" id="bycategory"></div>
    </section>
    
    `
    RenderProductByCategory(category)
    ContactFooter()
}