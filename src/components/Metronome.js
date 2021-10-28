import React, {useState} from 'react';


const Metronome = () => {

    const [bpm, setNumber] = useState(120);
    const [playing, setPlaying] = useState(false);

    let delay = 60/bpm * 1000;
    let interval;

    const handleRangeChange = (event) => {
        setNumber(event.target.value);
    }

    const startStop = () => {
        if(!playing){
            interval = setInterval(click, delay);
            setPlaying(true);
            console.log(playing)
        } else {
            clearInterval(interval);
            setPlaying(false);
            console.log(playing)
        }
    }
        
        

    const click = () => {
        console.log(playing);
        console.log('Click');
        
    }

    


    return (
        <>
            <p>{bpm}</p>
            <form>
                <label>BPM</label>
                    <input 
                    type="range" 
                    min="40" max="218" 
                    steps="1" 
                    onChange={handleRangeChange} 
                    defaultValue="120"

                    />
            </form>
            <button onClick={startStop}>
                {playing ? 'stop' : 'start'}
            </button>
            



        </>
    )

    
}

export default Metronome;