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

    let padding, fontSize;
    if (windowWidth > 1200) {
        if (scrollY > 80) {
            padding = "9px 17px";
            fontSize = "14px";
        } else {
            padding = "19px 23px";
            fontSize = "16px";
        }
    } else if (windowWidth > 1000) {
        if (scrollY > 80) {
            padding = "9px 17px";
            fontSize = "14px";
        } else {
            padding = "15px 17px";
            fontSize = "16px";
        }
    } else if (windowWidth > 810) {
        if (scrollY > 80) {
            padding = "12px 10px";
            fontSize = "12px";
        } else {
            padding = "15px 10px";
            fontSize = "14px";
        }
    }

    const aStyle = {padding, fontSize};

    return <nav id="navbar">
        <ul>
            <li className="home"><a href="index.html" style={aStyle}>Cześć!</a></li>
            <li className="teoria"><a href="teoria.html" style={aStyle}>Teoria</a></li>
            <li className="excel"><a href="excel.html" style={aStyle}>Excel</a></li>
            <li className="access"><a href="access.html" style={aStyle}>Access</a></li>
            <li className="python"><a href="python.html" style={aStyle}>Python</a></li>
            {/* <li className="kompilator"><a href="interpreter.html" style={aStyle}>Interpreter Python</a></li> */}
        </ul>
        <ul className="ul2">
            <li>
                <a href="#" style={aStyle}>LOGOWANIE</a>
            </li>
        </ul>
    </nav>;
}