import styles from './Footer.module.css';
import '../style.css';
import CoffeeIcon from '@mui/icons-material/Coffee';

function Footer() {
    return  <>
        <div className={`separator`}></div>
        <footer className={styles.footer}>
            <p>Hej! <br /> Kontakt do twórców tej strony znajdziesz na stronie głównej w zakładce AUTORZY STRONY.</p>
            <p>Jeśli uważasz, że nasza praca Ci pomogła możesz nas wesprzeć kupując nam kawkę. Bardzo to docenimy!</p>
            <div className={styles.coffee_link}>
                <a href="">TUTAJ ZNAJDZIESZ LINK DO PROFILU <CoffeeIcon /></a>
            </div>
            <div className={styles.logo_footer}>
                <img src={new URL('../img/logo5.png', import.meta.url)} alt="logo" className={`logo_img`} />
            </div>
        </footer>
    </>;
}

export default Footer;