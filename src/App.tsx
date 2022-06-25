import { FC, useEffect, useState } from 'react';
import './App.css';

const App: FC = () => {
  // "counter" is a number state initialised to 0, "setCounter" is a function which sets "counter'"
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {

    const timeout = setTimeout(() => { //this part is run
      console.log("Reacting to counter after 2 s");
    }, 2000);

    return () => {
      // cleanup code (run during component destruction)
      clearTimeout(timeout);
    };

  }, [counter]); //changing "counter" triggers this useEffect


  return (
    <div className="App">
      <p className="purpose">This repository will have various react hooks and redux experimented on it</p>
      <p>This is the counter state: {counter}</p>
      <p>Click to change the state of counter:&nbsp;
        <button onClick={() => setCounter(counter - 1)}>dec</button>&nbsp;
        <button onClick={() => setCounter(counter + 1)}>inc</button>
      </p>
    </div>
  );
}

export default App;
