import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../Section.module.css';

function Subchapter({ chapterId, subchapterId, subchapter }) {
    const { chapterId: curChapter, subchapterId: curSubchapter } = useParams();
    const isCurrent = chapterId == curChapter && subchapterId + 1 == curSubchapter;

    return (
    <Link to={chapterId + '/' + (subchapterId+1)} style={{textDecoration: 'none'}}>
        <div className={`${styles.subtopic} menu_button` + (isCurrent ? ` ${styles.subtopic_current}` : '')}>
            {chapterId}.{subchapterId + 1}. {subchapter.name}
        </div>
    </Link>
    );
}

export default Subchapter;