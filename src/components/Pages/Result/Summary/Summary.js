import React from 'react';
// import successImg from '../../../assets/images/success.png';
import score from '../../../assets/images/score.png';
import sou from './Summary.module.css';

function Summary() {
    return (
        <div className={sou.summary}>
            <div className={sou.point}>
                {/*// <!-- progress bar will be placed here -->*/}
                <p className={sou.score}>
                    Your score is <br/>
                    5 out of 10
                </p>
            </div>

            <div className={sou.badge}>
                <img src={score} alt="Success"/>
            </div>
        </div>
    );
}

export default Summary;
