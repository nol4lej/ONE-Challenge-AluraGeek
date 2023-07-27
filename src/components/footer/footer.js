import logo from '../../img/logo.png';

class Footer extends HTMLElement{

    constructor(){
        super()
    };

    connectedCallback(){
        this.render()
    }

    async render(){

        this.innerHTML = `
            <div class="footer__contact-links">
                <div class="footer__links-logo">
                    <div class="footer__logo">
                        <img src="${logo}" alt="">
                    </div>
                    <div class="footer__links">
                        <ul class="footer__list">
                            <li><a href="#">Quienes somos</a></li>
                            <li><a href="#">Políticas de privacidad</a></li>
                            <li><a href="#">Programa de fidelidad</a></li>
                            <li><a href="#">Nuestras tiendas</a></li>
                            <li><a href="#">Quiero ser franquiciado</a></li>
                            <li><a href="#">Anúncie aquí</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__form__container">
                    <h2 class="footer__form__title">Hable con nosotros</h2>
                    <form class="footer__form">
                        <div class="form__name">
                            <label for="" class="label__name">Nombre</label>
                            <input type="text" class="input__name">
                        </div>
                        <div class="form__textarea">
                            <textarea class="input__textarea" placeholder="Escribe tu mensaje" cols="30" rows="3"></textarea>
                        </div>
                        <button type="submit" class="footer__btn">Enviar mensaje</button>
                    </form>
                </div>
            </div>       
            <div class="footer__footer">
                <p class="footer__text">Desarrollado por Nolasco Medina 2023</p>
            </div>
        `

    }

}

customElements.define("footer-component", Footer)