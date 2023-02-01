import * as React from 'react';
import NavContext from '../NavContext';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from '../Section.module.css';

function ChapterStandalone({ chapter, chapterId }) {
    const { changeChapter } = React.useContext(NavContext);
    
    return (
    <div className={'left_menu'} onClick={() => changeChapter(chapterId, 0)}>
        <div className={`${styles.topic} menu_button`}>
            <a>{chapterId}. {chapter.name}</a>
            <ExpandMore style={{ visibility: "hidden" }}/>
        </div>
    </div>);
}

export default ChapterStandalone;