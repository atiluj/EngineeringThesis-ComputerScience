import M2009_P from './M2009-podstawowa.mdx'; 
import M2009_R from './M2009-rozszerzona.mdx';

import M2010_P from './M2010-podstawowa.mdx'; 
import M2010_R from './M2010-rozszerzona.mdx';

import M2011_P from './M2011-podstawowa.mdx'; 
import M2011_R from './M2011-rozszerzona.mdx';

import M2012_P from './M2012-podstawowa.mdx'; 
import M2012_R from './M2012-rozszerzona.mdx'; 

import M2013_P from './M2013-podstawowa.mdx'; 
import M2013_R from './M2013-rozszerzona.mdx'; 

import M2014 from './M2014.mdx';

import M2015Z1 from './M2015Z1.mdx';
import M2015Z2 from './M2015Z2.mdx';
import M2015Z3 from './M2015Z3.mdx';

import M2016Z1 from './M2016Z1.mdx';
import M2016Z2 from './M2016Z2.mdx';
import M2016Z3 from './M2016Z3.mdx';

import M2017Z1 from './M2017Z1.mdx';
import M2017Z2 from './M2017Z2.mdx';
import M2017Z3 from './M2017Z3.mdx';
import M2017Z4 from './M2017Z4.mdx';

import M2018Z1 from './M2018Z1.mdx';
import M2018Z2 from './M2018Z2.mdx';
import M2018Z3 from './M2018Z3.mdx';

import M2019Z1 from './M2019Z1.mdx';
import M2019Z2 from './M2019Z2.mdx';
import M2019Z3 from './M2019Z3.mdx';

import M2020Z1 from './M2020Z1.mdx';
import M2020Z2 from './M2020Z2.mdx';
import M2020Z3 from './M2020Z3.mdx';

import M2021Z1 from './M2021Z1.mdx';
import M2021Z2 from './M2021Z2.mdx';
import M2021Z3 from './M2021Z3.mdx';
import M2021Z4 from './M2021Z4.mdx';

import M2022Z1 from './M2022Z1.mdx';
import M2022Z2 from './M2022Z2.mdx';
import M2022Z3 from './M2022Z3.mdx';

//Arkusze pokazowe
import AP2022Z1 from './AP2022Z1.mdx';
import AP2022Z2 from './AP2022Z2.mdx';
import AP2022Z3 from './AP2022Z3.mdx';

//Informatory
import INF2023Z13 from './INF2023Z13.mdx';
import INF2023Z14 from './INF2023Z14.mdx';

import INF2023Z21 from './INF2023Z21.mdx';
import INF2023Z22 from './INF2023Z22.mdx';

import INF2023Z31 from './INF2023Z31.mdx';
import INF2023Z32 from './INF2023Z32.mdx';
import INF2023Z33 from './INF2023Z33.mdx';

// Matury próbne/ arkusze diagnostyczne
import MP2022Z1 from './MP2022Z1.mdx';
import MP2022Z2 from './MP2022Z2.mdx';
import MP2022Z3 from './MP2022Z3.mdx';

import MP2021Z1 from './MP2021Z1.mdx';
import MP2021Z2 from './MP2021Z2.mdx';
import MP2021Z3 from './MP2021Z3.mdx';

import MP2020Z1 from './MP2020Z1.mdx';
import MP2020Z2 from './MP2020Z2.mdx';
import MP2020Z3 from './MP2020Z3.mdx';

// Matury dodatkowe
import MD2019Z1 from './MD2019Z1.mdx';
import MD2019Z2 from './MD2019Z2.mdx';
import MD2019Z3 from './MD2019Z3.mdx';

import MD2020Z1 from './MD2020Z1.mdx';
import MD2020Z2 from './MD2020Z2.mdx';
import MD2020Z3 from './MD2020Z3.mdx';

import MD2021Z1 from './MD2021Z1.mdx';
import MD2021Z2 from './MD2021Z2.mdx';
import MD2021Z3 from './MD2021Z3.mdx';
import MD2021Z4 from './MD2021Z4.mdx';

import MD2022Z1 from './MD2022Z1.mdx';
import MD2022Z2 from './MD2022Z2.mdx';
import MD2022Z3 from './MD2022Z3.mdx';
import MD2022Z4 from './MD2022Z4.mdx';



// import M2023Z1 from './M2023Z1.mdx';


