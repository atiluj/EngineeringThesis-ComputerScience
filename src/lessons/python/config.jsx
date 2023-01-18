import Wskazowki from './wskazowki.mdx';
import PierwszeKroki from './pierwszeKroki.mdx';
import Typy from './typy.mdx';
import Zmienne from './zmienne.mdx';
import WejscieWyjscie from './wejscieWyjscie.mdx';
import Zadania1 from './zadania1.mdx';
import Lista from './lista.mdx';
import Krotka from './krotka.mdx';
import Slownik from './slownik.mdx';
import Zbior from './zbior.mdx';
import Zadania2 from './zadania2.mdx';
import InstrukcjeWarunkowe from './instrukcjeWarunkowe.mdx';

export default [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Pierwsze kroki", content: <PierwszeKroki />},

    {name: "Wprowadzenie do programowania", subchapters: [
        {name: "Typy", content: <Typy />},
        {name: "Zmienne", content: <Zmienne />},
        {name: "Operacje wejścia/wyjścia", content: <WejscieWyjscie />},
        {name: "Zadania", content: <Zadania1 />}
    ]},

    {name: "Struktury danych", subchapters: [
        {name: "Lista", content: <Lista />},
        {name: "Krotka", content: <Krotka />},
        {name: "Słownik*", content: <Slownik />},
        {name: "Zbiór*", content: <Zbior />},
        {name: "Zadania", content: <Zadania2 />},
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