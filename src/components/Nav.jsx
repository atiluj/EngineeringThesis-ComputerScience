import styles from './Nav.module.css';
import '../style.css'; 

import React, {useState, useEffect} from 'react';
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
    }, [darkMode])

    return [darkMode, setDarkMode]
}

function Nav() {
    let padding, fontSize;
    const aStyle = {padding, fontSize};

    const [darkMode, setDarkMode] = useDarkMode();

    function navBurger() {
        // TODO: refactor
        const x = document.getElementById("top_navbar");
        if (x.className === `gradient ${styles.navbar}`) {
            console.log("elo elo");
            x.className += ` ${styles.responsive}`;
        } else {
            console.log("zenujace"); 
            x.className = `gradient ${styles.navbar}`;
        }
    }

    const toggleMode = () => {
        setDarkMode((prev) => !prev);
    }

    return <>
        <nav id="top_navbar" className={`gradient ${styles.navbar}`}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <div id="nav_wrapper_left" className={styles.nav_wrapper_left}>
                
                    <Link to="/" style={aStyle} className={`menu_button ${styles.nav_button}`}>Cześć!</Link>
                
                    <Link to="/teoria" style={aStyle} className={`menu_button ${styles.nav_button}`}>Teoria</Link>
            
                    <Link to="/excel" style={aStyle} className={`menu_button ${styles.nav_button}`}>Excel</Link>
                
                    <Link to="/access" style={aStyle} className={`menu_button ${styles.nav_button}`}>Access</Link>
                
                    <Link to="/python" style={aStyle} className={`menu_button ${styles.nav_button}`}>Python</Link>
                
                    <Link to="/exercise" style={aStyle} className={`menu_button ${styles.nav_button}`}>Zadania</Link>
                </div>
                <div id="nav_wrapper_right" className={styles.nav_wrapper_right}>
                    <Link to="/interpreter" style={aStyle} className={`menu_button ${styles.nav_button}`}>Interpreter python</Link>

                    <label className={styles.switch} >
                            <input id="checkbox" type="checkbox" checked={darkMode} className={styles.checkbox} onChange={toggleMode}/>
                            <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>

                    <button className={styles.icon} onClick={navBurger}>
                        <MenuIcon className={styles.nav_burger}/>
                    </button> 
                </div>
            
        </nav>

        <Outlet />
    </>;
}

export default Nav;