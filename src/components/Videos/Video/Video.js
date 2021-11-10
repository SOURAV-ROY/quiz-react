import React from 'react';
import image from '../../assets/images/3.jpg';
import sou from './Video.module.css';

// import {Link} from 'react-router-dom';

function Video() {
    return (
        // <Link to='/quiz'>
        <div className={sou.video}>
            <img src={image} alt="Video"/>
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={sou.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
        // </Link>
    );
}

export default Video;
