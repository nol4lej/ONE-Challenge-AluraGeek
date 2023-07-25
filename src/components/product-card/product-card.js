export class ProductCard extends HTMLElement{

    constructor(){
        super();
    };

    connectedCallback(){
        this.render();
    };

    render() {
        const src = this.getAttribute('src');
        const title = this.getAttribute('title');
        const price = this.getAttribute('price');
        const link = this.getAttribute('link');
        const toManage = this.getAttribute('toManage');
        console.log(toManage);
    
        if (toManage === "yes") {
            this.innerHTML = `

                <div class="btns__img__container">
                    <div class="btns__container">
                        <a href="" class="delete__btn"><i class="material-icons">delete</i></a>
                        <a href="" class="edit__btn"><i class="material-icons">edit</i></a>
                    </div>
                    <div class="img__container">
                        <div class="overlay"></div>
                        <img class="card__img" src="${src}" alt="${title}">
                    </div>
                </div>
                <h3 class="card__titile">${title}</h3>
                <p class="card__price">${price}</p>
                <a class="card__link" href="#/id=${link}">Ver producto</a>
            `;
        } else {
            this.innerHTML = `
                <img class="card__img" src="${src}" alt="${title}">
                <h3 class="card__titile">${title}</h3>
                <p class="card__price">${price}</p>
                <a class="card__link" href="#/id=${link}">Ver producto</a>
            `;
        }
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

    get toManage() {
        return this.getAttribute('toManage');
    }
    set toManage(value) {
        this.setAttribute('toManage', value);
    }

};

customElements.define("product-card", ProductCard)