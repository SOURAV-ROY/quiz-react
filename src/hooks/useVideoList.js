import {useEffect, useState} from 'react';
import {getDatabase, ref, query, orderByKey, get} from 'firebase/database';

function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            // Database related work
            const db = getDatabase();
            const videosRef = ref(db, 'videos');

            const videoQuery = query(
                videosRef,
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);
                // Request firebase database
                const snapshot = await get(videoQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())];
                    })
                } else {

                }

            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchVideos().then(() => console.log(`Loaded successfully !!! ${get}`));
    }, [])

    return {
        loading,
        error,
        videos
    }
}

export default useVideoList;