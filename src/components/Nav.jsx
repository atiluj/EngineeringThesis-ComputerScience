import styles from './Nav.module.css';
import '../style.css'; 

import * as React from 'react';
import { Outlet, Link } from "react-router-dom";

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
    const windowWidth = useWindowWidth();
    const scrollY = useScrollY();

    //TODO: drop_down menu
    function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }
    //

    let padding, fontSize;
    // if (windowWidth > 1200) {
    //     if (scrollY > 80) {
    //         padding = "7px 17px";
    //         fontSize = "20px";
    //     } else {
    //         padding = "16px 23px";
    //         fontSize = "18px";
    //     }
    // } else if (windowWidth > 1000) {
    //     if (scrollY > 80) {
    //         padding = "9px 17px";
    //         fontSize = "14px";
    //     } else {
    //         padding = "13px 17px";
    //         fontSize = "18px";
    //     }
    // } else if (windowWidth > 810) {
    //     if (scrollY > 80) {
    //         padding = "12px 10px";
    //         fontSize = "12px";
    //     } else {
    //         padding = "15px 10px";
    //         fontSize = "14px";
    //     }
    // }

    const aStyle = {padding, fontSize};

    return <>
        <nav id="navbar" className={`gradient ${styles.navbar}`}>

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
                            <input type="checkbox" className={styles.checkbox}/>
                            <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>

                    <a className={styles.icon} onClick={myFunction}>
                        <i className={`${styles.fa} ${styles.fa_bars}`}></i>
                    </a>    
                </div>
            
        </nav>

        <Outlet />
    </>;
}

export default Nav;