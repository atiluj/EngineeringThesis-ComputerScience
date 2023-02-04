import * as React from 'react';
import styles from './Section.module.css';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Checkbox from '@mui/material/Checkbox';
import Chapter from './components/Chapter';
import Comments from '../Comments';
import 'highlight.js/styles/dark.css';

function Section({lessons, title, logo}) {
    let navigate = useNavigate();
    const { chapterId, subchapterId } = useParams();
    const [curChapter, setCurChapter] = React.useState(0);
    const [curSubchapter, setCurSubchapter] = React.useState(1);
    const [isRedone, setIsRedone] = React.useState(false);
    
    React.useEffect(() => {
        setIsRedone(isSetAsRedoneInLocalStorage(0, 1));
    }, [])

    React.useEffect(() => {
        if (chapterId && subchapterId) {
            setCurChapter(parseInt(chapterId));
            setCurSubchapter(parseInt(subchapterId));
            setIsRedone(isSetAsRedoneInLocalStorage(chapterId, subchapterId));
        }
    }, [chapterId, subchapterId]);

    const maxChapter = lessons.length - 1;
    const maxSubchapter = chapter => lessons[chapter].subchapters ? lessons[chapter].subchapters.length : 1;
    const prevLessonExists = curChapter > 0 || curSubchapter > 1;
    const nextLessonExists = curChapter != maxChapter || curSubchapter != maxSubchapter(curChapter);

    function prevLesson() {
        let chapter, subchapter;
        if (curSubchapter == 1) {
            chapter = curChapter - 1;
            subchapter = maxSubchapter(chapter);
        } else {
            chapter = curChapter;
            subchapter = curSubchapter - 1;
        }
        navigate(`/${title}/${chapter}/${subchapter}`);
    }

    function nextLesson() {
        let chapter, subchapter;
        if (curSubchapter == maxSubchapter(curChapter)) {
            chapter = curChapter + 1;
            subchapter = 1;
        } else {
            chapter = curChapter;
            subchapter = curSubchapter + 1;
        }
        navigate(`/${title}/${chapter}/${subchapter}`);
    }
    
    function toggleChecked() {
        setIsRedone(!isRedone);
        setIsRedoneInLocalStorage(!isRedone);
    }

    function isSetAsRedoneInLocalStorage(chapterId, subchapterId) {
        return localStorage.getItem(`${title}-${chapterId}-${subchapterId}`) === "true";
    }
    
    function setIsRedoneInLocalStorage(isRedone) {
        localStorage.setItem(`${title}-${curChapter}-${curSubchapter}`, isRedone ? "true" : "false");
    }

    function renderIcon(chapterId, subchapterId) {
        console.log(chapterId, subchapterId)
        return isSetAsRedoneInLocalStorage(chapterId, subchapterId)
            ? <FiberManualRecordIcon/>
            : <FiberManualRecordOutlinedIcon/>;
    }


    return (
        <main className={styles.main}>
            <div className={styles.contents}>
                <div className={`${styles.cont_title} ${styles.title}`}>
                    <a>{title}</a>
                    <img src={logo} alt="Logo" className={styles.section_logo}/>
                </div>

                <div className={styles.cont}>
                    {lessons.map((chapter, chapterId) =>
                        <Chapter 
                            key={chapterId}
                            chapter={chapter}
                            chapterId={chapterId}
                            icon={renderIcon(chapterId, 1)}
                        />
                    )}
                </div>
            </div>

            <div className={`${styles.main_content} main_content`}>
                <Outlet context={[lessons]}/>
                <div className={styles.controls}>
                    <div>
                        <label>
                        <Checkbox 
                            className={styles.checkbox}
                            onChange={toggleChecked}
                            checked={isRedone}
                            sx={{color: `var(--secondary3)`, '&.Mui-checked': {color: `var(--secondary3)`}}}
                        />
                        Oznacz lekcję jako przerobioną
                        </label>
                    </div>
                    <div>
                        {prevLessonExists && <button onClick={prevLesson}><ArrowBackIosNewIcon /></button>}
                        {nextLessonExists && <button onClick={nextLesson}><ArrowForwardIosIcon /></button>}
                    </div>
                </div>
                <Comments issue={`${title} ${curChapter}.${curSubchapter+1}`} />
            </div>
        </main>
    );
}

export default Section;