import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './Section.module.css';
export function isSetAsRedoneInLocalStorage(title, chapterId, subchapterId) {
    return localStorage.getItem(`${title}-${chapterId}-${subchapterId}`) === "true";
}

export function setAsRedoneInLocalStorage(title, chapterId, subchapterId, isRedone) {
    localStorage.setItem(`${title}-${chapterId}-${subchapterId}`, isRedone ? "true" : "false");
}

export function renderIcon(title, chapterId, subchapterId) {
    return isSetAsRedoneInLocalStorage(title, chapterId, subchapterId)
        ? <FiberManualRecordIcon className={styles.progress_icon}/>
        : <FiberManualRecordOutlinedIcon className={styles.progress_icon}/>;
}

export function renderIconInChapterWithSubchapters(title, chapter, chapterId) {
    let isAnySubchapterNotRedone = false;
    chapter.subchapters.map((subchapter, subchapterId) => {
        if (!isSetAsRedoneInLocalStorage(title, chapterId, subchapterId+1)) {
            isAnySubchapterNotRedone = true;
        }
    });
    return isAnySubchapterNotRedone ? <FiberManualRecordOutlinedIcon className={styles.progress_icon}/> : <FiberManualRecordIcon className={styles.progress_icon}/>;
}