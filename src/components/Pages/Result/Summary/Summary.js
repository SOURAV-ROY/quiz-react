import React from 'react';
// import successImg from '../../../assets/images/success.png';
import scoreImg from '../../../assets/images/score.png';
import sou from './Summary.module.css';

function Summary({score, noq}) {
    return (
        <div className={sou.summary}>
            <div className={sou.point}>
                {/*// <!-- progress bar will be placed here -->*/}
                <p className={sou.score}>
                    Your score is <br/>
                    {score} out of {noq * 5}
                </p>
            </div>

            <div className={sou.badge}>
                <img src={scoreImg} alt="Success"/>
            </div>
        </div>
    );
}

export default Summary;
