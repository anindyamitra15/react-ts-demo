import { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="App">
      <p className="purpose">This repository will have various react hooks and redux experimented on it</p>
      <p>This is the state: {counter}</p>
      <p>Click to change the state:&nbsp;
        <button onClick={() => setCounter(counter - 1)}>dec</button>&nbsp;
        <button onClick={() => setCounter(counter + 1)}>inc</button>
      </p>
    </div>
  );
}

export default App;