const ExercisesPython = [
    // Arkusze matur
    {name: "Matura 2015 zadanie 1 - LICZBY BINARNE", content: <M2015Z1/>}, //0
    {name: "Matura 2015 zadanie 2 - LICZBY BINARNE", content: <M2015Z2/>}, //1
    {name: "Matura 2015 zadanie 3 - LICZBY BINARNE", content: <M2015Z3/>}, //2

    {name: "Matura 2016 zadanie 1 - SZYFR CEZARA", content: <M2016Z1/>}, //3
    {name: "Matura 2016 zadanie 2 - SZYFR CEZARA", content: <M2016Z2/>}, //4
    {name: "Matura 2016 zadanie 3 - SZYFR CEZARA", content: <M2016Z3/>}, //5

    {name: "Matura 2017 zadanie 1 - PIKSELE", content: <M2017Z1/>}, //6
    {name: "Matura 2017 zadanie 2 - PIKSELE", content: <M2017Z2/>}, //7
    {name: "Matura 2017 zadanie 3 - PIKSELE", content: <M2017Z3/>}, //8
    {name: "Matura 2017 zadanie 4 - PIKSELE", content: <M2017Z4/>}, //9

    {name: "Matura 2018 zadanie 1 - WEGA", content: <M2018Z1/>}, //10
    {name: "Matura 2018 zadanie 2 - WEGA", content: <M2018Z2/>}, //11
    {name: "Matura 2018 zadanie 3 - WEGA", content: <M2018Z3/>}, //12

    {name: "Matura 2019 zadanie 1 - LICZBY", content: <M2019Z1/>}, //13
    {name: "Matura 2019 zadanie 2 - LICZBY", content: <M2019Z2/>}, //14
    {name: "Matura 2019 zadanie 3 - LICZBY", content: <M2019Z3/>}, //15

    {name: "Matura 2020 zadanie 1 - PARY", content: <M2020Z1/>}, //16
    {name: "Matura 2020 zadanie 2 - PARY", content: <M2020Z2/>}, //17
    {name: "Matura 2020 zadanie 3 - PARY", content: <M2020Z3/>}, //18

    {name: "Matura 2021 zadanie 1 - NEON CYFROWY", content: <M2021Z1/>}, //19
    {name: "Matura 2021 zadanie 2 - NEON CYFROWY", content: <M2021Z2/>}, //20
    {name: "Matura 2021 zadanie 3 - NEON CYFROWY", content: <M2021Z3/>}, //21
    {name: "Matura 2021 zadanie 4 - NEON CYFROWY", content: <M2021Z4/>}, //22

    {name: "Matura 2022 zadanie 1 - LICZBY", content: <M2022Z1/>}, //23
    {name: "Matura 2022 zadanie 2 - LICZBY", content: <M2022Z2/>}, //24
    {name: "Matura 2022 zadanie 3 - LICZBY", content: <M2022Z3/>}, //25

    //Arkusze pokazowe
    {name: "Arkusz pokazowy 2022 zadanie 1 - SZACHY", content: <AP2022Z1/>}, //26
    {name: "Arkusz pokazowy 2022 zadanie 2 - SZACHY", content: <AP2022Z2/>}, //27
    {name: "Arkusz pokazowy 2022 zadanie 3 - SZACHY", content: <AP2022Z3/>}, //28

    //Informatory
    {name: "Informator 2023 zadanie 1.3 - CIĄGI", content: <INF2023Z13/>}, //29
    {name: "Informator 2023 zadanie 1.4 - CIĄGI", content: <INF2023Z14/>}, //30

    {name: "Informator 2023 zadanie 2.3 - DZIAŁANIA NA STRINGACH", content: <INF2023Z21/>}, //31
    {name: "Informator 2023 zadanie 2.4 - DZIAŁANIA NA STRINGACH", content: <INF2023Z22/>}, //32

    {name: "Informator 2023 zadanie 3.1 - DZIAŁANIA NA LICZBACH", content: <INF2023Z31/>}, //33
    {name: "Informator 2023 zadanie 3.2 - DZIAŁANIA NA LICZBACH", content: <INF2023Z32/>}, //34
    {name: "Informator 2023 zadanie 3.3 - DZIAŁANIA NA LICZBACH", content: <INF2023Z33/>}, //35

    //MATURY W STAREJ FORMULE
    {name: "Matura 2014 - CIEKAWE NAPISY", content: <M2014/>}, //36
    {name: "Matura podstawowa 2013 cz.2 - NAPISY", content: <M2013_P/>}, //37
    {name: "Matura rozszerzona 2013 cz.2 - LICZBY", content: <M2013_R/>}, //38
    {name: "Matura podstawowa 2012 cz.2 - CYFRY", content: <M2012_P/>}, //39
    {name: "Matura rozszerzona 2012 cz.2 - SZYFR", content: <M2012_R/>}, //40
    {name: "Matura podstawowa 2011 cz.2 - HASŁA", content: <M2011_P/>}, //41
    {name: "Matura rozszerzona 2011 cz.2 - LICZBY INACZEJ", content: <M2011_R/>}, //42
    {name: "Matura podstawowa 2010 cz.2 - PALINDROMY", content: <M2010_P/>}, //43
    {name: "Matura rozszerzona 2010 cz.2 - ANAGRAM", content: <M2010_R/>}, //44
    {name: "Matura podstawowa 2009 cz.2 - LICZBY PIERWSZE", content: <M2009_P/>}, //45
    {name: "Matura rozszerzona 2009 cz.2 - PARA SŁÓW", content: <M2009_R/>}, //46

    //PRÓBNE MATURY
    {name: "Matura próbna 2022 - KOSMICZNA ROZGRYWKA", content: <MP2022Z1/>}, //47
    {name: "Matura próbna 2022 - KOSMICZNA ROZGRYWKA", content: <MP2022Z2/>}, //48
    {name: "Matura próbna 2022 - KOSMICZNA ROZGRYWKA", content: <MP2022Z3/>}, //49
    {name: "Matura próbna 2021 - GALERIE HANDLOWE", content: <MP2021Z1/>}, //50
    {name: "Matura próbna 2021 - GALERIE HANDLOWE", content: <MP2021Z2/>}, //51
    {name: "Matura próbna 2021 - GALERIE HANDLOWE", content: <MP2021Z3/>}, //52
    {name: "Matura próbna 2020 - LUKI W CIĄGU", content: <MP2020Z1/>}, //53
    {name: "Matura próbna 2020 - LUKI W CIĄGU", content: <MP2020Z2/>}, //54
    {name: "Matura próbna 2020 - LUKI W CIĄGU", content: <MP2020Z3/>}, //55

    //MATURY DODATKOWE
    {name: "Matura dodatkowa 2019 - WYBRANE LICZBY", content: <MD2019Z1/>}, //56
    {name: "Matura dodatkowa 2019 - WYBRANE LICZBY", content: <MD2019Z2/>}, //57
    {name: "Matura dodatkowa 2019 - WYBRANE LICZBY", content: <MD2019Z3/>}, //58
    {name: "Matura dodatkowa 2020 - DOKUMENTY", content: <MD2020Z1/>}, //59
    {name: "Matura dodatkowa 2020 - DOKUMENTY", content: <MD2020Z2/>}, //60
    {name: "Matura dodatkowa 2020 - DOKUMENTY", content: <MD2020Z3/>}, //61
    {name: "Matura dodatkowa 2021 - SCHOWANE NAPISY", content: <MD2021Z1/>}, //62 - STRING
    {name: "Matura dodatkowa 2021 - SCHOWANE NAPISY", content: <MD2021Z2/>}, //63 - SZYFROWANIE
    {name: "Matura dodatkowa 2021 - SCHOWANE NAPISY", content: <MD2021Z3/>}, //64 - STRING
    {name: "Matura dodatkowa 2021 - SCHOWANE NAPISY", content: <MD2021Z4/>}, //65 - SZYFROWANIE
    {name: "Matura dodatkowa 2022 - LICZBY I ICH ODBICIA", content: <MD2022Z1/>}, //66 - LICZBY
    {name: "Matura dodatkowa 2022 - LICZBY I ICH ODBICIA", content: <MD2022Z2/>}, //67 - LICZBY
    {name: "Matura dodatkowa 2022 - LICZBY I ICH ODBICIA", content: <MD2022Z3/>}, //68 - LICZBY
    {name: "Matura dodatkowa 2022 - LICZBY I ICH ODBICIA", content: <MD2022Z4/>}, //69 - LICZBY
];

export default ExercisesPython;