import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { renderIcon } from '../SectionHelperFunctions';
import styles from '../Section.module.css';
import { SectionContext } from '../Section'; 

function ChapterStandalone({ chapter, chapterId }) {
    const title = useContext(SectionContext);

    return (
    <div className={'left_menu'}>
        <Link to={chapterId + '/' + 1} style={{textDecoration: 'none'}}>
            <div className={`${styles.topic} ${styles.standalone} menu_button`}> 
                <div className={styles.icon_wrapper}>
                    {renderIcon(title, chapterId, 1)}
                </div>
                <div>
                    {chapterId}. {chapter.name}
                </div>  
            </div>
        </Link>
    </div>
    );
}

export default ChapterStandalone;