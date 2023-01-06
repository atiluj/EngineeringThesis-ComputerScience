import './Exercise.css';

export default function () {
    return <>
        <main>
            <div className="exercises-title">
                <h1>ZADANIA Z KURSU PYTHON</h1>
                {/* <p>W tym dziale są zdania, które znajdziesz również w kursie. Posiadają one rozwiązania wzrocowe, które mają
                    za zadanie wprowadzić Cię w programowanie.</p> */}
            </div>

            <div className="exercises-list python-list">
                <div className="list-element-wrapper">
                    <div className="subject">Zmienne</div>
                    <div className="list-element number-element">1</div>
                    <div className="list-element number-element">2</div>
                    <div className="list-element number-element">3</div>
                </div>
                <div className="list-element-wrapper">
                    <div className="subject">Struktury danych</div>
                    <div className="list-element number-element">1</div>
                    <div className="list-element number-element">2</div>
                    <div className="list-element number-element">3</div>
                    <div className="list-element number-element">4</div>
                </div>
                <div className="list-element-wrapper">
                    <div className="subject">Napisy</div>
                    <div className="list-element number-element">1</div>
                    <div className="list-element number-element">2</div>
                    <div className="list-element number-element">3</div>
                </div>
                <div className="list-element-wrapper">
                    <div className="subject">Instrukcje warunkowe</div>
                    <div className="list-element number-element">1</div>
                    <div className="list-element number-element">2</div>
                </div>
            </div>
            <div className="exercises-title">
                <h1>POZSOTAŁE ZADANIA</h1>
                {/* <p>Przerobienie ponizszych zadań jest gwarantem opanowania Pythona oraz uzyskania dobrego wyniku na maturze.
                    na podstawie matur coś tam blabla bla.
                </p> */}
            </div>

            <div className="exercises-list">
                <div className="list-element"><p>Matura 2022 z.1</p></div>
                <div className="list-element"><p>Matura 2022 z.2</p></div>
                <div className="list-element"><p>Matura 2021 z.1</p></div>
                <div className="list-element"><p>Matura 2021 z.1</p></div>
                <div className="list-element"><p>Matura 2020 z.1</p></div>
                <div className="list-element"><p>Matura 2020 z.1</p></div>
                <div className="list-element"><p>Matura 2019 z.1</p></div>
                <div className="list-element"><p>Matura 2019 z.1</p></div>
                <div className="list-element"><p>Matura 2018 z.1</p></div>
                <div className="list-element"><p>Matura 2018 z.1</p></div>
                <div className="list-element"><p>Matura 2017 z.1</p></div>
                <div className="list-element"><p>Matura 2017 z.1</p></div>
                <div className="list-element"><p>Matura 2016 z.1</p></div>
                <div className="list-element"><p>Matura 2016 z.1</p></div>
                <div className="list-element"><p>Matura 2018 z.1</p></div>
                <div className="list-element"><p>Matura 2018 z.1</p></div>
                <div className="list-element"><p>Matura 2017 z.1</p></div>
                <div className="list-element"><p>Matura 2017 z.1</p></div>
                <div className="list-element"><p>Matura 2016 z.1</p></div>
                <div className="list-element"><p>Matura 2016 z.1</p></div>
            </div>

            <div className="category">SORTOWANIE</div>
            <div className="exercises-list">
                <div className="list-element"><p>SORTOWANIE Z.1</p></div>
                <div className="list-element"><p>SORTOWANIE Z.2</p></div>
                <div className="list-element"><p>SORTOWANIE Z.3</p></div>
                <div className="list-element"><p>SORTOWANIE Z.4</p></div>
                <div className="list-element"><p>SORTOWANIE Z.5</p></div>
                <div className="list-element"><p>SORTOWANIE Z.6</p></div>
                <div className="list-element"><p>SORTOWANIE Z.7</p></div>
                <div className="list-element"><p>SORTOWANIE Z.8</p></div>
            </div>

            <div className="category">SZYFROWANIE</div>
            <div className="exercises-list">
                <div className="list-element"><p>SZYFROWANIE Z.1</p></div>
                <div className="list-element"><p>SZYFROWANIE Z.2</p></div>
                <div className="list-element"><p>SZYFROWANIE Z.3</p></div>
                <div className="list-element"><p>SZYFROWANIE Z.4</p></div>
                <div className="list-element"><p>SZYFROWANIE Z.5</p></div>
            </div>

        </main>
    </>;
}