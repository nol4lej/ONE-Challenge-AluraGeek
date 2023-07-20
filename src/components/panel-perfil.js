export class PerfilPanel extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <section class="panel">
            asdasjkdsahkjsdhasksahdklsajdklasjdasjsak
        </section>
    `
    }

}

customElements.define("perfil-panel", PerfilPanel)