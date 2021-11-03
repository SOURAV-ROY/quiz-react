import React from 'react';
import Video from './Video/Video';
import sou from './Videos.module.css';

function Videos(props) {
    return (
        <div className={sou.videos}>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
        </div>
    );
}

export default Videos;
