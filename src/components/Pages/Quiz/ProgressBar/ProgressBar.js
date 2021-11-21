import React from 'react';
import Button from "../../../Button/Button";
import sou from './ProgressBar.module.css';

function ProgressBar({next, prev, progress, submit}) {
    return (
        <div className={sou.progressBar}>
            <div className={sou.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={sou.rangeArea}>
                <div className={sou.tooltip}>{progress}% Complete!</div>
                <div className={sou.rangeBody}>
                    <div className={sou.progress} style={{width: `${progress}%`}}/>
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
