import styles from './ExerciseSet.module.css';
import { Link } from "react-router-dom";

function ExerciseSet() {
    return <>
        <main className={styles.main}>
            <div className={styles.exercises_title}>
                <h1>ZADANIA Z KURSU PYTHON</h1>
                {/* <p>W tym dziale są zdania, które znajdziesz również w kursie. Posiadają one rozwiązania wzrocowe, które mają
                    za zadanie wprowadzić Cię w programowanie.</p> */}
            </div>

            <div className={`${styles.exercises_list} ${styles.python_list}`}>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Zmienne</div>
                    {/* to nie będzie działać bo musisz dać poprawną ścieżek do pliku to="/exercise/0" */}
                    {/* <Link to="/exercise/0" className={`${styles.list_element} ${styles.number_element}`} >1</Link> */}
                    <div className={`${styles.list_element} ${styles.number_element}`}>1</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>2</div>
                </div>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Struktury danych</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>1</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>2</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>3</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>4</div>
                </div>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Napisy</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>1</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>2</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>3</div>
                </div>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Instrukcje warunkowe</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>1</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>2</div>
                </div>
            </div>
            <div className={styles.exercises_title}>
                <h1>POZOSTAŁE ZADANIA</h1>
                {/* <p>Przerobienie ponizszych zadań jest gwarantem opanowania Pythona oraz uzyskania dobrego wyniku na maturze.
                    na podstawie matur coś tam blabla bla.
                </p> */}
            </div>

            <div className={styles.category}>DZIAŁANIA NA LICZBACH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/6" className={`${styles.list_element}`}>MATURA 2017 ZAD. 1</Link>
                <Link to="/exercise/7" className={`${styles.list_element}`}>MATURA 2017 ZAD. 2</Link>
                <Link to="/exercise/8" className={`${styles.list_element}`}>MATURA 2017 ZAD. 3</Link>
                <Link to="/exercise/9" className={`${styles.list_element}`}>MATURA 2017 ZAD. 4</Link>
            </div>

            <div className={styles.category}>DZIAŁANIA NA STRINGACH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/10" className={`${styles.list_element}`}>MATURA 2018 zad. 1</Link>
                <Link to="/exercise/11" className={`${styles.list_element}`}>MATURA 2018 zad. 2</Link>
                <Link to="/exercise/12" className={`${styles.list_element}`}>MATURA 2018 zad. 3</Link>
            </div>
            <div className={styles.category}>DZIAŁANIA NA LICZBACH BINARNYCH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/0" className={`${styles.list_element}`}>MATURA 2015 ZAD. 1</Link>
                <Link to="/exercise/1" className={`${styles.list_element}`}>MATURA 2015 ZAD. 2</Link>
                <Link to="/exercise/2" className={`${styles.list_element}`}>MATURA 2015 ZAD. 3</Link>
            </div>
            <div className={styles.category}>SZYFROWANIE</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/3" className={`${styles.list_element}`}>MATURA 2016 zad. 1</Link>
                <Link to="/exercise/4" className={`${styles.list_element}`}>MATURA 2016 zad. 2</Link>
                <Link to="/exercise/5" className={`${styles.list_element}`}>MATURA 2016 zad. 3</Link>
            </div>

        </main>
    </>;
}

export default ExerciseSet;