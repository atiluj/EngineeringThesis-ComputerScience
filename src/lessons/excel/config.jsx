import Wskazowki from './wskazowkiExcel.mdx';

import WlaczanieExcel from './wlaczanieExcel.mdx';
import ImportExcel from './importExcel.mdx';

import FormulyWbudowane from './formulyWbudowane.mdx';
import SymboleWieloznaczne from './symbole.mdx';
import FormulyLogiczne from './formulyLogiczne.mdx';
import Przestawne from './przestawne.mdx';
import Wyszukaj from './wyszukaj.mdx';
import BledyExcel from './bledyExcel.mdx';

import Symulacje from './symulacje.mdx';

import ZadaniaTeoriaExcel from './zadaniaTeoriaExcel.mdx';

const ExcelLessons = [
    {name: "Wskazówki", content: <Wskazowki />},

    {name: "Dane", subchapters: [
        {name: "Włączanie programu MS Excel", content: <WlaczanieExcel/>},
        {name: "Importowanie danych", content: <ImportExcel/>},
    ]},

    {name: "Formuły", subchapters: [
        // {name: "Podstawy", content: null},
        {name: "Formuły wbudowane", content: <FormulyWbudowane/>},
        {name: "Symbole wieloznaczne", content: <SymboleWieloznaczne/>},
        {name: "Formuły warunkowe", content: <FormulyLogiczne/>},
        // {name: "Formuły zaawansowane", content: null},
        {name: "Tabele i wykresy przestawne", content: <Przestawne/>},
        {name: "Wyszukiwanie", content: <Wyszukaj/>},
        {name: "Rodzaje błędów", content: <BledyExcel/>},
    ]},

    {name: "Zadania ", subchapters: [
        // {name: "Przetwarzanie i analiza danych", content: null},
        // {name: "Odpowiadanie na zapytania", content: null},
        {name: "Tworzenie symulacji", content: <Symulacje/>},
        // {name: "Zapisywanie alagorytmów", content: null},
        // {name: "Tworzenie wykresów", content: null},
        // {name: "Obrazowanie zależności funkcyjnych", content: null},
        // {name: "Funkcje bazodanowe", content: null},
    ]},

    {name: "Zadania maturalne", subchapters: [
        {name: "Część teoretyczna", content: <ZadaniaTeoriaExcel/>},
    ]}
];

export default ExcelLessons;