import * as React from 'react';
import { useContext } from 'react';
import { renderIcon } from '../SectionHelperFunctions';
import { NavLink } from "react-router-dom";
import styles from '../Section.module.css';
import { SectionContext } from '../Section'; 

function Subchapter({ chapterId, subchapterId, subchapter }) {
    const title = useContext(SectionContext);

    return (
    <NavLink to={chapterId + '/' + (subchapterId+1)} style={{textDecoration: 'none'}} className={({isActive}) => isActive ? styles.subtopic_current : null}>
        <div className={`${styles.subtopic} menu_button`}>
            <div className={styles.icon_wrapper}>
                {renderIcon(title, chapterId, subchapterId+1)}
            </div>
            <div>
                {chapterId}.{subchapterId + 1}. {subchapter.name}
            </div>
        </div>
    </NavLink>
    );
}

export default Subchapter;