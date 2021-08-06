import './player.styles.scss'; 
import calm from '../assets/calm.mp4'; 
import ReactPlayer from 'react-player';

const Player = () => {
    return (
        <div>
        <ReactPlayer 
        className='player' 
        url={calm} 
        playing 
        loop 
        muted
        ></ReactPlayer>
        </div>
    )
}

export default Player; 