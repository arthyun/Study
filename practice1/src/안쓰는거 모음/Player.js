import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    const [playing, setPlaying] = useState(false);

    const handleClick = () => {
        setPlaying(true);
    };
    
    return (
        <div>
            <button onClick={handleClick}>Play</button>
            {playing && (
                <ReactPlayer url="/path/to/my-video.mp4" playing />
            )}
        </div>
    );

}
export default Player;