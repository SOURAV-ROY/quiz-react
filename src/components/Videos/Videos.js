import React from 'react';
import sou from '../assets/css/Videos.module.css';
import Video from './Video';

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
