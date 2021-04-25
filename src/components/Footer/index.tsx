import styles from './styles.module.scss';

import createdbyCorebiz from '../../assets/created-by-corebiz.svg';
import poweredVtex from '../../assets/powered-vtex.svg';
import emailIcon from '../../assets/email-icon.svg';
import supportIcon from '../../assets/support-icon.svg';

const Header = () => {
    return(
        <footer>
            <div className={styles.footerContent}>

                <section className={styles.location}>
                    <h2>Localização</h2>

                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 <br />

                        Alphavile SP <br />

                        brasil@corebiz.ag <br />

                        +55 11 3090 1039
                    </p>
                </section>

                <section className={styles.support}>
                    <button>
                        <img src={emailIcon} alt="Enviar email"/>
                        <span>Entre em contato</span>
                    </button>
                    <button>
                        <img src={supportIcon} alt="Consultor online"/>
                        <span>Fale com o nosso consultor online</span>
                    </button>
                </section>

                <section className={styles.copyright}>
                    <img src={createdbyCorebiz} alt="Criado por Corebiz"/>
                    <img src={poweredVtex} alt="Plataforma Vtex"/>
                </section>
            </div>
        </footer>
    )
}

export default Header;