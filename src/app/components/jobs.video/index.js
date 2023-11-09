'use client';
import { YouTube } from '@/app/components';
import { useDispatch, useSelector } from 'react-redux';
import { openYT } from '@/redux/reducers/payloadReduce';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const JobsVideo = () => {
    const dispatch = useDispatch()
    const { yotube } = useSelector(state => state.payloads)
    return (
        <>
            {yotube ? <YouTube params={yotube} /> : null}
            <section className="jobs-video">
                <div className="container">
                    <div className="video">
                        <button className="play" onClick={() => dispatch(openYT(true))}>
                            <PlayArrowIcon />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default JobsVideo;