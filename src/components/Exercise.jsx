import styles from './Exercise.module.css';
import * as React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';
import { useParams } from 'react-router-dom';

import Comments from './Comments';

function Contents({chapter}) {
    React.useEffect(() => { hljs.highlightAll(); }, [chapter.content]);
    return <article className={`second`}>
        {chapter.content}
    </article>;
}

function Exercise({lessons}) {
    let { id } = useParams();
    const chapter = lessons[id];
    const title = `${id}. ${chapter.name}`;
    return <>
        <main className={styles.main}>
            <div className={styles.exercise_title}>
                <h1>{title}</h1>
            </div>
            <div className={`${styles.main_content} main_content`}>
                <Contents chapter={chapter} />
            </div>
            <Comments issue={`${title}`} />

        </main>
    </>;
}

export default Exercise;