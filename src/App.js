import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad'
import {data} from './data/data'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pads: data
    }
  }
  
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          {
            this.state.pads.map((pad) => (<DrumPad key={pad.id} audioId={pad.id} keyCode={pad.keyCode} keyTrigger={pad.keyTrigger} src={pad.src}/>))
          }
        </div>
      </div>
    )
  }
};

export default App;
