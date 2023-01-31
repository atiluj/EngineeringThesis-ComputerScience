import styles from './Nav.module.css';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
// import { padding } from '@mui/system';

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

function resizeNav() {
    const windowWidth = useWindowWidth();
    const scrollY = useScrollY();

    if (windowWidth > 1200) {
        if (scrollY > 80) {
            padding = "10px 17px";
            fontSize = "16px";
        } else {
            padding = "15px 23px";
            fontSize = "18px";
        }
    } else if (windowWidth > 1000) {
        if (scrollY > 80) {
            padding = "12px 17px";
            fontSize = "14px";
        } else {
            padding = "13px 17px";
            fontSize = "16px";
        }
    } else {
        if (scrollY > 80) {
            padding = "12px 10px";
            fontSize = "14px";
        } else {
            padding = "14px 10px";
            fontSize = "16px";
        }
    }
    return padding, fontSize;
}

function Nav() {
    const [darkMode, setDarkMode] = useDarkMode();
    const tabs = [
        {name: "Cześć!", link: "/"},
        {name: "Teoria", link: "/teoria"},
        {name: "Excel", link: "/excel"},
        {name: "Access", link: "/access"},
        {name: "Python", link: "/python"},
        {name: "Zadania", link: "/exercise"},
    ];

    let padding, fontSize = resizeNav();
    const aStyle = { padding, fontSize };

    function navBurger() {
        const navBar = document.getElementById("top_navbar");
        if (navBar.className === `gradient ${styles.navbar_sticky}`) {
            navBar.className += ` ${styles.responsive}`;
        } else {
            navBar.className = `gradient ${styles.navbar_sticky}`;
        }
    }

    function buttonClick() {
        const navBar = document.getElementById("top_navbar");
        navBar.className = `gradient ${styles.navbar_sticky}`;
    }

    const toggleMode = () => {
        setDarkMode((prev) => !prev);
    }

    return (
        <Box className={styles.navbar}>
            <AppBar sx={{boxShadow: 'none'}}>
                <Toolbar variant="dense" id="top_navbar" className={`gradient ${styles.navbar_sticky}`}>
                    <Stack direction="row" id="nav_wrapper_left" className={styles.nav_wrapper_left}>
                        {tabs.map((tab) => (
                            <Link to={tab.link} style={aStyle} className={`menu_button nav_button ${styles.nav_button}`} onClick={buttonClick}>{tab.name}</Link>
                        ))}
                    </Stack>                  
                    <Stack direction="row" id="nav_wrapper_right" className={styles.nav_wrapper_right}>
                        <Link to="/interpreter" style={aStyle} className={`menu_button nav_button ${styles.nav_button}`} onClick={buttonClick}>
                            Interpreter python
                        </Link>
                        <label className={styles.switch} >
                            <input id="checkbox" type="checkbox" checked={darkMode} className={styles.checkbox} onChange={toggleMode} />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                        <button className={styles.icon} onClick={navBurger}>
                            <MenuIcon className={styles.nav_burger} />
                        </button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav;