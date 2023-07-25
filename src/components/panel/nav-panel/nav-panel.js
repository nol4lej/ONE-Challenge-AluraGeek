export class NavPanel extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleAdmin()
    }

    render(){
        this.innerHTML = `
            <nav class="nav__panel">
                <a href="#/panel" class="nav__panel__btn">Perfil</a>
                <a href="#/panel/administrar" id="admin-nav" class="nav__panel__btn">Administrar productos</a>
            </nav>
            <div id="main-panel"></div>
        `
    }

    handleAdmin(){
        const btnAdmin = this.querySelector("#admin-nav")
        const container = this.querySelector("#main-panel")
        btnAdmin.addEventListener("click", (event) => {
            container.innerHTML = `
                <admin-products></admin-products>
        `
        })
    }

}

customElements.define("nav-panel", NavPanel)