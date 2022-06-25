import { createContext, FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import './App.css';
import Emoji from './components/Emoji';


//inspired from fireship
const moods = {
  happy: '🤩',
  sad: '😥'
};

export const MoodContext = createContext(moods);

const App: FC = () => {
  // "counter" is a number state initialised to 0, "setCounter" is a function which sets "counter'"
  const [counter, setCounter] = useState<number>(0);

  const BlinkerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const timeout = setTimeout(() => { //this part is run
      console.log("Reacting to counter after 2 s");
    }, 2000);

    const interval = setInterval(() => {
      if (BlinkerDivRef.current)
        BlinkerDivRef.current.hidden = !BlinkerDivRef.current.hidden;
    }, 1000);

    return () => {
      // cleanup code (run during component destruction)
      clearTimeout(timeout);
      clearInterval(interval);
    };

  }, [counter]); //changing "counter" triggers this useEffect


  return (
    <MoodContext.Provider value={moods}>
      <div className="App">
        <p className="purpose">This repository will have various react hooks and redux experimented on it</p>
        <p>This is the counter state: {counter}</p>
        <p>Click to change the state of counter:&nbsp;
          <button onClick={() => setCounter(counter - 1)}>-</button>&nbsp;
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </p>
        <div className="context">
          <p>Below is the &lt;Emoji/&gt; component:</p>
          <Emoji />
        </div>
        <div className="blinker" ref={BlinkerDivRef}></div>
      </div>
    </MoodContext.Provider>
  );
}

export default App;
