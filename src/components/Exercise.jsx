import styles from './Exercise.module.css';
import '../style.css'; 

function Exercise() {
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
                    <div className={`${styles.list_element} ${styles.number_element}`}>1</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>2</div>
                    <div className={`${styles.list_element} ${styles.number_element}`}>3</div>
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
                <h1>POZSOTAŁE ZADANIA</h1>
                {/* <p>Przerobienie ponizszych zadań jest gwarantem opanowania Pythona oraz uzyskania dobrego wyniku na maturze.
                    na podstawie matur coś tam blabla bla.
                </p> */}
            </div>

            <div className={styles.exercises_list}>
                <div className={styles.list_element}><p>Matura 2022 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2022 z.2</p></div>
                <div className={styles.list_element}><p>Matura 2021 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2021 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2020 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2020 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2019 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2019 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2018 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2018 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2017 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2017 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2016 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2016 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2018 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2018 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2017 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2017 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2016 z.1</p></div>
                <div className={styles.list_element}><p>Matura 2016 z.1</p></div>
            </div>

            <div className={styles.category}>SORTOWANIE</div>
            <div className={styles.exercises_list}>
                <div className={styles.list_element}><p>SORTOWANIE Z.1</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.2</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.3</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.4</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.5</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.6</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.7</p></div>
                <div className={styles.list_element}><p>SORTOWANIE Z.8</p></div>
            </div>

            <div className={styles.category}>SZYFROWANIE</div>
            <div className={styles.exercises_list}>
                <div className={styles.list_element}><p>SZYFROWANIE Z.1</p></div>
                <div className={styles.list_element}><p>SZYFROWANIE Z.2</p></div>
                <div className={styles.list_element}><p>SZYFROWANIE Z.3</p></div>
                <div className={styles.list_element}><p>SZYFROWANIE Z.4</p></div>
                <div className={styles.list_element}><p>SZYFROWANIE Z.5</p></div>
            </div>

        </main>
    </>;
}

export default Exercise;