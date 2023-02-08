import Wskazowki from './wskazowki.mdx';
import KomputerIJegoCzesci from './komputer-i-jego-czesci.mdx';
import Systemy from './systemy.mdx';
import Znaki from './znaki.mdx';
import ZadaniaKomputer from './zadaniaKomputer.mdx';

import SystemyLiczbowe from './systemyLiczbowe.mdx';
import KonwersjaSystemow from './konwersjaSystemow.mdx';
import ZadaniaLiczby from './zadaniaLiczby.mdx';

import Terminologia from './terminologia.mdx';
import Warstwy from './sieciWarstwy.mdx';
import Protokoly from './protokoly.mdx';
import Maski from './maski.mdx';
import ZadaniaSieci from './zadaniaSieci.mdx';

import Barwy from './barwy.mdx';
import FormatyGrafiki from './formatyGrafiki.mdx';
import ZadaniaGrafika from './zadaniaGrafika.mdx';

import NormyPrawne from './normyPrawne.mdx';
import Licencje from './licencje.mdx';
import ZadaniaPrawo from './zadaniaPrawo.mdx';

import ZadaniaPseudokod from './zadaniaPseudokod.mdx';

import ZadaniaAlgorytmy from './zadaniaAlgorytmy.mdx';
import ZadaniaSzyfrowanie from './zadaniaSzyfrowanie.mdx';


const TeoriaLessons = [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Konwersja liczb", subchapters: [
        {name: "Systemy liczbowe", content: <SystemyLiczbowe/>},
        {name: "Konwersja między systemami", content: <KonwersjaSystemow/>},
        {name: "Zadania maturalne", content: <ZadaniaLiczby/>},
    ]},

    {name: "Komputer", subchapters: [
        {name: "Komputer i jego części", content: <KomputerIJegoCzesci />},
        {name: "System operacyjny", content: <Systemy/>},
        {name: "Reprezentacja znaków w komputerze", content: <Znaki/>},
        {name: "Zadania maturalne", content: <ZadaniaKomputer/>},
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
        {name: "Licencje", content: <Licencje/>},
        {name: "Normy prawe", content: <NormyPrawne/>},
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