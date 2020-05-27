import React, { useState } from 'react';
import './App.scss';
import DrumPad from './components/DrumPad'
import { soundSetOne } from './data/soundSetOne'
// import {soundSetTwo} from './data/soundSetTwo'

const App = () => {
  const [pads] = useState(soundSetOne);
  const [display, setDisplay] = useState('')

  return (
    <div id="drum-machine">
      <header>
        <h1>Drum Machine</h1>
        <p>How to use: Tap a drumpad or click the corresponding key. Have fun!</p>
      </header>
      <div id="display">
        {display}
      </div>
      <div id="pads">
        {pads.map(pad => (
          <DrumPad
            key={pad.id}
            audioId={pad.id}
            keyCode={pad.keyCode}
            keyTrigger={pad.keyTrigger}
            src={pad.src}
            updateDisplay={setDisplay}
          />
        ))}
      </div>
      <footer id="footer">
        <a href="https://github.com/vipulchodankar/react-drumpad">View the source code on GitHub</a> 
      </footer>
    </div>
  )
}

export default App;
