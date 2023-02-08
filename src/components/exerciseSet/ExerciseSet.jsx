import styles from './ExerciseSet.module.css';
import { Link } from "react-router-dom";

function ExerciseSet() {
    return <>
        <main className={styles.main}>
            {/* <div className={styles.exercises_title}>
                <h2>ZADANIA Z KURSU PYTHON</h2>
                {/* <p>W tym dziale są zdania, które znajdziesz również w kursie. Posiadają one rozwiązania wzrocowe, które mają
                    za zadanie wprowadzić Cię w programowanie.</p> 
            </div> */}

            {/* <div className={`${styles.exercises_list} ${styles.python_list}`}>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Zmienne</div>
                    <div className={styles.wrap}>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>1</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>2</div>
                    </div>
                </div>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Struktury danych</div>
                    <div className={styles.wrap}>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>1</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>2</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>3</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>4</div>
                    </div>
                </div>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Napisy</div>
                    <div className={styles.wrap}>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>1</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>2</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>3</div>
                    </div>
                </div>
                <div className={styles.list_element_wrapper}>
                    <div className={styles.subject}>Instrukcje warunkowe</div>
                    <div className={styles.wrap}>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>1</div>
                        <div className={`${styles.list_element} ${styles.python_exercise}`}>2</div>
                    </div>
                </div>
            </div> */}
            <div className={styles.exercises_title}>
                <h2>ZADANIA PROGRAMISTYCZNE Z DOTYCHCZASOWYCH MATUR</h2>
                <p>
                    <b>MATURA</b> - matura z maja<br />
                    <b>MAT. P.</b> - matura próbna<br />
                    <b>MAT. D.</b> - matura dodatkowa<br />
                    <b>INF+</b> - zadania maturalne z informatora na rok 2023 i 2024<br />
                    <b>ARKUSZ +</b> - zadania maturalne z arkusza pokazowego na rok 2023
                </p>
            </div>

            <div className={styles.category}>DZIAŁANIA NA LICZBACH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/45" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2009</b> POD.</pre></Link>
                <Link to="/exercise/39" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2012</b> POD.</pre></Link>
                <Link to="/exercise/38" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2013</b> ROZ.</pre></Link>
                <Link to="/exercise/6" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2017</b> ZAD. 1</pre></Link>
                <Link to="/exercise/7" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2017</b> ZAD. 2</pre></Link>
                <Link to="/exercise/8" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2017</b> ZAD. 3</pre></Link>
                <Link to="/exercise/9" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2017</b> ZAD. 4</pre></Link>
                <Link to="/exercise/56" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2019</b> ZAD. 1</pre></Link>
                <Link to="/exercise/57" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2019</b> ZAD. 2</pre></Link>
                <Link to="/exercise/58" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2019</b> ZAD. 3</pre></Link>
                <Link to="/exercise/13" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2019</b> ZAD. 1</pre></Link>
                <Link to="/exercise/14" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2019</b> ZAD. 2</pre></Link>
                <Link to="/exercise/15" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2019</b> ZAD. 3</pre></Link>
                <Link to="/exercise/16" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2020</b> ZAD. 1</pre></Link>
                <Link to="/exercise/50" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2021</b> ZAD. 1</pre></Link>
                <Link to="/exercise/51" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2021</b> ZAD. 2</pre></Link>
                <Link to="/exercise/52" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2021</b> ZAD. 3</pre></Link>
                <Link to="/exercise/66" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2022</b> ZAD. 1</pre></Link>
                <Link to="/exercise/67" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2022</b> ZAD. 2</pre></Link>
                <Link to="/exercise/68" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2022</b> ZAD. 3</pre></Link>
                <Link to="/exercise/69" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2022</b> ZAD. 4</pre></Link>
                <Link to="/exercise/23" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2022</b> ZAD. 1</pre></Link>
                <Link to="/exercise/24" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2022</b> ZAD. 2</pre></Link>
                <Link to="/exercise/25" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2022</b> ZAD. 3</pre></Link>
                <Link to="/exercise/33" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 3.1</pre></Link>
                <Link to="/exercise/34" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 3.2</pre></Link>
                <Link to="/exercise/35" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 3.3</pre></Link>
            </div>

            <div className={styles.category}>DZIAŁANIA NA STRINGACH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/46" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2009</b> ROZ.</pre></Link>
                <Link to="/exercise/43" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2010</b> POD.</pre></Link>
                <Link to="/exercise/44" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2010</b> ROZ.</pre></Link>
                <Link to="/exercise/37" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2013</b> POD.</pre></Link>
                <Link to="/exercise/36" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2014</b> A,B,C</pre></Link>
                <Link to="/exercise/10" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2018</b> ZAD. 1</pre></Link>
                <Link to="/exercise/11" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2018</b> ZAD. 2</pre></Link>
                <Link to="/exercise/12" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2018</b> ZAD. 3</pre></Link>
                <Link to="/exercise/59" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2020</b> ZAD. 1</pre></Link>
                <Link to="/exercise/60" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2020</b> ZAD. 2</pre></Link>
                <Link to="/exercise/17" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2020</b> ZAD. 2</pre></Link>
                <Link to="/exercise/18" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2020</b> ZAD. 3</pre></Link>
                <Link to="/exercise/62" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2021</b> ZAD. 1</pre></Link>
                <Link to="/exercise/64" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2021</b> ZAD. 3</pre></Link>
                <Link to="/exercise/19" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2021</b> ZAD. 1</pre></Link>
                <Link to="/exercise/20" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2021</b> ZAD. 2</pre></Link>
                <Link to="/exercise/21" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2021</b> ZAD. 3</pre></Link>
                <Link to="/exercise/22" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2021</b> ZAD. 4</pre></Link>
                <Link to="/exercise/47" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2022</b> ZAD. 1</pre></Link>
                <Link to="/exercise/48" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2022</b> ZAD. 2</pre></Link>
                <Link to="/exercise/49" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2022</b> ZAD. 3</pre></Link>
                <Link to="/exercise/31" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 2.1</pre></Link>
                <Link to="/exercise/32" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 2.2</pre></Link>

            </div>
            <div className={styles.category}>DZIAŁANIA NA LICZBACH BINARNYCH</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/42" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2011</b> ROZ.</pre></Link>
                <Link to="/exercise/0" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2015</b> ZAD. 1</pre></Link>
                <Link to="/exercise/1" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2015</b> ZAD. 2</pre></Link>
                <Link to="/exercise/2" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2015</b> ZAD. 3</pre></Link>
            </div>
            <div className={styles.category}>SZYFROWANIE</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/41" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2011</b> POD.</pre></Link>
                <Link to="/exercise/40" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2012</b> ROZ.</pre></Link>
                <Link to="/exercise/3" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2016</b> ZAD. 1</pre></Link>
                <Link to="/exercise/4" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2016</b> ZAD. 2</pre></Link>
                <Link to="/exercise/5" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MATURA <b>2016</b> ZAD. 3</pre></Link>
                <Link to="/exercise/61" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2020</b> ZAD. 3</pre></Link>
                <Link to="/exercise/63" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2021</b> ZAD. 2</pre></Link>
                <Link to="/exercise/65" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. D. <b>2021</b> ZAD. 4</pre></Link>

            </div>
            <div className={styles.category}>TABLICE</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/26" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>ARKUSZ+ <b>2022</b> ZAD. 1</pre></Link>
                <Link to="/exercise/27" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>ARKUSZ+ <b>2022</b> ZAD. 2</pre></Link>
                <Link to="/exercise/28" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>ARKUSZ+ <b>2022</b> ZAD. 3</pre></Link>
            </div>
            <div className={styles.category}>CIĄGI</div>
            <div className={styles.exercises_list}>
                <Link to="/exercise/53" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2020</b> ZAD. 1</pre></Link>
                <Link to="/exercise/54" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2020</b> ZAD. 2</pre></Link>
                <Link to="/exercise/55" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>MAT. P. <b>2020</b> ZAD. 3</pre></Link>
                <Link to="/exercise/29" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 1.3</pre></Link>
                <Link to="/exercise/30" className={`${styles.list_element} ${styles.exam_exercise}`}><pre>INF+ <b>2023</b> ZAD. 1.4</pre></Link>

            </div>

        </main>
    </>;
}

export default ExerciseSet;