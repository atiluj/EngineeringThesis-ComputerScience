import Wskazowki from './wskazowki.mdx';
import PierwszeKroki from './pierwszeKroki.mdx';
import Typy from './typy.mdx';
import Zmienne from './zmienne.mdx';
import WejscieWyjscie from './wejscieWyjscie.mdx';
import Lista from './lista.mdx';
import Krotka from './krotka.mdx';
import Slownik from './slownik.mdx';
import Zbior from './zbior.mdx';
import Porownania from './porownania.mdx';
import InstrukcjeWarunkowe from './instrukcjeWarunkowe.mdx';
import Petle from './petle.mdx';
import Funkcje from './funkcje.mdx';
import Quizy1 from './zadania/quizy1.mdx';
import Quizy2 from './zadania/quizy2.mdx'
import Quizy3 from './zadania/quizy3.mdx';
import Quizy4 from './zadania/quizy4.mdx';
import Zadania1 from './zadania/zadania1.mdx';
import Zadania2 from './zadania/zadania2.mdx';
import Zadania3 from './zadania/zadania3.mdx';
import Zadania4 from './zadania/zadania4.mdx';

export default [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Pierwsze kroki", content: <PierwszeKroki />},

    {name: "Wprowadzenie do programowania", subchapters: [
        {name: "Typy", content: <Typy />},
        {name: "Zmienne", content: <Zmienne />},
        {name: "Operacje wejścia/wyjścia", content: <WejscieWyjscie />},
        {name: "Quizy", content: <Quizy1 />},
        {name: "Zadania", content: <Zadania1 />}
    ]},

    {name: "Podstawowe struktury danych", subchapters: [
        {name: "Lista", content: <Lista />},
        {name: "Krotka", content: <Krotka />},
        {name: "Quizy", content: <Quizy2 />},
        {name: "Zadania", content: <Zadania2 />}
    ]},

    {name: "Instrukcje warunkowe", subchapters: [
        {name: "Porównania i operatory logiczne", content: <Porownania />},
        {name: "Instrukcja if-else", content: <InstrukcjeWarunkowe />},
        {name: "Quizy", content: <Quizy3 />},
        {name: "Zadania", content: <Zadania3 />}
    ]},

    {name: "Instrukcje iteracyjne", subchapters: [
        {name: "Pętle", content: <Petle/>},
        // {name: "Quizy", content: <Quizy4 />},
        // {name: "Zadania", content: <Zadania4 />}
    ]},

    {name: "Strukturalizacja programu", subchapters: [
        {name: "Funkcje", content: <Funkcje/>},
        // {name: "Quizy", content: null},
        // {name: "Zadania", content: null}
    ]},

    // {name: "Rekurencja", subchapters: [
    //     {name: "Podejście zachłanne", content: null},
    //     {name: `Metoda "dziel i zwyciężaj"`, content: null},
    // ]},

    {name: "Inne struktury danych", subchapters: [
        {name: "Słownik*", content: <Slownik />},
        // {name: "Zbiór*", content: <Zbior />},
    ]},

    // {name: "Liczby", subchapters: [
    //     {name: "Liczby pierwsze i doskonałe", content: null},
    //     {name: "Rozkładanie liczby na czynniki pierwsze", content: null},
    //     {name: "NWD i NWW", content: null},
    //     {name: "Liczby Fibonacciego", content: null},
    // ]},

    // {name: "Proste algorytmy", subchapters: [

    // ]},

    // {name: "Algorytmy sortowania", subchapters: [
    //     {name: "Bąbelkowy", content: null},
    //     {name: "Po przez wybór", content: null},
    //     {name: "Przez wstawianie", content: null},
    //     {name: "Przez scalanie", content: null},
    //     {name: "Szybkie", content: null},
    //     {name: "Kubełkowe", content: null},
    // ]},

    // {name: "Algorytmy numeryczne", subchapters: [
    //     {name: "Obliczanie wartości pierwiastka kwadratowego", content: null},
    //     {name: "Wyznaczanie miejsc zerowych funkcji", content: null},
    //     {name: "Obliczanie pola obszarów zamkniętych", content: null},
    // ]},

    // {name: "Inne algorytmy", subchapters: [
    //     {name: "Tekstowe", content: null},
    //     {name: "Palindromy", content: null},
    //     {name: "Wyszukiwanie wzorca w tekście", content: null},
    //     {name: "Schemat Horenera", content: null},
    // ]},

    // {name: "Algorytmy szyfrowania", subchapters: [
    //     {name: "Szyfr Cezara", content: null},
    //     {name: "Przestawieniowy", content: null},
    // ]},
];