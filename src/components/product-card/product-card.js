export class ProductCard extends HTMLElement{

    constructor(){
        super();
    };

    connectedCallback(){
        this.render();
    };

    render(){
        const src = this.getAttribute('src');
        const title = this.getAttribute('title');
        const price = this.getAttribute('price');
        const link = this.getAttribute('link');

        this.innerHTML = `       
            <img class="card__img" src="${src}" alt="${title}">
            <h3 class="card__titile">${title}</h3>
            <p class="card__price">${price}</p>
            <a class="card__link" href="#/id=${link}">Ver producto</a>
        `
    }

    get title() {
        return this.getAttribute('title');
    }
    set title(value) {
        this.setAttribute('title', value);
    }

    get src() {
        return this.getAttribute('src');
    }
    set src(value) {
        this.setAttribute('src', value);
    }

    get price() {
        return this.getAttribute('price');
    }
    set price(value) {
        this.setAttribute('price', value);
    }

    get link() {
        return this.getAttribute('link');
    }
    set link(value) {
        this.setAttribute('link', value);
    }

};

customElements.define("product-card", ProductCard)