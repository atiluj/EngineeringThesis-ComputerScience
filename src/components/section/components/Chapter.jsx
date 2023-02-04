import * as React from 'react';
import ChapterWithSubchapters from './ChapterWithSubchapters';
import ChapterStandalone from './ChapterStandalone';

function Chapter({ chapter, chapterId, icon }) {
    return (
        chapter.subchapters ?
            <ChapterWithSubchapters chapter={chapter} chapterId={chapterId} /> :
            <ChapterStandalone chapter={chapter} chapterId={chapterId} icon={icon} />
    );
}

export default Chapter;