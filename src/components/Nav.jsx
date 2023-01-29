import styles from './Nav.module.css'; // Do wywalenia
import '../style.css'; // Do wywalenia 

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
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

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

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

    return <React.Fragment>
            <CssBaseline />
            <HideOnScroll>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar>
                        <Toolbar sx={{
                            justifyContent: "space-between",
                            flexDirection: "row"
                            }}
                        >
                            <Stack direction="row" spacing={2}>
                                {tabs.map((tab) => (
                                    <Button component={Link} to={tab.link} variant="text">{tab.name}</Button>
                                ))}
                            </Stack>                  
                            <Stack direction="row" spacing={2}>
                                <Button component={Link} to="/interpreter" variant="text">Interpreter python</Button>
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
            </HideOnScroll>

        {/* <nav className={styles.navbar}>
            <div id="top_navbar" className={`gradient ${styles.navbar_sticky}`}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div id="nav_wrapper_left" className={styles.nav_wrapper_left}>
                    <Link to="/" className={`menu_button nav_button ${styles.nav_button}`}>Cześć!</Link>
                    <Link to="/teoria" className={`menu_button nav_button ${styles.nav_button}`}>Teoria</Link>
                    <Link to="/excel" className={`menu_button nav_button ${styles.nav_button}`}>Excel</Link>
                    <Link to="/access" className={`menu_button nav_button ${styles.nav_button}`}>Access</Link>
                    <Link to="/python" className={`menu_button nav_button ${styles.nav_button}`}>Python</Link>
                    <Link to="/exercise" className={`menu_button nav_button ${styles.nav_button}`}>Zadania</Link>
                </div>
                <div id="nav_wrapper_right" className={styles.nav_wrapper_right}>
                    <Link to="/interpreter" className={`menu_button nav_button ${styles.nav_button}`}>Interpreter python</Link>
                    <label className={styles.switch} >
                        <input id="checkbox" type="checkbox" checked={darkMode} className={styles.checkbox} onChange={toggleMode} />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                    <button className={styles.icon} onClick={navBurger}>
                        <MenuIcon className={styles.nav_burger} />
                    </button>
                </div>
            </div>
        </nav> */}
    </React.Fragment>;
}

export default Nav;