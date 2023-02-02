import * as React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import hljs from 'highlight.js';

function Contents() {
    const { chapterId = 0, subchapterId = 1 } = useParams();
    const [ lessons ] = useOutletContext();
    const chapter = lessons[chapterId];
    const subchapter = chapter.subchapters ? chapter.subchapters[subchapterId-1] : chapter;
    
    let title = `${chapterId}.`;
    if (chapter.subchapters)
        title += `${subchapterId}.`;
    title += ` ${subchapter.name}`;
    React.useEffect(() => { hljs.highlightAll(); }, [subchapter.content]);
    
    return <article className={`second`}>
        <h1>{title}</h1>
        {subchapter.content}
    </article>;
}

export default Contents;