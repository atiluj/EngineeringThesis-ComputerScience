import * as React from 'react';

const NavContext = React.createContext({
    curChapter: 0,
    curSubchapter: 0,
    changeChapter: (chapter, subchapter) => { },
});

export default NavContext;