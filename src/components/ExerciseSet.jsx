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
                <Link to="/exercise/6" className={`${styles.list_element}`}><pre>MATURA <b>2017</b> ZAD. 1</pre></Link>
                <Link to="/exercise/7" className={`${styles.list_element}`}><pre>MATURA <b>2017</b> ZAD. 2</pre></Link>
                <Link to="/exercise/8" className={`${styles.list_element}`}><pre>MATURA <b>2017</b> ZAD. 3</pre></Link>
                <Link to="/exercise/9" className={`${styles.list_element}`}><pre>MATURA <b>2017</b> ZAD. 4</pre></Link>
                <Link to="/exercise/13" className={`${styles.list_element}`}><pre>MATURA <b>2019</b> ZAD. 1</pre></Link>
                <Link to="/exercise/14" className={`${styles.list_element}`}><pre>MATURA <b>2019</b> ZAD. 2</pre></Link>
                <Link to="/exercise/15" className={`${styles.list_element}`}><pre>MATURA <b>2019</b> ZAD. 3</pre></Link>
                <Link to="/exercise/16" className={`${styles.list_element}`}><pre>MATURA <b>2020</b> ZAD. 1</pre></Link>
                <Link to="/exercise/23" className={`${styles.list_element}`}><pre>MATURA <b>2022</b> ZAD. 1</pre></Link>
                <Link to="/exercise/24" className={`${styles.list_element}`}><pre>MATURA <b>2022</b> ZAD. 2</pre></Link>
                <Link to="/exercise/25" className={`${styles.list_element}`}><pre>MATURA <b>2022</b> ZAD. 3</pre></Link>
                <Link to="/exercise/26" className={`${styles.list_element}`}><pre>MATURA <b>2023</b> ZAD. 1</pre></Link>
            </div>

            <div className={styles.category}>DZIAŁANIA NA STRINGACH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/10" className={`${styles.list_element}`}><pre>MATURA <b>2018</b> ZAD. 1</pre></Link>
                <Link to="/exercise/11" className={`${styles.list_element}`}><pre>MATURA <b>2018</b> ZAD. 2</pre></Link>
                <Link to="/exercise/12" className={`${styles.list_element}`}><pre>MATURA <b>2018</b> ZAD. 3</pre></Link>
                <Link to="/exercise/17" className={`${styles.list_element}`}><pre>MATURA <b>2020</b> ZAD. 2</pre></Link>
                <Link to="/exercise/18" className={`${styles.list_element}`}><pre>MATURA <b>2020</b> ZAD. 3</pre></Link>
                <Link to="/exercise/19" className={`${styles.list_element}`}><pre>MATURA <b>2021</b> ZAD. 1</pre></Link>
                <Link to="/exercise/20" className={`${styles.list_element}`}><pre>MATURA <b>2021</b> ZAD. 2</pre></Link>
                <Link to="/exercise/21" className={`${styles.list_element}`}><pre>MATURA <b>2021</b> ZAD. 3</pre></Link>
                <Link to="/exercise/22" className={`${styles.list_element}`}><pre>MATURA <b>2021</b> ZAD. 4</pre></Link>

            </div>
            <div className={styles.category}>DZIAŁANIA NA LICZBACH BINARNYCH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/0" className={`${styles.list_element}`}><pre>MATURA <b>2015</b> ZAD. 1</pre></Link>
                <Link to="/exercise/1" className={`${styles.list_element}`}><pre>MATURA <b>2015</b> ZAD. 2</pre></Link>
                <Link to="/exercise/2" className={`${styles.list_element}`}><pre>MATURA <b>2015</b> ZAD. 3</pre></Link>
            </div>
            <div className={styles.category}>SZYFROWANIE</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/3" className={`${styles.list_element}`}><pre>MATURA <b>2016</b> ZAD. 1</pre></Link>
                <Link to="/exercise/4" className={`${styles.list_element}`}><pre>MATURA <b>2016</b> ZAD. 2</pre></Link>
                <Link to="/exercise/5" className={`${styles.list_element}`}><pre>MATURA <b>2016</b> ZAD. 3</pre></Link>
            </div>

        </main>
    </>;
}

export default ExerciseSet;