import * as React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Subchapter from './Subchapter';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import { SectionContext } from '../Section'; 
import styles from '../Section.module.css';
import { renderIconInChapterWithSubchapters } from '../SectionHelperFunctions';

function ChapterWithSubchapters({ chapter, chapterId }) {
    const { chapterId: curChapter } = useParams();
    const title = useContext(SectionContext);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        curChapter == chapterId ? setShow(true) : setShow(false);
    }, [curChapter]);

    return <div className={`left_menu`}>
        <div className={`${styles.topic} menu_button`} onClick={() => setShow(show => !show)}>
            <div className={styles.icon_wrapper}>
                {renderIconInChapterWithSubchapters(title, chapter, chapterId)} 
                {chapterId}. {chapter.name}
            </div>
            <div>
                {show ? <ExpandLess /> : <ExpandMore />}
            </div>
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