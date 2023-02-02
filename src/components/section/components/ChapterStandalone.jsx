import * as React from 'react';
import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from '../Section.module.css';

function ChapterStandalone({ chapter, chapterId }) {
    return (
    <Link to={chapterId + '/1'} style={{textDecoration: 'none'}} className={'left_menu'}>
        <div className={`${styles.topic} menu_button`}> 
            {chapterId}. {chapter.name}
            <ExpandMore style={{ visibility: "hidden" }}/>
        </div>
    </Link>
    );
}

export default ChapterStandalone;