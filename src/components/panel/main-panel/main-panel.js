export class MainPanel extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = ``
    }

}
customElements.define("main-panel", MainPanel)