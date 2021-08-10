import './player.styles.scss'; 
import calm from '../assets/calm.mp4'; 
import ReactPlayer from 'react-player';


// fetch data 
// filter data using regex 


const fetchQuote = () =>  {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://zenquotes.io/api/quotes'
    fetch(`${proxyurl}${url}`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

fetchQuote();

const Player = () => {

    return (
        <div className='cover'>
        <ReactPlayer 
        className='player' 
        width='null'
        height='null'
        url={calm} 
        playing 
        loop 
        muted
        ></ReactPlayer>
        <input
        type='text' value='Search Bar'
       ></input>
        </div>
    )
}

export default Player; 