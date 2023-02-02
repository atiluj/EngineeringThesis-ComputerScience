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
import INF2023Z11 from './INF2023Z11.mdx';
import INF2023Z12 from './INF2023Z12.mdx';
import INF2023Z13 from './INF2023Z13.mdx';
import INF2023Z14 from './INF2023Z14.mdx';

import INF2023Z23 from './INF2023Z23.mdx';
import INF2023Z24 from './INF2023Z24.mdx';

import INF2023Z31 from './INF2023Z31.mdx';
import INF2023Z32 from './INF2023Z32.mdx';
import INF2023Z33 from './INF2023Z33.mdx';



// import M2023Z1 from './M2023Z1.mdx';


const ExercisesPython = [
    // Arkusze matur
    {name: "Matura 2015 zadanie 1 - LICZBY BINARNE", content: <M2015Z1/>}, //0
    {name: "Matura 2015 zadanie 2- LICZBY BINARNE", content: <M2015Z2/>}, //1
    {name: "Matura 2015 zadanie 3- LICZBY BINARNE", content: <M2015Z3/>}, //2

    {name: "Matura 2016 zadanie 1 - SZYFROWANIE", content: <M2016Z1/>}, //3
    {name: "Matura 2016 zadanie 2 - SZYFROWANIE", content: <M2016Z2/>}, //4
    {name: "Matura 2016 zadanie 3 - SZYFROWANIE", content: <M2016Z3/>}, //5

    {name: "Matura 2017 zadanie 1 - DZIAŁANIA NA LICZBACH", content: <M2017Z1/>}, //6
    {name: "Matura 2017 zadanie 2 - DZIAŁANIA NA LICZBACH", content: <M2017Z2/>}, //7
    {name: "Matura 2017 zadanie 3 - DZIAŁANIA NA LICZBACH", content: <M2017Z3/>}, //8
    {name: "Matura 2017 zadanie 4 - DZIAŁANIA NA LICZBACH", content: <M2017Z4/>}, //9

    {name: "Matura 2018 zadanie 1 - DZIAŁANIA NA STRINGACH", content: <M2018Z1/>}, //10
    {name: "Matura 2018 zadanie 2 - DZIAŁANIA NA STRINGACH", content: <M2018Z2/>}, //11
    {name: "Matura 2018 zadanie 3 - DZIAŁANIA NA STRINGACH", content: <M2018Z3/>}, //12

    {name: "Matura 2019 zadanie 1 - POTĘGI", content: <M2019Z1/>}, //13
    {name: "Matura 2019 zadanie 2 - SILNIA", content: <M2019Z2/>}, //14
    {name: "Matura 2019 zadanie 3 - DZIAŁANIA NA LICZBACH", content: <M2019Z3/>}, //15

    {name: "Matura 2020 zadanie 1 - DZIAŁANIA NA LICZBACH", content: <M2020Z1/>}, //16
    {name: "Matura 2020 zadanie 2 - DZIAŁANIA NA STRINGACH", content: <M2020Z2/>}, //17
    {name: "Matura 2020 zadanie 3 - DZIAŁANIA NA STRINGACH", content: <M2020Z3/>}, //18

    {name: "Matura 2021 zadanie 1 - DZIAŁANIA NA STRINGACH", content: <M2021Z1/>}, //19
    {name: "Matura 2021 zadanie 2 - DZIAŁANIA NA STRINGACH", content: <M2021Z2/>}, //20
    {name: "Matura 2021 zadanie 3 - DZIAŁANIA NA STRINGACH", content: <M2021Z3/>}, //21
    {name: "Matura 2021 zadanie 4 - DZIAŁANIA NA STRINGACH", content: <M2021Z4/>}, //22

    {name: "Matura 2022 zadanie 1 - DZIAŁANIA NA LICZBACH", content: <M2022Z1/>}, //23
    {name: "Matura 2022 zadanie 2 - DZIAŁANIA NA LICZBACH", content: <M2022Z2/>}, //24
    {name: "Matura 2022 zadanie 3 - DZIAŁANIA NA LICZBACH", content: <M2022Z3/>}, //25

    //Arkusze pokazowe
    {name: "Arkusz pokazowy 2022 zadanie 1 - TABLICE", content: <AP2022Z1/>}, //26
    {name: "Arkusz pokazowy 2022 zadanie 2 - TABLICE", content: <AP2022Z2/>}, //27
    {name: "Arkusz pokazowy 2022 zadanie 3 - TABLICE", content: <AP2022Z3/>}, //28

    //Informatory
    {name: "Informator 2023 zadanie 1.1 - CIĄGI", content: <INF2023Z11/>}, //29
    {name: "Informator 2023 zadanie 1.2 - CIĄGI", content: <INF2023Z12/>}, //30
    {name: "Informator 2023 zadanie 1.3 - CIĄGI", content: <INF2023Z13/>}, //31
    {name: "Informator 2023 zadanie 1.4 - CIĄGI", content: <INF2023Z14/>}, //32

    {name: "Informator 2023 zadanie 2.3 - DZIAŁANIA NA STRINGACH", content: <INF2023Z23/>}, //33
    {name: "Informator 2023 zadanie 2.4 - DZIAŁANIA NA STRINGACH", content: <INF2023Z24/>}, //34

    {name: "Informator 2023 zadanie 3.1 - DZIAŁANIA NA LICZBACH", content: <INF2023Z31/>}, //35
    {name: "Informator 2023 zadanie 3.2 - DZIAŁANIA NA LICZBACH", content: <INF2023Z32/>}, //36
    {name: "Informator 2023 zadanie 3.3 - DZIAŁANIA NA LICZBACH", content: <INF2023Z33/>}, //37

    //MATURY W STAREJ FORMULE
    {name: "Matura 2014 - DZIAŁANIA NA STRINGACH", content: <M2014/>}, //38
    {name: "Matura podstawowa 2013 cz.2 - DZIAŁANIA NA STRINGACH", content: <M2013_P/>}, //39
    {name: "Matura rozszerzona 2013 cz.2 - DZIAŁANIA NA LICZBACH", content: <M2013_R/>}, //40
    {name: "Matura podstawowa 2012 cz.2 - DZIAŁANIA NA LICZBACH", content: <M2012_P/>}, //41
    {name: "Matura rozszerzona 2012 cz.2 - SZYFROWANIE", content: <M2012_R/>}, //42
    {name: "Matura podstawowa 2011 cz.2 - SZYFROWANIE", content: <M2011_P/>}, //43
    {name: "Matura rozszerzona 2011 cz.2 - DZIAŁANIA NA LICZBACH BINARNYCH", content: <M2011_R/>}, //44
    {name: "Matura podstawowa 2010 cz.2 - PALINDROMY", content: <M2010_P/>}, //45
    {name: "Matura rozszerzona 2010 cz.2 - ANAGRAM", content: <M2010_R/>}, //46
    {name: "Matura podstawowa 2009 cz.2 - LICZBY PIERWSZE", content: <M2009_P/>}, //47
    {name: "Matura rozszerzona 2009 cz.2 - PARA SŁÓW", content: <M2009_R/>}, //48


    //{name: "Matura 2023 zadanie 3 - DZIAŁANIA NA LICZBACH", content: <M2023Z1/>}, //26
    
    // zadania Python - kurs
    {name: "Wskazówki", content: null},
    {name: "Wskazówki", content: null},
    // zadania Python - kurs
    {name: "Wskazówki", content: null},
    {name: "Wskazówki", content: null},
];

export default ExercisesPython;