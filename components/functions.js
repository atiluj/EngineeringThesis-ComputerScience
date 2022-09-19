import * as React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

export function Chapter(props) {
    const [show, setShow] = React.useState(false); //domyślnie schowane
    return <div>
        <div className="topic" onClick={() => setShow(show => !show)}>
            <a>{props.title}</a>
            <div style={{visibility: props.children ? "visible" : "hidden"}}>
                {show ? <ExpandLess /> : <ExpandMore />}
            </div>
        </div>
        <Collapse in={show}>
            {props.children}
        </Collapse>
    </div>;
}