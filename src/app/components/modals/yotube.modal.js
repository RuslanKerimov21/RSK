'use client';
import './index.css';
import YouTube from 'react-youtube';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { openYT } from '@/redux/reducers/payloadReduce';
const YouTubeV = ({ params }) => {
    const dispatch = useDispatch()
    const initalvalue = {
        width: '100%',
        height: '350',
        playerVars: {
            autoplay: params,
        },
    }
    return (
        <div className="overlay yotube" onClick={() => dispatch(openYT(false))}>
            <button className="close" onClick={() => dispatch(openYT(false))}>
                <CloseIcon />
            </button>
            <div className="video-frame" onClick={(e) => e.stopPropagation()}>
                <YouTube videoId="ZvpZrSgAik4" opts={initalvalue} />
            </div>
        </div>
    )
}
export default YouTubeV;