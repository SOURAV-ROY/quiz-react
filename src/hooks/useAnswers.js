import {useEffect, useState} from 'react';
import {
    getDatabase,
    ref,
    query,
    orderByKey,
    get,
} from 'firebase/database';

function useAnswers(videoID) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            // Database related work
            const db = getDatabase();
            const answerRef = ref(db, 'answers/' + videoID + '/questions');

            const answerQuery = query(
                answerRef,
                orderByKey(),
            );

            try {
                setError(false);
                setLoading(true);
                // Request firebase database
                const snapshot = await get(answerQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => {
                        return [...prevAnswers, ...Object.values(snapshot.val())];
                    })
                }

            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchAnswers().then(() => console.log(`Answers Loaded !!!`));


    }, [videoID])

    return {
        loading,
        error,
        answers,
    }
}

export default useAnswers;