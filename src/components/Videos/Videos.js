import React, {useState} from 'react';
import Video from './Video/Video';
// import sou from './Videos.module.css';
import {Link} from 'react-router-dom';
import useVideoList from '../../hooks/useVideoList';
import InfiniteScroll from 'react-infinite-scroll-component';

function Videos() {
    const [page, setPage] = useState(1);
    const {loading, videos, error, hasMore} = useVideoList(page);

    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => setPage(page + 6)}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}>
                    {
                        videos.map(video => video.noq > 0 ? (
                            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                                <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                            </Link>
                        ) : (
                            <Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq}/>
                        ))
                    }
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No Data Found !!</div>}
            {error && <div>There was an error !</div>}
            {loading && <div>Loading.....</div>}
        </div>
    );
}

export default Videos;
