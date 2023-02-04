import Wskazowki from './wskazowki.mdx';
import KomputerIJegoCzesci from './komputer-i-jego-czesci.mdx';
import ZadaniaKomputer from './zadaniaKomputer.mdx';

import SystemyLiczbowe from './systemyLiczbowe.mdx';
import ZadaniaLiczby from './zadaniaLiczby.mdx';

import Terminologia from './terminologia.mdx';
import Warstwy from './sieciWarstwy.mdx';
import Protokoly from './protokoly.mdx';
import Maski from './maski.mdx';
import ZadaniaSieci from './zadaniaSieci.mdx';

import Barwy from './barwy.mdx';
import FormatyGrafiki from './formatyGrafiki.mdx';
import ZadaniaGrafika from './zadaniaGrafika.mdx';

import ZadaniaPrawo from './zadaniaPrawo.mdx';

import ZadaniaPseudokod from './zadaniaPseudokod.mdx';

import ZadaniaAlgorytmy from './zadaniaAlgorytmy.mdx';
import ZadaniaSzyfrowanie from './zadaniaSzyfrowanie.mdx';


const TeoriaLessons = [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Komputer", subchapters: [
        // {name: "Komputer i jego części", content: <KomputerIJegoCzesci />},
        // {name: "System operacyjny", content: null},
        {name: "Zadania maturalne", content: <ZadaniaKomputer/>},
    ]},

    // {name: "Systemy liczbowe", subchapters: [
    //     {name: "System dwójkowy", content: null},
    //     {name: "System ósemkowy", content: null},
    //     {name: "System szesnastkowy", content: null},
    // ]},

    {name: "Konwersja liczb", subchapters: [
        {name: "Systemy liczbowe", content: <SystemyLiczbowe/>},
        // {name: "Dwójkowy - Ósemkowy", content: null},
        // {name: "Dwójkowy - Szesnastkowy", content: null},
        // {name: "Ósemkowy - Szesnastkowy", content: null},
        {name: "Zadania maturalne", content: <ZadaniaLiczby/>},
    ]},

    {name: "Sieci komputerowe", subchapters: [
        {name: "Podstawy i terminologia", content: <Terminologia/>},
        {name: "Topologia sieci", content: <Warstwy/>},
        {name: "Protokoły", content: <Protokoly/>},
        {name: "Maski podsieci", content: <Maski/>},
        {name: "Zadania maturalne", content: <ZadaniaSieci/>},
    ]},

    {name: "Grafika komputerowa", subchapters: [
        {name: "Podstawowe modele barw", content: <Barwy/>},
        {name: "Grafika rastrowa vs wektorowa", content: <FormatyGrafiki/>}, 
        {name: "Zadania maturalne", content: <ZadaniaGrafika/>},
    ]},

    {name: "Zagadnienia prawne i cyberbezpieczeństwo", subchapters: [
        // {name: "Zagadnienia przestępczości komputerowej", content: null},
        // {name: "Licencje", content: null},
        // {name: "Normy prawe", content: null},
        {name: "Zadania maturalne", content: <ZadaniaPrawo/>},
    ]},

    {name: "Pseudokod", subchapters: [
        // {name: "Schematy blokowe", content: null},
        // {name: "Lista kroków", content: null},
        // {name: "Za pomocą Python", content: null},
        {name: "Zadania maturalne", content: <ZadaniaPseudokod/>},
    ]},

    // {name: "Złożoność", subchapters: [
    //     {name: "Złożoność obliczeniowa", content: null},
    //     {name: "Złożoność pamięciowa", content: null},
    //     {name: "Własnośći algorytmów", content: null},
    // ]},

    // {name: "Błędy", subchapters: [
    //     {name: "Błędy numeryczne obliczeń", content: null},
    //     {name: "Błąd względny i bezwzględny", content: null},
    // ]},

    {name: "Algorytmy", subchapters: [
        // {name: "Odwrotna notacja polska", content: null},
        {name: "Zadania maturalne - szyfrowanie", content: <ZadaniaSzyfrowanie/>},
        {name: "Zadania maturalne - pozostałe", content: <ZadaniaAlgorytmy/>},
    ]},
];

export default TeoriaLessons;