import React from 'react';
import miniPlayerImg from '../../../assets/images/3.jpg';
import sou from './MiniPlayer.module.css';

function MiniPlayer() {
    return (
        <div className={`${sou.miniPlayer} ${sou.floatingBtn}`}>
            <span className={`material-icons-outlined ${sou.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined ${sou.close}`}> close </span>
            <img src={miniPlayerImg} alt=""/>
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}

export default MiniPlayer;
