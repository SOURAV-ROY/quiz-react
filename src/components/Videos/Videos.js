import React from 'react';
import Video from './Video/Video';
import sou from './Videos.module.css';

// import {Link} from 'react-router-dom';

function Videos() {
    return (
        <div className={sou.videos}>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            {/*<Link to='/quiz'><Video/></Link>*/}
        </div>
    );
}

export default Videos;
