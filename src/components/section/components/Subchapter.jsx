import * as React from 'react';
import NavContext from '../NavContext';
import styles from '../Section.module.css';

function Subchapter({ chapterId, subchapterId, subchapter }) {
    const { changeChapter, curChapter, curSubchapter } = React.useContext(NavContext);
    const isCurrent = chapterId == curChapter && subchapterId == curSubchapter;
    
    return <a href="#" className={`${styles.subtopic} menu_button` + (isCurrent ? ` ${styles.subtopic_current}` : ``)}
        onClick={() => changeChapter(chapterId, subchapterId)}>
        {chapterId}.{subchapterId + 1}. {subchapter.name}
    </a>;
}

export default Subchapter;