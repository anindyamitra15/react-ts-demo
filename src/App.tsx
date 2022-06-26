import { createContext, FC, useEffect, useRef, useState } from 'react';
import './App.css';
import Emoji from './components/Emoji';
import RefnEffectDemo from './components/RefnEffectDemo';
import StateDemo from './components/StateDemo';


//inspired from fireship
const moods = {
  happy: '🤩',
  sad: '😥'
};

export const MoodContext = createContext(moods);

const App: FC = () => {

  
  return (
    <MoodContext.Provider value={moods}>
      <div className="App">
        <p className="purpose">This repository will have various react hooks and redux experimented on it</p>
        <StateDemo />
        <div className="context">
          <p>Below is the &lt;Emoji/&gt; component:</p>
          <Emoji />
        </div>
        <RefnEffectDemo />
      </div>
    </MoodContext.Provider>
  );
}

export default App;
