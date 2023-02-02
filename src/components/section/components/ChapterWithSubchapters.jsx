import * as React from 'react';
import Subchapter from './Subchapter';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import styles from '../Section.module.css';

function ChapterWithSubchapters({ chapter, chapterId }) {
    const [show, setShow] = React.useState(false);

    return <div className={`left_menu`}>
        <div className={`${styles.topic} menu_button`} onClick={() => setShow(show => !show)}>
            <a>{chapterId}. {chapter.name}</a>
            {show ? <ExpandLess /> : <ExpandMore />}
        </div>
        <Collapse in={show}>
            {chapter.subchapters.map((subchapter, subchapterId) =>
                <Subchapter key={subchapterId}
                    chapterId={chapterId} subchapterId={subchapterId} subchapter={subchapter} />
            )}
        </Collapse>
    </div>;
}

export default ChapterWithSubchapters;