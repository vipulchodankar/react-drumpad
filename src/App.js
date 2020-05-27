import React from 'react';
import './App.scss';
import DrumPad from './components/DrumPad'
import {soundSetOne} from './data/soundSetOne'
// import {soundSetTwo} from './data/soundSetTwo'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pads: soundSetOne,
      display: ''
    }

    this.updateDisplay = this.updateDisplay.bind(this);
  }
  
  updateDisplay(text) {
    this.setState({
      pads: this.state.pads,
      display: text
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          { this.state.display }
        </div>
        <div id="soundSet">
          
        </div>
        <div id="pads">
          { this.state.pads.map((pad) => (<
            DrumPad key={pad.id} audioId={pad.id} keyCode={pad.keyCode} keyTrigger={pad.keyTrigger} src={pad.src} updateDisplay={this.updateDisplay}/>
          )) }
        </div>
      </div>
    )
  }
};

export default App;
