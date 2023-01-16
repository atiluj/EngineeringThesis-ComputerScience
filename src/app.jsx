import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


function App() {
    return (
    <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
            <Route path='/' element={<><Home /><Footer /></>}/>
            <Route path='/interpreter' element={<Interpreter />} />
            <Route path='/exercise' element={<><ExerciseSet /><Footer /></>} />
            <Route path='/exercise/:id' element={<><Exercise lessons={ExercisesPython} /></>}/>
            <Route path='/access' element={<><Section lessons={AccessLessons} title="access"/><Footer /></>} />
            <Route path='/excel' element={<><Section lessons={ExcelLessons} title="excel"/><Footer /></>} />
            <Route path='/teoria' element={<><Section lessons={TeoriaLessons} title="teoria"/><Footer /></>} />
            <Route path='/python' element={<><Section lessons={PythonLessons} title="python"/><Footer /></>} />
        </Routes>
    </BrowserRouter>);
}


export default App;