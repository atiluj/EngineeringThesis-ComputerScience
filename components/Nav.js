import './Nav.css';

export default function() {
    return <nav id="navbar">
        <ul>
            <li className="home"><a href="index.html" className="a">Cześć!</a></li>
            <li className="teoria"><a href="teoria.html" className="a">Teoria</a></li>
            {/* <li className="excel"><a href="excel.html" className="a">Excel</a></li>
            <li className="access"><a href="access.html" className="a">Access</a></li>
            <li className="python"><a href="python.html" className="a">Python</a></li> */}
            {/* <li className="kompilator"><a href="interpreter.html" className="a">Interpreter Python</a></li> */}
        </ul>
        <ul className="ul2">
            <li>
                <a href="#">LOGOWANIE</a>
            </li>
        </ul>
    </nav>;
}