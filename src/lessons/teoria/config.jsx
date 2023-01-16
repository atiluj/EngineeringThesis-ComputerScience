import Wskazowki from './wskazowki.mdx';
import KomputerIJegoCzesci from './komputer-i-jego-czesci.mdx';

const TeoriaLessons = [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Komputer", subchapters: [
        {name: "Komputer i jego części", content: <KomputerIJegoCzesci />},
        {name: "System operacyjny", content: null},
    ]},

    {name: "Systemy liczbowe", subchapters: [
        {name: "System dwójkowy", content: null},
        {name: "System ósemkowy", content: null},
        {name: "System szesnastkowy", content: null},
    ]},

    {name: "Konwersja liczb", subchapters: [
        {name: "Dwójkowy - Ósemkowy", content: null},
        {name: "Dwójkowy - Szesnastkowy", content: null},
        {name: "Ósemkowy - Szesnastkowy", content: null},
    ]},

    {name: "Sieci komputerowe", subchapters: [
        {name: "Terminologia", content: null},
        {name: "Topologia sieci", content: null},
        {name: "Protokół IP", content: null},
        {name: "Adresy IP", content: null},
        {name: "Maski podsieci", content: null},
        {name: "Adresy sieci", content: null},
    ]},

    {name: "Grafika komputerowa", subchapters: [
        {name: "Podstawowe modele barw", content: null},
        {name: "Własnośći grafiki rastrowej i wektorowej", content: null}, 
        {name: "Podstawowe formaty plików graficznych", content: null},
    ]},

    {name: "Zagadnienia prawne", subchapters: [
        {name: "Zagadnienia przestępczości komputerowej", content: null},
        {name: "Licencje", content: null},
        {name: "Normy prawe", content: null},
    ]},

    {name: "Pseudokod", subchapters: [
        {name: "Schematy blokowe", content: null},
        {name: "Lista kroków", content: null},
        {name: "Za pomocą Python", content: null},
    ]},

    {name: "Złożoność", subchapters: [
        {name: "Złożoność obliczeniowa", content: null},
        {name: "Złożoność pamięciowa", content: null},
        {name: "Własnośći algorytmów", content: null},
    ]},

    {name: "Błędy", subchapters: [
        {name: "Błędy numeryczne obliczeń", content: null},
        {name: "Błąd względny i bezwzględny", content: null},
    ]},

    {name: "Algorytmy", subchapters: [
        {name: "Odwrotna notacja polska", content: null},
    ]},
];

export default TeoriaLessons;