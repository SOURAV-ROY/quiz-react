import React from 'react';
// import image from '../../assets/images/3.jpg';
import sou from './Video.module.css';

// import {Link} from 'react-router-dom';

function Video({title, id, noq}) {
    return (
        // <Link to='/quiz'>
        <div className={sou.video}>
            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title}/>
            <p>{title}</p>
            <div className={sou.qmeta}>
                <p>{noq} Questions</p>
                <p>Total Score : {noq * 2.5}</p>
            </div>
        </div>
        // </Link>
    );
}

export default Video;
