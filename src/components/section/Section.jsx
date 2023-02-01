import * as React from 'react';
import styles from './Section.module.css';
import { useSearchParams } from 'react-router-dom';
import 'highlight.js/styles/dark.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import NavContext from './NavContext';
import Chapter from './components/Chapter';
import Contents from './components/Contents';
import Comments from '../Comments';

function Section({lessons, title, logo}) {
    const [curChapter, setCurChapter] = React.useState(0);
    const [curSubchapter, setCurSubchapter] = React.useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    function changeChapter(ch, subch) {
        setCurChapter(ch);
        setCurSubchapter(subch);
        setSearchParams({chapter: `${ch}`, subchapter: `${subch + 1}`});
        window.scrollTo({top:0, behavior:"smooth"});
    }

    React.useEffect(() => {
        if (curChapter != 0 || curSubchapter != 0) changeChapter(0, 0);
    }, [lessons, title]);

    const maxChapter = lessons.length - 1;
    const maxSubchapter = chapter => lessons[chapter].subchapters ? lessons[chapter].subchapters.length - 1 : 0;
    const prevLessonExists = curChapter > 0 || curSubchapter > 0;
    const nextLessonExists = curChapter != maxChapter || curSubchapter != maxSubchapter(curChapter);
    const lessonExists = (chapter, subchapter) => chapter >= 0 && chapter <= maxChapter && subchapter >= 0 && subchapter <= maxSubchapter(chapter);

    React.useEffect(() => {
        if (searchParams.get("chapter") && searchParams.get("subchapter")) {
            const chapter = Number(searchParams.get("chapter"));
            const subchapter = Number(searchParams.get("subchapter")) - 1;
            if (lessonExists(chapter, subchapter)) {
                changeChapter(chapter, subchapter);
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

    if (!lessonExists(curChapter, curSubchapter)) return null;

    return <NavContext.Provider value={{ curChapter, curSubchapter, changeChapter }}>
        <main className={styles.main}>
            <div className={styles.contents}>
                <div className={`${styles.cont_title} ${styles.title}`}>
                    <a>{title}</a>
                    <img src={logo} alt="Logo" className={styles.section_logo}/>
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
                    <div>
                        {prevLessonExists && <button onClick={prevLesson}><ArrowBackIosNewIcon /></button>}
                        {nextLessonExists && <button onClick={nextLesson}><ArrowForwardIosIcon /></button>}
                    </div>
                </div>
                <Comments issue={`${title} ${curChapter}.${curSubchapter+1}`} />
            </div>
        </main>
    </NavContext.Provider>;
}

export default Section;