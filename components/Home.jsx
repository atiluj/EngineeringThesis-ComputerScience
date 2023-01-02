import './Home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function () {
    return <>
        <div className="section">
            <div className="naglowek">
                <h1>Cześć!</h1>
            </div>
            <article className="first">
                <p>Nasza strona powstała z myślą o wszystkich ludziach, którzy chcą podejść do matury z
                    informatyki, bezwzględu na to, czy uczyli się jej w szkole czy nie. Znajdujące sie na
                    niej materiały pomogą w osiągniećiu wyniku, który pozwoli Ci dostać się na dobre studia
                    informatyczne, bez względu na to na jakim są poziomie zaawansowania aktualnie jesteś. Aby
                    to osiągnąc po prostu poświęć regularnie troche czasu na przerobienie treści tego kursu.
                    To na prawde takie proste. <br /><br />
                    Twórczynie tej strony zdają sobie sprawę z tego, że poziom nauczania informatyki jest w
                    wielu szkołach bardzo niski (czyt. tragiczny), a samodzielna nauka jest po prostu trudna.
                    Na szczęście, każdego roku w internecie powstaje coraz więcej blogów czy filmów, które są
                    bardzo pomocne. Wciąż jednak istnieje mało kompleksowych kursów, które zbierają całą
                    potrzebną wiedzę w jednym miejscu i co najważniejsze są w 100% darmowe. Tworząc tę stronę
                    kierowałyśmy własnymi doświadczeniami - same kilka lat temu przygotowywałyśmy się do tej
                    matury i wiemy, czego nam wtedy brakowały. Chcemy oddać w Twoje ręce gotowe narzędzie, dzięki
                    któremu oszczedzisz mnóstwo czasu i pieniędzy, a nauka będzie sprawna, przyjemna oraz
                    przyniesie oczekiwane rezultaty. Przekazujemy Ci też mnóstwo wskazówek, które ułatwią Ci pracę
                    i powiedza na co zwrócić uwagę, a czego nie warto się uczyć.
                </p>
            </article>
        </div>

        <main>
            <div className="contents">
                <div className="cont">
                    <a href="#first">DLA KOGO?</a>
                    <a href="#second">STATYSTYKI</a>
                    <a href="#third">CO ZAWIER KURS</a>
                    <a href="#fourth">INSTRUKCJA</a>
                    <a href="#fifth">WSKAZÓWKI</a>
                    <a href="#sixth">AUTORZY</a>
                </div>
                {/* TODO: REKLAMA */}
            </div>

            <div className="main">
                <article id="first">
                    <h1>DLA KOGO?</h1>
                    <p>
                        Jeśli nie miałeś wcześniej styczności z informatyką - nie przejmuj się - nasz kurs
                        nie wymaga żadnej wcześniejszej wiedzy i powoli wprowadzi Cię w każdy temat. Poziom
                        trudności wykładów i zadań stopniowo wzrasta, a więc osoby bardziej zaawansowane na pewno
                        znajdą tutaj coś dla siebie. Mamy nadzieję, że ta strona pomoże Ci w nauce i uporządkowaniu
                        wiedzy.
                    </p>
                </article>
                <article id="second">
                    <h1>STATYSTYKI</h1>
                    <p>Na podstawie danych opublikowanych przez Centralną Komisję Egzaminacyjną na rok 2022 wiemy, że do egzaminu maturalnego z informatyki podeszło 9 248 osób z 268 257 maturzystów. Łatwo więc obliczyć, że jest to jedynie ok. 0.03% spośród wszystkich uczniów przystępujących do matury!<br /><br />

                        [tu obrazek z 1000 osób i zakolorowany 30 ucznów ]<br /><br />

                        Co więcej jeśli chodzi o kobiety to jest to zaledwie 0.003%. Możemy więc sobie wyobrazić, że nawet w przypadku dużej szkoły (liczącej ok. 1000 uczniów) w sporym mieście moglibyśmy wybierać zaledwie trzy uczennice i tylko one podeszłyby do tej matury. W trzyletnim liceum oznacząłoby to że, tak na prawde co roku do matury podchodzi tylko jedna dziewczyna! Dla porównania 11% maturzystów stanowią kobiety przystępujące do matury z matematyki na poziomie rozszerzonym. Jest to prawie 3667 razy więcej!<br /><br />

                        [tu obrazek z 1000 osób i zakolorowany 3 uczniów]<br /><br />

                        Co najbardziej szokujące jedynie 115 uczniów spośród ponad 268 tys. maturzystów to osoby ze szkół na wsi, które decydują się podejść do egzaminu z informatyki. W przeliczeniu jest to tylko 0.00043% czyli ok. 4 na 10 tys. To tak jakby wziąć 10 małych miast w Polsce i wybrać jedynie 4 spośród wszystkich ich mieszkańców.<br /><br />

                        Warto zauważyć, że operujemy paroma przybliżeniami i opieramy się tutaj jedynie na danych z 2022 roku. Niestety wyniki z innych lat nie różnią się od nich znacząco. Wszystkie dane są dostępne w raportach CKE, na oficjalnej stronie internetowej: https://cke.gov.pl/egzamin-maturalny/egzamin-maturalny-w-formule-2015/wyniki/
                        <br /><br />
                        [tu obrazek z 10 000 osób i zakolorowany 4 uczniów]</p>
                </article>
                <article id="third">
                    <h1>CO ZAWIERA KURS</h1>
                    <p>
                        Kurs składa się z wykładów, w których omówione zostały najważniejsze zagadnienia z informatyki, takie jak:</p>
                        <ul>
                            <li>podstawy programowania w języku Python</li>
                            <li>podstawy baz danych i obsługi programu MS Access</li>
                            <li>podstawy algorytmów i struktur danych</li>
                            <li>tworzenie symulacji i opracowywanie danych za pomocą MS Excel</li>
                            <li>zagadnienia z zakresu teorii informatyki przydatne na maturze (np. prawo autorskie, cyberbezpieczeństwo, formaty plików)</li>
                        </ul>
                        <br />
                        <p>Każda lekcja zawiera teoretyczne wprowadzenie do danego zagadnienia, a także przykłady i ćwiczenia, dzięki którym będziesz mógł/mogła sprawdzić swoją wiedzę i utrwalić nowo poznany temat.
                        W sekcji komenatarzy możesz zadać nam pytanie, na które postaramy się odpowiedzieć.</p>
                    
                </article>
                <article id="fourth">
                    <h1>INSTRUKCJA</h1>
                    <p>
                        WYBIERZ SWÓJ POZIOM:<br /><br />

                        <b>JESZCZE NIE WIEM, ALE ZA MIESIĄC MUSZĘ TO ZDAĆ (niepolecany)</b><br />
                        Został Ci miesiąc - nie ucz się teorii, nie warto!
                        Jeśli masz już podstawy wiedzy programistycznej to szlifuj tę umiejśtność najbardziej jak to możliwe. Przerób wszystkie zadania programistyczne i algorytmiczne z poprzednich matur i przeczytaj materiały dostępne na strone. W wolnych chwilach dołącz do tego naukę Excela (i Accessa, jeśli podstawy Excela nie są Ci już obce).
                        Jeśli natomiast zaczynasz od podstaw skup się na zadaniach z Excela i Accessa. Zadania programistycznie nie są tak łatwe, a nauka myślenia algorytmicznego wymaga czasu. Jeśli masz dużą motywację spróbuj opanować podstawy kodowania, ale nie trać czasu na wgłębianie się w trudneijsze podpunkty zadań czy zaawansowane funkcje Pythona.
                        <br /><br />
                        <b>JESTEM ZIELONY</b><br />
                        Jeśli zaczynasz od podstaw, to masz dwie możliwości. Jedna z nich to rozpoczęcie nauki od prostych algorytmów i przejście do nauki programowania krok po kroku. Druga to droga od zera do mistrza pakietu office, czyli dużo ćwiczeń z Excela i Accessa.
                        Oczywiście najepiej nauczyć się obu tych części i zdobyć kompelksową wiedzę. Z doświadczenia wiemy, że opanowanie umiejętności programistycznych nie jest łatwe i wymaga więcej czasu. Muisz bowiem przyzwyczaić się do algorytmicznego sposobu myślenia i rozwiązywania zadań poprzez analizowanie coraz mniejszych jego podproblemów. Dobrym pomysłem jest więc nauka algorytmów równolegle do zdobywania umiejętności związanych z Excelem czy Accessem. Różnorodna sepcyfika tych zadań pozwoli Ci nie wpaść w monotonnie i zwiększy wydajność procesu nauki. Oczywiście ważnym aspektem jest dostępność pakietów Microsoft, wskazówki na ten temat znajdziesz w zakładkach "Excel - wskazówki" oraz "Access - wskazówki".
                        <br /><br />
                        <b>NIBY MAM INFORMATYKĘ W SZKOLE, ALE TA SZKOŁA JEST W POLSCE</b><br />
                        Jeśli potrzebujesz nauczyć się danego zagadnienia od podstaw lub chcesz solidnie utrwalić wiedzę, to możesz przerabiać tematy po kolei. Jeśli jednak czujesz, że dany temat nie sprawia Ci trudności śmiało pomiń niektóre fragmenty lub podtematy.
                        <br /><br />
                        <b>SPORO UMIEM, ALE NIE WIEM CZEGO NIE WIEM</b><br />
                        Większość wykładów zawiera dołączone ćwiczenia, możesz więc sprawdzić czy jesteś już zaznajomiony z omawianymi zagadnieniami poprzez rozwiązanie tych zadań. Jeśli sprawią Ci one trudność warto abyś wrócił do począdku tematu i przeczytał teorię. Jeśli natomiast były one dla Ciebie łatwe, to prawdopodobnie możesz już przejść do kolejnych działów.
                    </p><br /><br /><br /><br />
                    <b>DLA KAŻDEGO</b><br />
                    <p>Na maturze  nie marnuj czasu na główkowanie nad trudnym podpunktem. Jeśli coś zajmuje Ci więcej niż 5min, a postęp pracy nie jest znaczący, zostaw to na koniec.

                        Pamiętaj, że ten kurs jest dla Ciebie i to Ty decydujesz jak z niego korzystasz. Dla nas ważne jest, aby pomóc Ci w wyzwaniu jakie przed Tobą stoi najlepiej jak to możliwe.</p>
                </article>
                <article id="fifth">
                    <h1>WSKAZÓWKI</h1>
                    Co roku wraz z opublikowaniem wyników matur, Centralna Komisja Egzaminacyjna tworzy raport zawierający statystyki oraz wnioski, jakie z nich płyną. 
                    Chcemy zwrócić Ci szczególną uwagę na (naszym zdaniem) najważniejsze punkty i dać Ci kilka rad z nimi związanych. <br /><br />
                    Po pierwsze wciąż duża grupa maturzystów zapomina zapisać realizacje komputerowe swoich zadań (np. plik Excel). W szczególności brak zapisania 
                    części obliczeń skutkuje uzyskaniem przez zdającego 0 punktów za dane zadanie. Na przykład jeśli uczeń podczas rozwiązywania podpunktu B nadpisze 
                    obliczenia potrzebne do podpunktu A, to otrzyma 0 punktów za podpunkt A nawet jeśli będzie miał poprawne odpowiedzi w pliku tekstowym. <br /><br />
                    Bardzo istotne jest również uważne czytanie treści zadania, w szczególności jeśli w poleceniu mamy frazę "napisz program" to za rozwiązanie 
                    takiego zadania za pomocą arkusza kalkulacyjnego otrzymamy 0 punktów. Co gorsza, część nauczycieli nie ma aktualnej wiedzy w tym zakresie i 
                    wprowadza uczniów w błąd, twierdząc, że zabieg taki jest akceptowalny.<br /><br />
                    Co roku zdający mają największe trudności z rozwiązywaniem zadań algorytmicznych (na części pierwszej) i programistycznych (na części drugiej).
                    Niskie wyniki odnotowywane są również w przypadku zadań wymagających wykonania symulacji w arkuszu kalkulacyjnym (Excel). 
                    Wynika z tego, że choć często Access jest uważany za trudny, bo jego naukę zaczynamy stosunkowo późno, a w dodatku nie każdy ma dostęp do tego 
                    programu na komputerze domowym, to ze statystyk wynika, że jest to jedna z najwyżej ocenianych części egzaminu.<br /><br />
                    
                    Jeśli chodzi o język programowania wybierany w części praktycznej, to sugerujemy wybór Pythona. Jest on najprostszy w obsłudze i najłatwiejszy do 
                    nauczenia się spośród języków dopuszczalnych przez CKE na maturze. W porównaniu z np. C++ zadanie w Pythonie jesteśmy w stanie wykonać szybciej - 
                    nie musimy się martwić typami czy skomplikowanymi operacjami na napisach. Więcej na ten temat dowiesz się w temacie 0, w zakładce Python.<br /><br />
                    
                    Każdy z działów ma sekcję "Wskazówki", w której znajdziesz więcej przydatnych rad oraz bardziej szczegółowe instrukcje.
                    Pamiętaj, że ten kurs jest dla Ciebie i to Ty decydujesz jak z niego korzystasz. Dla nas ważne jest, aby pomóc Ci w wyzwaniu jakie przed Tobą stoi 
                    najlepiej jak to możliwe.
                </article>
            </div>
        </main>

        <div className="separator"></div>

        <div className="authors" id="sixth">
            <div className="authorsTitle"><p>AUTORZY STRONY</p></div>

            <div className="author">
                <div className="photo"><img src={new URL('../img/julita.jpg', import.meta.url)} alt="Julita" /></div>
                <div>
                    <p className="authorName">JULITA OSMAN<a href="https://www.linkedin.com/in/julita-osman-167530225/" target="_blank"><LinkedInIcon /></a></p>
                    <p className="introduction">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus omnis reprehenderit assumenda nihil sit suscipit eum odio nisi, ipsum, deleniti, et pariatur tempora odit facilis ratione? Quia, itaque accusamus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus omnis reprehenderit assumenda nihil sit suscipit eum odio nisi, ipsum, deleniti, et pariatur tempora odit facilis ratione? Quia, itaque accusamus!
                    </p>
                </div>

            </div>

            <div className="author">
                <div className="photo"><img src={new URL('../img/ola.jpeg', import.meta.url)} alt="Aleksandra" /></div>
                <div>
                    <p className="authorName">ALEKSANDRA STĘPNIEWSKA<a href="https://www.linkedin.com/in/aleksandrast%C4%99pniewska/" target="_blank"><LinkedInIcon /></a></p>
                    <p className="introduction">Loremzxcjjjaf
                        ipsum dolor sit amet consectetur adipisicing elit. Id doloribus omnis reprehenderit assumenda nihil sit suscipit eum odio nisi, ipsum, deleniti, et pariatur tempora odit facilis ratione? Quia, itaque accusamus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus omnis reprehenderit assumenda nihil sit suscipit eum odio nisi, ipsum, deleniti, et pariatur tempora odit facilis ratione? Quia, itaque accusamus!
                    </p>
                </div>
            </div>

            <div className="author">
                <div className="photo"><img src={new URL('../img/nikola.jpg', import.meta.url)} alt="Nikola" /></div>
                <div>
                    <p className="authorName">NIKOLA WRONA<a href="https://www.linkedin.com/in/nikola-wrona-429a75211/" target="_blank"><LinkedInIcon /></a></p>
                    <p className="introduction">Loremzxcjjaf
                        ipsum dolor sit amet consectetur adipisicing elit. Id doloribus omnis reprehenderit assumenda nihil sit suscipit eum odio nisi, ipsum, deleniti, et pariatur tempora odit facilis ratione? Quia, itaque accusamus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus omnis reprehenderit assumenda nihil sit suscipit eum odio nisi, ipsum, deleniti, et pariatur tempora odit facilis ratione? Quia, itaque accusamus!
                    </p>
                </div>
            </div>

        </div>

        <div className="separator"></div>

        <footer>
            <div>
                <p>Hej! <br /> Kontakt do twórców tej strony znajdziesz na stronie głównej w zakładce AUTORZY STRONY.</p>
                <p>Jeśli uważasz, że nasza praca Ci pomogła możesz nas wesprzeć kupując nam kawkę. Bardzo to docenimy!</p>
            </div>
            <div className="coffee-link">
                <a href="">TUTAJ ZNAJDZIESZ LINK DO PROFILU <CoffeeIcon /></a>
            </div>

        </footer>

    </>;
}