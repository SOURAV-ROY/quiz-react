import React from 'react';
import Video from './Video/Video';
import sou from './Videos.module.css';
import {Link} from 'react-router-dom';
import useVideoList from '../../hooks/useVideoList';

function Videos() {
    const {loading, videos, error} = useVideoList();
    return (
        <div className={sou.videos}>
            {videos.length > 0 && videos.map(video => (
                <Link to='/quiz' key={video.youtubeID}>
                    <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                </Link>
            ))}
            {!loading && videos.length === 0 && <div>No Data Found !!</div>}
            {error && <div>There was an error !</div>}
            {loading && <div>Loading.....</div>}
        </div>
    );
}

export default Videos;
