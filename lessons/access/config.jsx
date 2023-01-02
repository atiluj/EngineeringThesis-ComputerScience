import Wskazowki from './wskazowki.mdx';
import Wstep from './wstep.mdx';

import Wlaczanie from './wlaczanie.mdx';
import Importowanie from './importowanie.mdx';
import Relacje from './relacje.mdx'; 

import ProsteKwerendy from './prosteKwerendy.mdx';
import ZlozoneKwerendy from './zlozoneKwerendy.mdx';
import Wyrazenia from './wyrazenia.mdx';
import KwerendyPomocnicze from './kwerendyPomocnicze.mdx';
import Dodatek from './dodatek.mdx';

import Niedopasowane from './niedopasowane.mdx';
import Duplikaty from './duplikaty.mdx';
import Krzyzowe from './krzyzowe.mdx';

import Teoria from './teoria.mdx';
import Sql from './sql.mdx';


export default [
    {name: "Wskazówki", content: <Wskazowki />},
    {name: "Wstęp", content: <Wstep />},

        {name: "Modelowanie", subchapters: [
        {name: "Włącznie programu MS Access", content: <Wlaczanie/>},
        {name: "Importowanie danych", content: <Importowanie/>},
        {name: "Relacje między tabelami", content: <Relacje/>},
        {name: "Projektowanie relacyjnych baz danych", content: null},
        {name: "Tworzenie tabel", content: null},
    ]},

    {name: "Tworzenie zapytań", subchapters: [
        {name: "Tworzenie prostych kwerend", content: <ProsteKwerendy/>},
        {name: "Tworzenie kwerend wykorzystujących kilka tabel", content: <ZlozoneKwerendy/>},
        {name: "Konstruuowanie wyrażeń", content: <Wyrazenia/>},
        {name: "Kwerendy pomocnicze", content: <KwerendyPomocnicze/>},
        {name: "Tworzenie raportów", content: null},
        {name: "Warto wiedzieć - przydatne funkcje", content: <Dodatek/>},
    ]},

    {name: "Zaawansowane funkcje", subchapters: [
        {name: "Wyszukiwanie danych po przez odwórcenie problemów + wyjątki", content: <Niedopasowane/>},
        {name: "Wyszukiwanie duplikatów", content: <Duplikaty/>},
        {name: "Zestawienia - kwerendy krzyżowe", content: <Krzyzowe/>},
        {name: "Agregowanie danych", content: null},
    ]},

    {name: "SQL", subchapters: [
        {name: "Składnia", content: <Sql/>},
        {name: "Tworzenie zapytań", content: null},
        {name: "Tworzenie raportów", content: null},
        {name: "Teoria baz danych*", content: <Teoria/>},
    ]},
];