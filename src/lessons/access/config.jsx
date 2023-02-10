import Wskazowki from './wskazowki.mdx';
import Materialy from './wstep.mdx';

import Wlaczanie from './wlaczanie.mdx';
import Importowanie from './importowanie.mdx';
import Relacje from './relacje.mdx'; 
import Tabele from './tabele.mdx';

import ProsteKwerendy from './prosteKwerendy.mdx';
import ZlozoneKwerendy from './zlozoneKwerendy.mdx';
import Wyrazenia from './wyrazenia.mdx';
import KwerendyPomocnicze from './kwerendyPomocnicze.mdx';
import Raporty from './raporty.mdx';
import Dodatek from './dodatek.mdx';

import Niedopasowane from './niedopasowane.mdx';
import Duplikaty from './duplikaty.mdx';
import Krzyzowe from './krzyzowe.mdx';

import Teoria from './teoria.mdx';
import Sql from './sql.mdx';
import Zapytania from './zapytania.mdx';

import ZadaniaNowe from './zadaniaNowe.mdx';

import ZadaniaBazy from './zadaniaBazy.mdx'; 


const AccessLessons = [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Wstęp", subchapters: [
        {name: "Materiały", content: <Materialy/>},
    ]},

    {name: "Modelowanie", subchapters: [
        {name: "Włączanie programu MS Access", content: <Wlaczanie/>},
        {name: "Wczytywanie danych", content: <Importowanie/>},
        {name: "Relacje", content: <Relacje/>},
        {name: "Tworzenie tabel", content: <Tabele/>},
    ]},

    {name: "Tworzenie zapytań", subchapters: [
        {name: "Tworzenie prostych kwerend", content: <ProsteKwerendy/>},
        {name: "Tworzenie kwerend wykorzystujących kilka tabel", content: <ZlozoneKwerendy/>},
        {name: "Konstruowanie wyrażeń", content: <Wyrazenia/>},
        {name: "Kwerendy pomocnicze", content: <KwerendyPomocnicze/>},
        {name: "Tworzenie raportów", content: <Raporty/>},
        {name: "Warto wiedzieć - przydatne funkcje", content: <Dodatek/>},
    ]},

    {name: "Zaawansowane funkcje", subchapters: [
        {name: "Wyszukiwanie danych poprzez odwrócenie problemów + wyjątki", content: <Niedopasowane/>},
        {name: "Wyszukiwanie duplikatów", content: <Duplikaty/>},
        {name: "Zestawienia - kwerendy krzyżowe", content: <Krzyzowe/>},
        // {name: "Agregowanie danych", content: null},
    ]},

    {name: "Teoria baz danych*", content: <Teoria />},

    {name: "SQL", subchapters: [
        {name: "Składnia", content: <Sql/>},
        {name: "Tworzenie zapytań", content: <Zapytania/>},
        // {name: "Projektowanie relacyjnych baz danych", content: null},
    ]},

    {name: "Zadania z baz danych", subchapters: [
        {name: "Zadania z nowej formuły (od 2023)", content: <ZadaniaNowe/>},
        {name: "Zadania maturalne", content: <ZadaniaBazy/>},
    ]},
];

export default AccessLessons;