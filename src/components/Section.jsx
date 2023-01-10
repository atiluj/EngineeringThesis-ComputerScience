import styles from './Section.module.css';
import '../style.css'; 
import * as React from 'react';
import hljs from 'highlight.js';
// import 'node_modules/highlight.js/styles/dark.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { style } from '@mui/system';

const NavContext = React.createContext({
    curChapter: 0,
    curSubchapter: 0,
    changeChapter: (chapter, subchapter) => { },
});

function Subchapter({ chapterId, subchapterId, subchapter }) {
    const { changeChapter, curChapter, curSubchapter } = React.useContext(NavContext);
    const isCurrent = chapterId == curChapter && subchapterId == curSubchapter;
    return <a href="#" className={`${styles.subtopic} menu_button` + (isCurrent ? ` ${styles.subtopic_current}` : ``)}
        onClick={() => changeChapter(chapterId, subchapterId)}>
        {chapterId}.{subchapterId + 1}. {subchapter.name}
    </a>;
}

function ChapterWithSubchapters({ chapter, chapterId }) {
    const { curChapter } = React.useContext(NavContext);
    const [show, setShow] = React.useState(false); //domyślnie schowane
    React.useEffect(() => {
        if (curChapter == chapterId) setShow(true);
    }, [curChapter]);
    return <div>
        <div className={`${styles.topic} menu_button`} onClick={() => setShow(show => !show)}>
            <a>{chapterId}. {chapter.name}</a>
            <div>{show ? <ExpandLess /> : <ExpandMore />}</div>
        </div>
        <Collapse in={show}>
            {chapter.subchapters.map((subchapter, subchapterId) =>
                <Subchapter key={subchapterId}
                    chapterId={chapterId} subchapterId={subchapterId} subchapter={subchapter} />
            )}
        </Collapse>
    </div>;
}

function ChapterStandalone({ chapter, chapterId }) {
    const { changeChapter } = React.useContext(NavContext);
    return <div onClick={() => changeChapter(chapterId, 0)}>
        <div className={`${styles.topic} menu_button`}>
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

function Contents({lessons}) {
    const { curChapter, curSubchapter } = React.useContext(NavContext);
    const chapter = lessons[curChapter];
    const subchapter = chapter.subchapters ? chapter.subchapters[curSubchapter] : chapter;
    let title = `${curChapter}.`;
    if (chapter.subchapters)
        title += `${curSubchapter + 1}.`;
    title += ` ${subchapter.name}`;
    React.useEffect(() => { hljs.highlightAll(); }, [subchapter.content]); //śmieszna funkcja do skanownaia stronki i kolorowania kodu
    return <article className={`second`}>
        <h1>{title}</h1>
        {subchapter.content}
    </article>;
}

function Section({lessons, title}) {
    const [curChapter, setCurChapter] = React.useState(0);
    const [curSubchapter, setCurSubchapter] = React.useState(0);
    function changeChapter(ch, subch) {
        setCurChapter(ch);
        setCurSubchapter(subch);
        window.location.hash = `${ch}.${subch + 1}`;
        window.scrollTo({top:0, behavior:"smooth"});
    }

    const maxChapter = lessons.length - 1;
    const maxSubchapter = chapter => lessons[chapter].subchapters ? lessons[chapter].subchapters.length - 1 : 0;
    const prevLessonExists = curChapter > 0 || curSubchapter > 0;
    const nextLessonExists = curChapter != maxChapter || curSubchapter != maxSubchapter(curChapter);

    React.useEffect(() => {
        if (window.location.hash.length > 0) {
            const parts = window.location.hash.replace('#', '').split('.');
            if (parts.length == 2) {
                const chapter = Number(parts[0]);
                const subchapter = Number(parts[1]) - 1;
                if (chapter >= 0 && chapter <= maxChapter
                    && subchapter >= 0 && subchapter <= maxSubchapter(chapter)) {
                    setCurChapter(chapter);
                    setCurSubchapter(subchapter);
                }
            }
        }
    }, []);

    function prevLesson() {
        if (curSubchapter == 0) {
            const prevChapter = curChapter - 1;
            changeChapter(prevChapter, maxSubchapter(prevChapter));
        } else {
            changeChapter(curChapter, curSubchapter - 1);
        }
    }

    function nextLesson() {
        if (curSubchapter == maxSubchapter(curChapter)) {
            changeChapter(curChapter + 1, 0);
        } else {
            changeChapter(curChapter, curSubchapter + 1);
        }
    }

    return <NavContext.Provider value={{ curChapter, curSubchapter, changeChapter }}>
        <main className={styles.main}>
            <div className={styles.contents}>
                {/* <div className={`${styles.title} ${styles.ft}`}>
                    <a>{title}</a>
                </div> */}
                <div className={`${styles.cont_title} ${styles.title}`}>
                    <a>{title}</a>
                </div>

                <div className={styles.cont}>
                    {lessons.map((chapter, chapterId) =>
                        <Chapter key={chapterId}
                            chapter={chapter}
                            chapterId={chapterId} />
                    )}
                </div>
            </div>

            <div className={`${styles.main_content} main_content`}>
                <Contents lessons={lessons} />
                <div className={styles.controls}>
                    {/* <div><label><input type="checkbox" />OZNACZ JAKO PRZEROBIONĄ</label></div> */}
                    <div>
                        <button onClick={prevLesson} style={{ visibility: prevLessonExists ? "visible" : "hidden" }}><ArrowBackIosNewIcon /></button>
                        <button onClick={nextLesson} style={{ visibility: nextLessonExists ? "visible" : "hidden" }}><ArrowForwardIosIcon /></button>
                    </div>
                </div>
            </div>
        </main>
    </NavContext.Provider>;
}

export default Section;