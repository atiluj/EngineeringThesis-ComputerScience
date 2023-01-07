import './Nav.css';
import * as React from 'react';

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

export default function() {
    const windowWidth = useWindowWidth();
    const scrollY = useScrollY();

    //TODO: drop-down menu
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

    return <nav id="navbar" className="gradient">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <div id="nav-wrapper-left">
               
                <a href="index.html" style={aStyle} className="menu-button nav-button">Cześć!</a>
            
                <a href="teoria.html" style={aStyle} className="menu-button nav-button">Teoria</a>
        
                <a href="excel.html" style={aStyle} className="menu-button nav-button">Excel</a>
            
                <a href="access.html" style={aStyle} className="menu-button nav-button">Access</a>
            
                <a href="python.html" style={aStyle} className="menu-button nav-button">Python</a>
            
                <a href="exercise.html" style={aStyle} className="menu-button nav-button">Zadania</a>
            </div>
            <div id="nav-wrapper-right">
                <a href="interpreter.html" style={aStyle} className="menu-button nav-button">Interpreter python</a>

                <label className="switch" >
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                </label>

                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
        
                    
            </div>
        
    </nav>;
}