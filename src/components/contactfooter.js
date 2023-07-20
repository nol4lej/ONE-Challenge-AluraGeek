export class ContactFooter extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="contact">
                <div class="links__container">
                    <div class="footer__logo">
                    </div>
                    <div class="footer__links">
                        <ul class="links__list">
                            <li class="link__item"><a href="#">Quiénes somos</a></li>
                            <li class="link__item"><a href="#">Políticas de privacidad</a></li>
                            <li class="link__item"><a href="#">Programa de fidelidad</a></li>
                            <li class="link__item"><a href="#">Nuestras tiendas</a></li>
                            <li class="link__item"><a href="#">Quiero ser franquiciado</a></li>
                            <li class="link__item"><a href="#">Anúncie aquí</a></li>
                        </ul>
                    </div>
                </div>
                <div class="form">
                    <h3 class="form__title">Hable con nosotros</h3>
                    <form action="" class="form__container">
                        <div class="input__container">
                            <label for="" class="input__title">Nombre</label>
                            <input type="text" name="" id="" class="input__name">
                        </div>
                        <textarea class="form__textarea" name="" id="" placeholder="Escribe tu mensaje"></textarea>
                        <button class="form__button" type="submit">Enviar mensaje</button>
                    </form>
                </div>
            </div>

            <footer class="footer">
                <h2 class="footer__title">Desarrollado por Nolasco Medina 2023</h2>
            </footer>
        `;
    }
}

customElements.define("contact-footer", ContactFooter)