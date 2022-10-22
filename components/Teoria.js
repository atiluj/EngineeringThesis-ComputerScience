import './Teoria.css';
import * as React from 'react';
import hljs from 'highlight.js';
import '../node_modules/highlight.js/styles/dark.css';

import { Chapter } from "./functions.js";

import Ch00s00 from '../lessons/teoria/wskazowki.mdx';
import Ch01s01 from '../lessons/teoria/komputer-i-jego-czesci.mdx';

let contentsFor = {};
contentsFor[[0, 0]] = <Ch00s00 />;
contentsFor[[1, 1]] = <Ch01s01 />;
contentsFor[[1, 2]] = null;

function Contents(props) {
    const contents = contentsFor[[props.chapter, props.subchapter]];
    React.useEffect(() => { hljs.highlightAll(); }, [contents]); //śmieszna funkcja do skanownaia stronki i kolorowania kodu
    return <article className="second">{contents}</article>;
}

export default function () {
    const [chapter, setChapter] = React.useState(0);
    const [subchapter, setSubchapter] = React.useState(0);

    function onclick(ch, subch) {
        return () => {
            setChapter(ch);
            setSubchapter(subch);
        };
    }

    return <main>
        <div className="contents">
            <div className="title ft">
                <a>TEORIA</a>
            </div>
            <div className="cont-title">
                <a>SPIS TREŚCI</a>
            </div>

            <div className="cont">
                <Chapter title="0. Wskazówki" onClick={onclick(0, 0)}></Chapter>

                <Chapter title="1. Komputer">
                    <a href="#" className="subtopic" onClick={onclick(1, 1)}>Komputer i jego części</a>
                    <a href="#" className="subtopic" onClick={onclick(1, 2)}>System operacyjny</a>
                </Chapter>

                <Chapter title="2. Systemy liczbowe">
                    <a href="#" className="subtopic" onClick={onclick(2, 1)}>System dwójkowy</a>
                    <a href="#" className="subtopic">System ósemkowy</a>
                    <a href="#" className="subtopic">System szesnastkowy</a>
                </Chapter>

                <Chapter title="3. Konwersja liczb">
                    <a href="#" className="subtopic">Dwójkowy - Ósemkowy</a>
                    <a href="#" className="subtopic">Dwójkowy - Szesnastkowy</a>
                    <a href="#" className="subtopic">Ósemkowy - Szesnastkowy</a>
                </Chapter>

                <Chapter title="4. Sieci komputerowe">
                    <a href="#" className="subtopic">Terminologia</a>
                    <a href="#" className="subtopic">Topologia sieci</a>
                    <a href="#" className="subtopic">Protokół IP</a>
                    <a href="#" className="subtopic">Adresy IP</a>
                    <a href="#" className="subtopic">Maski podsieci</a>
                    <a href="#" className="subtopic">Adresy sieci</a>
                </Chapter>

                <Chapter title="4. Grafika komputerowa">
                    <a href="#" className="subtopic">Podstawowe modele barw</a>
                    <a href="#" className="subtopic">Własnośći grafiki rastrowej i wektorowej</a>
                    <a href="#" className="subtopic">Podstawowe formaty plików graficznych</a>
                </Chapter>

                <Chapter title="5. Zagadnienia prawne">
                    <a href="#" className="subtopic">Zagadnienia przestępczości komputerowej</a>
                    <a href="#" className="subtopic">Licencje</a>
                    <a href="#" className="subtopic">Normy prawe</a>
                </Chapter>

                <Chapter title="6. Pseudokod">
                <a href="#" className="subtopic">Schematy blokowe</a>
                <a href="#" className="subtopic">Lista kroków</a>
                    <a href="#" className="subtopic">Za pomocą Python</a>
                </Chapter>

                <Chapter title="7. Złożoność">
                    <a href="#" className="subtopic">Złożoność obliczeniowa</a>
                    <a href="#" className="subtopic">Złożoność pamięciowa</a>
                    <a href="#" className="subtopic">Własnośći algorytmów</a>
                </Chapter>

                <Chapter title="8. Błędy">
                    <a href="#" className="subtopic">Błędy numeryczne obliczeń</a>
                    <a href="#" className="subtopic">Błąd względny i bezwzględny</a>
                </Chapter>

                <Chapter title="9. Algorytmy">
                <a href="#" className="subtopic">Odwrotna notacja polska</a>

                </Chapter>

            </div>
            {/* <!-- REKLAMA --> */}
        </div>

        <div className="main">
            <div className="title">
                <a>TEORIA</a>
            </div>
            <Contents chapter={chapter} subchapter={subchapter} />
        </div>
    </main>;
}