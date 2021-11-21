import React, {useRef, useState} from 'react';
// import miniPlayerImg from '../../../assets/images/3.jpg';
import sou from './MiniPlayer.module.css';
import ReactPlayer from 'react-player/youtube'

function MiniPlayer({id, title}) {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);

    const videoUrl = `https://www.youtube.com/watch?v=${id}`;

    function toggleMiniPlayer() {
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
            <span className={`material-icons-outlined ${sou.open}`}>{" "}play_circle_filled{" "}</span>

            <span
                className={`material-icons-outlined ${sou.close}`}
                onClick={toggleMiniPlayer}
            >{" "}close{" "}</span>

            <ReactPlayer
                className={sou.player}
                url={videoUrl}
                width="300px"
                height="168px"
                playing={status}
                controls
            />
            <p>{title}</p>
        </div>
    );
}

export default MiniPlayer;
