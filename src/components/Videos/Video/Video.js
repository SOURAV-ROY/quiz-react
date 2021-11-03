import React from 'react';
import image from '../../assets/images/3.jpg';
import sou from './Video.module.css';

function Video(props) {
    return (
        <a href="quiz.html">
            <div className={sou.video}>
                <img src={image} alt="Video"/>
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={sou.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}

export default Video;
