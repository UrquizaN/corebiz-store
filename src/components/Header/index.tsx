import styles from './styles.module.scss';

import corebizLogo from '../../assets/corebiz-logo.svg';
import userIcon from '../../assets/user-icon.svg';
import minicartIcon from '../../assets/minicart-icon.svg';

const Header = () => {
    return(
        <header>
            <div className={styles.headerContainer}>
                <span className={styles.menuMobile} />
                <img src={corebizLogo} className={styles.logo} alt="Corebiz logo"/>

                <div className={styles.searchBar}>
                    <input type="text" placeholder="O que está procurando?" />
                </div>

                <div className={styles.headerActions}>
                    <div className={styles.user}>
                        <img src={userIcon} alt="Usuário"/>
                        <span>Minha Conta</span>
                    </div>
                    <img src={minicartIcon} className={styles.miniCart} alt="Carrinho" />
                </div>
            </div>
        </header>
    )
}

export default Header;