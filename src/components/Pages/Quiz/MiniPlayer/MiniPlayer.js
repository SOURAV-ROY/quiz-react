import React, {useRef, useState} from 'react';
import miniPlayerImg from '../../../assets/images/3.jpg';
import sou from './MiniPlayer.module.css';

function MiniPlayer() {
    const [status, setStatus] = useState(false);
    const buttonRef = useRef();

    const toggleMiniPlayer = () => {
        if (!status) {
            buttonRef.current.classList.remove(sou.floatingBtn);
            setStatus(true);
        } else {
            buttonRef.current.classList.add(sou.floatingBtn);
            setStatus(false);
        }
    }

    return (
        <div
            className={`${sou.miniPlayer} ${sou.floatingBtn}`}
            ref={buttonRef}
            onClick={toggleMiniPlayer}
        >
            <span className={`material-icons-outlined ${sou.open}`}>
                {' '}
                play_circle_filled{' '}
            </span>
            <span
                className={`material-icons-outlined ${sou.close}`}
                onClick={toggleMiniPlayer}
            >
                {' '}
                close{' '}
            </span>
            <img src={miniPlayerImg} alt=""/>
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}

export default MiniPlayer;
