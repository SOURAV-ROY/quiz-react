import React, {useMemo} from 'react';
import scoreImg from '../../../assets/images/score.png';
import sou from './Summary.module.css';
import useFetch from "../../../../hooks/useFetch";

function Summary({score, noq}) {
    // console.log('summary');
    const getKeyWord = useMemo(() => {
        console.log('GetKeyWord');
        if ((score / (noq * 5)) * 100 < 50) {
            return 'DONE';
        } else if ((score / (noq * 5)) * 100 < 75) {
            return 'very good';
        } else if ((score / (noq * 5)) * 100 < 100) {
            return 'WOW';
        } else {
            return 'excellent';
        }
    }, [score, noq]);

    const {loading, error, result} = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyWord}&per_page=1`,
        'GET',
        {Authorization: process.env.REACT_APP_PEXELS_API_KEY}
    );
    // console.log(result);

    const image = result ? result?.photos[0].src.medium : scoreImg;

    return (
        <div className={sou.summary}>

            <div className={sou.point}>
                <p className={sou.score}>
                    Your score is <br/>
                    {score} out of {noq * 5}
                </p>
            </div>
            {loading && <div className={sou.badge}>Loading...</div>}
            {error && <div className={sou.badge}>Error Occurred !!</div>}

            {!loading && !error && (
                <div className={sou.badge}>
                    <img src={image} alt="Success"/>
                </div>
            )}
        </div>
    );
}

export default Summary;
