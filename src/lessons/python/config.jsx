import Wskazowki from './wskazowki.mdx';
import PierwszeKroki from './pierwszeKroki.mdx';
import TypyIZmienne from './typyIZmienne.mdx';
import ListyIKrotki from './listyIKrotki.mdx';
import SlownikiIZbiory from './slownikiIZbiory.mdx';
import InstrukcjeWarunkowe from './instrukcjeWarunkowe.mdx';

export default [
    {name: "Wskazówki", content: <Wskazowki />},
    
    {name: "Pierwsze kroki", content: <PierwszeKroki />},
    {name: "Typy i zmienne", content: <TypyIZmienne />},

    {name: "Struktury danych", subchapters: [
        {name: "Listy i krotki", content: <ListyIKrotki />},
        {name: "Słowniki i zbiory*", content: <SlownikiIZbiory />},
    ]},

    {name: "Podstawowe konstrukcje", subchapters: [
        {name: "Instrukcje warunkowe", content: <InstrukcjeWarunkowe />},
        {name: "Pętle", content: null},
        {name: "Funkcje", content: null},
    ]},

    {name: "Rekurencja", subchapters: [
        {name: "Podejście zachłanne", content: null},
        {name: `Metoda "dziel i zwyciężaj"`, content: null},
    ]},

    {name: "Liczby", subchapters: [
        {name: "Liczby pierwsze i doskonałe", content: null},
        {name: "Rozkładanie liczby na czynniki pierwsze", content: null},
        {name: "NWD i NWW", content: null},
        {name: "Liczby Fibonacciego", content: null},
    ]},

    {name: "Proste algorytmy", subchapters: [

    ]},

    {name: "Algorytmy sortowania", subchapters: [
        {name: "Bąbelkowy", content: null},
        {name: "Po przez wybór", content: null},
        {name: "Przez wstawianie", content: null},
        {name: "Przez scalanie", content: null},
        {name: "Szybkie", content: null},
        {name: "Kubełkowe", content: null},
    ]},

    {name: "Algorytmy numeryczne", subchapters: [
        {name: "Obliczanie wartości pierwiastka kwadratowego", content: null},
        {name: "Wyznaczanie miejsc zerowych funkcji", content: null},
        {name: "Obliczanie pola obszarów zamkniętych", content: null},
    ]},

    {name: "Inne algorytmy", subchapters: [
        {name: "Tekstowe", content: null},
        {name: "Palindromy", content: null},
        {name: "Wyszukiwanie wzorca w tekście", content: null},
        {name: "Schemat Horenera", content: null},
    ]},

    {name: "Algorytmy szyfrowania", subchapters: [
        {name: "Szyfr Cezara", content: null},
        {name: "Przestawieniowy", content: null},
    ]},
];