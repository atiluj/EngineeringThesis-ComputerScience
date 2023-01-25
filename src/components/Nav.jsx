import styles from './Nav.module.css';
import '../style.css';

import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { style } from '@mui/system';

const DARK_MODE_KEY = 'dark-mode';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
        setDarkMode(darkMode);
    }, [])

    useEffect(() => {
        localStorage.setItem(DARK_MODE_KEY, darkMode);
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        window.postMessage({ darkMode }, window.location.origin);
    }, [darkMode])

    return [darkMode, setDarkMode]
}

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => { //aktualizacja pobranej szerokości strony
        // to sie odpali przy starcie
        const handle = () => setWindowWidth(window.innerWidth); //ona aktualizuje nasza zmienną
        window.addEventListener('resize', handle); // nie wywołujmey jej od razu tylko podczepiamy pod resize, czyli ona będzie wywoływana przy resizie na szerkości okna
        return () => {
            // to sie odpali na koncu
            window.removeEventListener('resize', handle);
        };
    }, [
        // kiedy sie uruchomic ponownie
    ]);
    return windowWidth;
}

function useScrollY() {
    const [scrollY, setScrollY] = React.useState(window.scrollY);
    React.useEffect(() => {
        const handle = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handle);
        return () => {
            window.removeEventListener('scroll', handle);
        };
    }, []);
    return scrollY;
}

function Nav() {
    let padding, fontSize;
    const windowWidth = useWindowWidth();
    const scrollY = useScrollY();
    const [darkMode, setDarkMode] = useDarkMode();

    if (windowWidth > 1200) {
        if (scrollY > 80) {
            padding = "7px 17px";
            fontSize = "16px";
        } else {
            padding = "15px 23px";
            fontSize = "18px";
        }
    } else if (windowWidth > 1000) {
        if (scrollY > 80) {
            padding = "9px 17px";
            fontSize = "14px";
        } else {
            padding = "13px 17px";
            fontSize = "16px";
        }
    } else if (windowWidth > 790) {
        if (scrollY > 80) {
            padding = "11px 10px";
            fontSize = "14px";
        } else {
            padding = "14px 10px";
            fontSize = "16px";
        }
    }

    const aStyle = { padding, fontSize };

    function navBurger() {
        // TODO: refactor
        const x = document.getElementById("top_navbar");
        if (x.className === `gradient ${styles.navbar_sticky}`) {
            x.className += ` ${styles.responsive}`;
        } else {
            x.className = `gradient ${styles.navbar_sticky}`;
        }
    }

    const toggleMode = () => {
        setDarkMode((prev) => !prev);
    }

    return <>
        <nav className={styles.navbar}>
            <div id="top_navbar" className={`gradient ${styles.navbar_sticky}`}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div id="nav_wrapper_left" className={styles.nav_wrapper_left}>

                    <Link to="/" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Cześć!</Link>

                    <Link to="/teoria" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Teoria</Link>

                    <Link to="/excel" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Excel</Link>

                    <Link to="/access" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Access</Link>

                    <Link to="/python" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Python</Link>

                    <Link to="/exercise" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Zadania</Link>
                </div>
                <div id="nav_wrapper_right" className={styles.nav_wrapper_right}>
                    <Link to="/interpreter" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`}>Interpreter python</Link>

                    <label className={styles.switch} >
                        <input id="checkbox" type="checkbox" checked={darkMode} className={styles.checkbox} onChange={toggleMode} />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>

                    <button className={styles.icon} onClick={navBurger}>
                        <MenuIcon className={styles.nav_burger} />
                    </button>
                </div>
            </div>

        </nav>

        <Outlet />
    </>;
}

export default Nav;