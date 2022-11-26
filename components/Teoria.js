import './Teoria.css';
import * as React from 'react';
import hljs from 'highlight.js';
import '../node_modules/highlight.js/styles/dark.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import Lessons from '../lessons/teoria/config.jsx';

const NavContext = React.createContext({
    curChapter: 0,
    curSubchapter: 0,
    changeChapter: (chapter, subchapter) => () => {},
});

function ChapterWithSubchapters({ chapter, chapterId }) {
    const [show, setShow] = React.useState(false); //domyślnie schowane
    const {changeChapter} = React.useContext(NavContext);
    return <div>
        <div className="topic" onClick={() => setShow(show => !show)}>
            <a>{chapterId}. {chapter.name}</a>
            <div>{show ? <ExpandLess /> : <ExpandMore />}</div>
        </div>
        <Collapse in={show}>
            {chapter.subchapters.map((subchapter, subchapterId) =>
                <a key={subchapterId}
                    href="#" className="subtopic"
                    onClick={changeChapter(chapterId, subchapterId)}>{subchapter.name}</a>
            )}
        </Collapse>
    </div>;
}

function ChapterStandalone({ chapter, chapterId }) {
    const {changeChapter} = React.useContext(NavContext);
    return <div onClick={changeChapter(chapterId, 0)}>
        <div className="topic">
            <a>{chapterId}. {chapter.name}</a>
            <div style={{ visibility: "hidden" }}><ExpandMore /></div>
        </div>
    </div>;
}

function Chapter({ chapter, chapterId }) {
    return (
        chapter.subchapters ?
            <ChapterWithSubchapters chapter={chapter} chapterId={chapterId} /> :
            <ChapterStandalone chapter={chapter} chapterId={chapterId} />
    );
}

function Contents() {
    const {curChapter, curSubchapter} = React.useContext(NavContext);
    const chapter = Lessons[curChapter];
    const subchapter = chapter.subchapters ? chapter.subchapters[curSubchapter] : chapter;
    let title = `${curChapter}.`;
    if (chapter.subchapters)
        title += `${curSubchapter + 1}.`;
    title += ` ${subchapter.name}`;
    React.useEffect(() => { hljs.highlightAll(); }, [subchapter.content]); //śmieszna funkcja do skanownaia stronki i kolorowania kodu
    return <article className="second">
        <h1>{title}</h1>
        {subchapter.content}
    </article>;
}

export default function () {
    const [curChapter, setCurChapter] = React.useState(0);
    const [curSubchapter, setCurSubchapter] = React.useState(0);
    function changeChapter(ch, subch) {
        return () => {
            setCurChapter(ch);
            setCurSubchapter(subch);
        };
    }

    const maxChapter = Lessons.length - 1;
    const maxSubchapter = chapter => Lessons[chapter].subchapters ? Lessons[chapter].subchapters.length - 1 : 0;
    const prevLessonExists = curChapter > 0 || curSubchapter > 0;
    const nextLessonExists = curChapter != maxChapter || curSubchapter != maxSubchapter(curChapter);

    function prevLesson() {
        if (curSubchapter == 0) {
            const prevChapter = curChapter - 1;
            setCurChapter(prevChapter);
            setCurSubchapter(Lessons[prevChapter].subchapters ? Lessons[prevChapter].subchapters.length - 1 : 0);
        } else {
            setCurSubchapter(curSubchapter - 1);
        }
    }

    function nextLesson() {
        if (!Lessons[curChapter].subchapters || curSubchapter == Lessons[curChapter].subchapters.length - 1) {
            setCurChapter(curChapter + 1);
            setCurSubchapter(0);
        } else {
            setCurSubchapter(curSubchapter + 1);
        }
    }

    return <NavContext.Provider value={{curChapter, curSubchapter, changeChapter}}>
        <main>
        <div className="contents">
            <div className="title ft">
                <a>TEORIA</a>
            </div>
            <div className="cont-title">
                <a>SPIS TREŚCI</a>
            </div>

            <div className="cont">
                {Lessons.map((chapter, chapterId) =>
                    <Chapter key={chapterId}
                        chapter={chapter}
                        chapterId={chapterId} />
                )}
            </div>
        </div>

        <div className="main">
            <div className="title">
                <a>TEORIA</a>
            </div>
            <Contents />
            <div className='controls'>
                <div><label><input type="checkbox" />OZNACZ JAKO PRZEROBIONĄ</label></div>
                <div>
                    <button onClick={prevLesson} style={{ visibility: prevLessonExists ? "visible" : "hidden" }}><ArrowBackIosNewIcon /></button>
                    <button onClick={nextLesson} style={{ visibility: nextLessonExists ? "visible" : "hidden" }}><ArrowForwardIosIcon /></button>
                </div>
            </div>
        </div>
    </main>
    </NavContext.Provider>;
}