import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ScrollToTop } from 'react-router-scroll-to-top';
import Nav from './components/nav/Nav';
import AccessLessons from './lessons/access/config.jsx';
import ExcelLessons from './lessons/excel/config.jsx';
import PythonLessons from './lessons/python/config.jsx';
import TeoriaLessons from './lessons/teoria/config.jsx';
import ExercisesPython from './lessons/exercises/matura/config.jsx';
import Interpreter from './components/interpreter/Interpreter'
import Exercise from './components/exercise/Exercise'
import ExerciseSet from './components/exerciseSet/ExerciseSet'
import Contents from './components/section/components/Contents';
import Section from './components/section/Section'
import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import accessLogo from './img/access_logo.png';
import excelLogo from './img/excel_logo.png';
import pythonLogo from './img/python_logo.png';
import teoriaLogo from './img/teoria_logo.png';
import { PythonProvider } from "react-py";

function Dashboard() {
    return (
        <>
            <ScrollToTop />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

function App() {
    const sections = [
        { path: 'excel', lessons: ExcelLessons, logo: excelLogo },
        { path: 'teoria', lessons: TeoriaLessons, logo: teoriaLogo },
        { path: 'access', lessons: AccessLessons, logo: accessLogo },
        { path: 'python', lessons: PythonLessons, logo: pythonLogo }
    ];

    return (
        <PythonProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path='interpreter' element={<Interpreter />} />
                        <Route path='exercise' element={<ExerciseSet />} />
                        <Route path='exercise/:id' element={<Exercise lessons={ExercisesPython} />} />
                        {sections.map((section, index) => (
                            <Route key={index} path={section.path} element={<Section key={index} lessons={section.lessons} title={section.path} logo={section.logo} />}>
                                <Route index element={<Contents />} />
                                <Route path={':chapterId'}>
                                    <Route path={':subchapterId'} element={<Contents />} />
                                </Route>
                            </Route>
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </PythonProvider>
    );
}

export default App;