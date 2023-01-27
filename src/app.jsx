import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import AccessLessons from './lessons/access/config.jsx';
import ExcelLessons from './lessons/excel/config.jsx';
import PythonLessons from './lessons/python/config.jsx';
import TeoriaLessons from './lessons/teoria/config.jsx';
import ExercisesPython from './lessons/exercises/matura/config.jsx';
import Interpreter from './components/Interpreter'
import Exercise from './components/Exercise'
import ExerciseSet from './components/ExerciseSet'
import Section from './components/Section'
import Home from './components/Home'
import Footer from './components/Footer';
import { ScrollToTop } from 'react-router-scroll-to-top';

import './style.css';

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
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />}>
                <Route index element={<Home />}/>
                <Route path='interpreter' element={<Interpreter />} />
                <Route path='exercise' element={<ExerciseSet />} />
                <Route path='exercise/:id' element={<Exercise lessons={ExercisesPython} />}/>
                <Route path='access' element={<Section lessons={AccessLessons} title="access"/>} />
                <Route path='excel' element={<Section lessons={ExcelLessons} title="excel"/>} />
                <Route path='teoria' element={<Section lessons={TeoriaLessons} title="teoria"/>} />
                <Route path='python' element={<Section lessons={PythonLessons} title="python"/>} />
            </Route>
        </Routes>
    </BrowserRouter>);
}


export default App;