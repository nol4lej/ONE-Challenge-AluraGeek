export class Loader extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <div class="loader__container">
            <div class="loader"></div>
        </div>
            
        `
    }

}

customElements.define("loader-component", Loader)