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

function ChapterWithSubchapters({ chapter, chapterId, changeChapter }) {
    const [show, setShow] = React.useState(false); //domyślnie schowane
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

function ChapterStandalone({ chapter, chapterId, changeChapter }) {
    return <div onClick={changeChapter(chapterId, 0)}>
        <div className="topic">
            <a>{chapterId}. {chapter.name}</a>
            <div style={{ visibility: "hidden" }}><ExpandMore /></div>
        </div>
    </div>;
}

function Chapter({ chapter, chapterId, changeChapter }) {
    return (
        chapter.subchapters ?
            <ChapterWithSubchapters chapter={chapter} chapterId={chapterId} changeChapter={changeChapter} /> :
            <ChapterStandalone chapter={chapter} chapterId={chapterId} changeChapter={changeChapter} />
    );
}

function Contents(props) {
    const chapter = Lessons[props.chapter];
    const subchapter = chapter.subchapters ? chapter.subchapters[props.subchapter] : chapter;
    React.useEffect(() => { hljs.highlightAll(); }, [subchapter.content]); //śmieszna funkcja do skanownaia stronki i kolorowania kodu
    return <article className="second">
        <h1>
            {props.chapter}.{chapter.subchapters ? `${props.subchapter + 1}.` : null}
            {subchapter.name}
        </h1>
        {subchapter.content}
    </article>;
}

export default function () {
    const [chapter, setChapter] = React.useState(0);
    const [subchapter, setSubchapter] = React.useState(0);

    function changeChapter(ch, subch) {
        return () => {
            setChapter(ch);
            setSubchapter(subch);
        };
    }

    const maxChapter = Lessons.length - 1;
    const maxSubchapter = chapter => Lessons[chapter].subchapters ? Lessons[chapter].subchapters.length - 1 : 0;
    const prevLessonExists = chapter > 0 || subchapter > 0;
    const nextLessonExists = chapter != maxChapter || subchapter != maxSubchapter(chapter);

    function prevLesson() {
        if (subchapter == 0) {
            const prevChapter = chapter - 1;
            setChapter(prevChapter);
            setSubchapter(Lessons[prevChapter].subchapters ? Lessons[prevChapter].subchapters.length - 1 : 0);
        } else {
            setSubchapter(subchapter - 1);
        }
    }

    function nextLesson() {
        if (!Lessons[chapter].subchapters || subchapter == Lessons[chapter].subchapters.length - 1) {
            setChapter(chapter + 1);
            setSubchapter(0);
        } else {
            setSubchapter(subchapter + 1);
        }
    }

    return <main>
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
                        chapterId={chapterId}
                        changeChapter={changeChapter} />
                )}
            </div>
            {/* <!-- REKLAMA --> */}
        </div>

        <div className="main">
            <div className="title">
                <a>TEORIA</a>
            </div>
            <Contents chapter={chapter} subchapter={subchapter} />
            <div className='controls'>
                <div><label><input type="checkbox" />OZNACZ JAKO PRZEROBIONĄ</label></div>
                <div>
                    <button onClick={prevLesson} style={{ visibility: prevLessonExists ? "visible" : "hidden" }}><ArrowBackIosNewIcon /></button>
                    <button onClick={nextLesson} style={{ visibility: nextLessonExists ? "visible" : "hidden" }}><ArrowForwardIosIcon /></button>
                </div>
            </div>
        </div>
    </main>;
}