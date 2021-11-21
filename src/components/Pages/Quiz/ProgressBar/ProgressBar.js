import React, {useRef, useState} from 'react';
import Button from "../../../Button/Button";
import sou from './ProgressBar.module.css';

function ProgressBar({next, prev, progress, submit}) {
    const [tooltip, setTooltip] = useState(false);

    const tooltipRef = useRef();

    const toggleTooltip = () => {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = 'none';
        } else {
            setTooltip(true);
            tooltipRef.current.style.left = `calc(${progress}%-65px)`;
            tooltipRef.current.style.display = 'block';
        }
    }

    return (
        <div className={sou.progressBar}>
            <div className={sou.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={sou.rangeArea}>
                <div className={sou.tooltip} ref={tooltipRef}>{progress}% Complete!</div>
                <div className={sou.rangeBody}>
                    <div
                        className={sou.progress}
                        style={{width: `${progress}%`}}
                        onMouseOver={toggleTooltip}
                        onMouseOut={toggleTooltip}
                    />
                </div>
            </div>

            <Button
                className={sou.next}
                onClick={progress === 100 ? submit : next}
            >
                <span>{progress === 100 ? 'Submit Quiz' : 'Next Question'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}

export default ProgressBar;
