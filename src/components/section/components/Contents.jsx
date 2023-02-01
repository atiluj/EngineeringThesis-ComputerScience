import * as React from 'react';
import NavContext from '../NavContext';
import hljs from 'highlight.js';

function Contents({lessons}) {
    const { curChapter, curSubchapter } = React.useContext(NavContext);
    const chapter = lessons[curChapter];
    const subchapter = chapter.subchapters ? chapter.subchapters[curSubchapter] : chapter;
    let title = `${curChapter}.`;
    if (chapter.subchapters)
        title += `${curSubchapter + 1}.`;
    title += ` ${subchapter.name}`;
    React.useEffect(() => { hljs.highlightAll(); }, [subchapter.content]); //śmieszna funkcja do skanownaia stronki i kolorowania kodu
    
    return <article className={`second`}>
        <h1>{title}</h1>
        {subchapter.content}
    </article>;
}

export default Contents;