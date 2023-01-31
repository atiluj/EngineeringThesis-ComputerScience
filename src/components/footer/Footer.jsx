import styles from './Footer.module.css';
import LogoFooter from "jsx:../../img/logo_footer_black_01.svg";

function Footer() {
    return <>
        <div className={`separator`}></div>
        <footer className={styles.footer}>
            <h4>Hej!</h4> 
            <p>Kontakt do twórców tej strony znajdziesz na stronie głównej w zakładce AUTORZY STRONY. 
            Możesz też napisać do nas maila na adres: platforma.nuwis@gmail.com</p><br/> 
            <p>Jeśli uważasz, że nasza praca Ci pomogła możesz wesprzeć nas w utrzymaniu tej strony kupując nam kawkę. Bardzo to docenimy!</p>
            <div className={styles.coffee_link}>
                <a href="https://buycoffee.to/nuwis" target="_blank"><img src={new URL('https://buycoffee.to/btn/buycoffeeto-btn-primary-outline.svg', import.meta.url)} alt="Postaw mi kawę na buycoffee.to" /></a>
            </div>
            
            <div className={`${styles.logo_footer} ${styles.logo_img}`}>
                <LogoFooter className={`logo_img`}/>
            </div>
        </footer>
    </>;
}

export default Footer;