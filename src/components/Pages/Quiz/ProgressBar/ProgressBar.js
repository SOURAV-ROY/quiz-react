import React from 'react';
import Button from "../../../Button/Button";
import sou from './ProgressBar.module.css';

function ProgressBar() {
    return (
        <div className={sou.progressBar}>
            <div className={sou.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={sou.rangeArea}>
                <div className={sou.tooltip}>20% Complete!</div>
                <div className={sou.rangeBody}>
                    <div className={sou.progress} style={{width: "20%"}}/>
                </div>
            </div>
            <a href="result.html">
                <Button className={sou.next}>
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </Button>
            </a>
        </div>
    );
}

export default ProgressBar;
