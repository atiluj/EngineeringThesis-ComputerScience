import * as React from 'react';
import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from '../Section.module.css';

function ChapterStandalone({ chapter, chapterId }) {
    return (
    <div className={'left_menu'}>
        <Link to={chapterId + '/1'} style={{textDecoration: 'none'}}>
            <div className={`${styles.topic} menu_button`}> 
                {chapterId}. {chapter.name}
                <ExpandMore style={{ visibility: "hidden" }}/>
            </div>
        </Link>
    </div>
    );
}

export default ChapterStandalone;